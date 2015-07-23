package QuickSort;

public class QuickSortMedianPivot extends AbstractQuickSort{

	public QuickSortMedianPivot(int[] arr) {
		super(arr);
		// TODO Auto-generated constructor stub
	}

	@Override
	protected int choosePivot(int length,int from, int to) {
		// TODO Auto-generated method stub
		int median=0;
		if(length>2)
		median=from+length/2; // find median index
		else{
			if(result[from]<result[to])
				return 0;
			else return to-from; // we return not absolute but relative index in the array slice
		}
		if (length%2!=0) // if array is odd length then median+1
			median++;
		int[] arr=new int[]{result[from],result[median],result[to]}; // take first, median, last elements
		int[] indices=new int[]{from,median,to};
		QuickSortFirstPivot q=new QuickSortFirstPivot(arr); // sort it
		q.start();
		arr=q.getSortedArray();
		
		for (int i: indices){ // now find index of median element of sorted array in our resulting array
			if (result[i]==arr[1])
				return i-from;
		}
		return 0; // return median element
	}

}
