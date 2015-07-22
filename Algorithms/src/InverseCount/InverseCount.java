package InverseCount;

import java.util.Arrays;

import utils.FileReader;

public class InverseCount {

	private static String path = "C:\\Users\\atrok\\Documents\\Coursera\\Algorithms 1\\HomeTask\\w1\\IntegerArray.txt";
	private long[][] numbers;
	private long[][] result;
	
	public InverseCount(long[] arr){
		numbers=new long[][]{arr,new long[1]};
		result=run();
	}
	
	public InverseCount(String path){
		FileReader fr=new FileReader(path,false);
		
		numbers=new long[][]{fr.getResultLong(), new long[1]};
		result=run();
	}
	
	public long getCount(){
		
		return result[1][0];
	}
	private long[][] run(){
		
		long start=System.currentTimeMillis();
		
		long[][] countedArr=Count(numbers);
		
		//System.out.println("count runs: "+(System.currentTimeMillis()-start));
		//System.out.println("Submitted array:"+Arrays.toString(numbers[0]));
		//System.out.println("Resulting array:"+Arrays.toString(countedArr[0]));
		System.out.println("Counted number of inversions:"+countedArr[1][0]);
		System.out.println("running time: "+(System.currentTimeMillis()-start)+" ms");

		return countedArr;

	}

	private static long[][] Count(long[][] numbers){
		
		int n=numbers[0].length;
		
		//System.out.println("Count: number[] array length:"+n+" lessHalf indices: 0-"+((n/2)-1)+"; moreHalf indices:"+(n/2)+"-"+(n-1));
		

		if (n==1){
			numbers[1][0]=0;
			return numbers;
		}		
		
		int lowerBound=0,upperBound=0;
		
		if (n%4==0||n/2==1) {
			lowerBound=(n/2);
			upperBound=n/2;}
		else {
			lowerBound=(n/2)+1;
			upperBound=(n/2)+1;
		}
		
		
		
		long[][] lessHalf=new long[][]{Arrays.copyOfRange(numbers[0], 0, lowerBound ),new long[1]};
		
		//System.out.println("Count:lessHalf array "+Arrays.toString(lessHalf[0]));
		
		long[][] moreHalf=new long[][]{Arrays.copyOfRange(numbers[0], upperBound, n),new long[1]};
		
		//System.out.println("Count:moreHalf array "+Arrays.toString(moreHalf[0]));
		
		long[][] x=Count(lessHalf);
		//System.out.println("Count: lessHalf has done: array "+Arrays.toString(x[0])+", inversions "+x[1][0]);
		
		long[][] y=Count(moreHalf);
		//System.out.println("Count: moreHalf has done: array "+Arrays.toString(x[0])+", inversions "+y[1][0]);
		long[][] z=CountInversions(x,y);
		//System.out.println("Count: CountInversions has done: array "+Arrays.toString(z[0])+", inversions "+z[1][0]);
		
		z[1][0]=x[1][0]+y[1][0]+z[1][0];
		return z;
	}
	
	private static long[][] CountInversions(long[][] lessHalf, long[][] moreHalf ){
		
		long start=System.nanoTime();
		long[][] D=new long[][]{new long[lessHalf[0].length+moreHalf[0].length],new long[1]};
		
		//System.out.println("CountInverse: "+Arrays.toString(lessHalf[0])+" vs "+Arrays.toString(moreHalf[0]));
		int i=0,j=0,Dlength=D[0].length,Llength=lessHalf[0].length,Rlength=moreHalf[0].length;
		long invCount=0;
		for (int k=0;k<Dlength;k++){
			
			if (i<Llength && j<Rlength){
				//System.out.println("CountInversion: Comparing "+lessHalf[0][i]+" vs "+moreHalf[0][j]);

				if (lessHalf[0][i]<moreHalf[0][j]){
					D[0][k]=lessHalf[0][i];
					//D[0][k+1]=moreHalf[0][i];
					
					i++;					
					
				}else if(moreHalf[0][j]<lessHalf[0][i]){
					D[0][k]=moreHalf[0][j];
					//D[0][k+1]=lessHalf[0][i];
					
				invCount+=Llength-i;
				//System.out.println("CountInversion: inversion detected "+lessHalf[0][i]+" > "+moreHalf[0][j]);
				j++;
				}
			}else{ // bound condition when we reached the end of one of array and we need to append remaining numbers from second array to resulting array
				if (Llength==i){
					D[0][k]=moreHalf[0][j];
					j++;
				}else if (Rlength==j){
					D[0][k]=lessHalf[0][i];
					i++;
				}
			}

		}
		
		//System.out.println("CountInversions runs:"+(System.nanoTime()-start)/1000000000);
		
		D[1][0]=invCount;
		return D;
		
	}
	
}
