package QuickSort;

import java.util.Random;

public class QuickSort {
	
	private int[] result;
	private Random r=new Random();
	
	public QuickSort(int[] arr){
		result=new int[arr.length];
		result=arr;
		run(result.length,0,result.length-1);
		
	}
	
	public int[] getSortedArray(){
		return result;
	}
	
	private void run(int length, int from, int to){
		if (length>1){

		
		int p=from+choosePivot(length);// get index of pivot
		if (p!=from)
			swapElement(p,from);// set pivot at the beginning of the array slice
		int i=getPartition(result[from],from,to); // sorting array with 
		
		run(i-from,from,i-1);
		run(to-i,i+1,to);
		
		}
	}
	
	private void swapElement(int from, int to){
		int a=result[from];
		int b=result[to];
		result[from]=b;
		result[to]=a;
		
	}
	private int choosePivot(int length){ // here we return an index of element in the array that we deem as a pivot, not the element itself
		return 0;//r.nextInt(length-1);// since arrays are numerated from 0 to length-1
	}
	
	private int getPartition(int p, int from, int to){
		int i=from+1;
		for (int j=from+1;j<=to;j++){
			
			if(p>result[j]){//p is a pivot, and 'from' is expected to be an index of pivot in 'arr' 
				swapElement(j,i);
				i++;
			}
			
		}
		
		if (from!=(i-1))// to avoid swapping elements located on the same place
			swapElement(from,i-1);
		return i-1;// <--returning position of pivot in partitioned array
		
	}

}
