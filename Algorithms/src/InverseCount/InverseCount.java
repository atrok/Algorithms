package InverseCount;

import java.util.Arrays;

public class InverseCount {

	private static String path = "C:\\Users\\atrok\\Documents\\Coursera\\Algorithms 1\\HomeTask\\w1";
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		FileReader fr=new FileReader(path,false);
		
		String[] res=fr.getResult();
		Integer[][] numbers=new Integer[][]{new Integer[res.length], new Integer[1]};
		int i=0;
		for (String r: res){
			numbers[0][i]=Integer.valueOf(res[i]);
		}
		
		Count(numbers);
		

	}

	private static Integer[][] Count(Integer[][] numbers){
		
		int n=numbers[0].length;
		if (n==1){
			numbers[1][0]=0;
		}
		
		Integer[] lessHalf=Arrays.copyOfRange(numbers, 0, (n/2)-1);
		Integer[] moreHalf=Arrays.copyOfRange(numbers, (n/2)-1, n-1);
		Integer[][] x=Count(lessHalf);
		Integer[][] y=Count(moreHalf);
		Integer[][] z=CountInversions(x,y);
		return x+y+z;
	}
	
	private static int CountInversions(Integer[] lessHalf, Integer[] moreHalf ){
		
		Integer[] D=new Integer[lessHalf.length*2];
		int i=0,j=0,invCount=0;
		for (int k=0;k<lessHalf.length*2;k++){
			if (lessHalf[i]<moreHalf[j]){
					D[k]=lessHalf[i];
					i++;
			}else if(moreHalf[j]<lessHalf[i]){
				D[k]=moreHalf[j];
				j++;
				invCount++;
			}
		}
		
		return invCount;
		
	}
	
}
