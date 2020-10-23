package QuickSort;

import java.util.Random;

public abstract class AbstractQuickSort {
	
	protected int[] result;
	protected Random r=new Random();
	protected long comparison=0;
	
	public AbstractQuickSort(int[] arr){
		result=new int[arr.length];
		result=arr;
		
	}
	
	public long start(){
		run(result.length,0,result.length-1);
		
		return comparison;
	}
	
	public int[] getSortedArray(){
		
		return result;
	}
	
	private void run(int length, int from, int to){
		if (length>1){

		comparison+=length-1;
		
		int p=from+choosePivot(length,from,to);// get index of pivot
		if (p!=from)
			swapElement(p,from,result);// set pivot at the beginning of the array slice
		int i=getPartition(result[from],from,to); // sorting array with 
		
		run(i-from,from,i-1);
		run(to-i,i+1,to);
		
		}
	}
	/* by default swap */
	protected int[] swapElement(int from, int to, int[] optionalArray){
		int a=optionalArray[from];
		int b=optionalArray[to];
		optionalArray[from]=b;
		optionalArray[to]=a;
		return optionalArray;
	}
	abstract protected int choosePivot(int length,int from, int to); // here we return an index of element in the array that we deem as a pivot, not the element itself

	
	private int getPartition(int p, int from, int to){
		int i=from+1;
		for (int j=from+1;j<=to;j++){
			
			if(p>result[j]){//p is a pivot, and 'from' is expected to be an index of pivot in 'arr' 
				swapElement(j,i,result);
				i++;
			}
			
		}
		
		if (from!=(i-1))// to avoid swapping elements located on the same place
			swapElement(from,i-1,result);
		return i-1;// <--returning position of pivot in partitioned array
		
	}

}
