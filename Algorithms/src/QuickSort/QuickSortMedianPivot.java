package QuickSort;

import java.util.Arrays;

public class QuickSortMedianPivot extends AbstractQuickSort{

	public QuickSortMedianPivot(int[] arr) {
		super(arr);
		// TODO Auto-generated constructor stub
	}

	@Override
	protected int choosePivot(int length, int from, int to) {
		// TODO Auto-generated method stub
		
		int median = (length / 2)-1;
		
		if (length > 2) {
			median = from + median; // find median index

			if (length % 2 != 0) // if array is odd length then median+1
				median++;

			//System.out.println(this.getClass().getName() + ".choosePivot: length "+ length + ", length/2 "+length/2+", from " + from + ", to " + to+", median "+median);
			
			int[] arr = new int[] { result[from], result[median], result[to] }; // take
																				// first,
																				// median,
																				// last
																				// elements
			int[] indices = new int[] { from, median, to };

			//System.out.println(this.getClass().getName() + ".choosePivot: unsorted "+ Arrays.toString(arr));
			
			//System.out.println(this.getClass().getName() + ".choosePivot: indices  "+ Arrays.toString(indices));
			
			QuickSortFirstPivot q = new QuickSortFirstPivot(arr); // sort it
			q.start();
			arr = q.getSortedArray();
			
			
			//System.out.println(this.getClass().getName() + ".choosePivot:   sorted "+ Arrays.toString(arr));
			
			for (int b : indices) { // now find index of median element of
									// sorted array in our resulting array
				if (result[b] == arr[1]){
				
					//System.out.println(this.getClass().getName() + ".choosePivot: absolute median index "+ i +", relative median index "+(i-from)+" selected pivot "+arr[1]);
					
					return b - from;
				}
			}
		} else {
			if (result[from] < result[to])
				return 0;
			else
				return to - from; // we return not absolute but relative index
									// in the array slice
		}
		return 0;
	}

}
