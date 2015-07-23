package QuickSort;

public class QuickSortFinalPivot extends AbstractQuickSort{

	public QuickSortFinalPivot(int[] arr) {
		super(arr);
		// TODO Auto-generated constructor stub
	}

	@Override
	protected int choosePivot(int length, int from, int to) {
		// TODO Auto-generated method stub
		return length-1; //return final element of the array
	}

}
