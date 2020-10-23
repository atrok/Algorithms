package QuickSort;

import java.util.Random;

public class QuickSortRandom extends AbstractQuickSort{
	
	public QuickSortRandom(int[] arr) {
		super(arr);
	}

	@SuppressWarnings("finally")
	@Override
	protected int choosePivot(int length, int from, int to) {
		// TODO Auto-generated method stub
		try{
		return r.nextInt(length);
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			return 0;
		}
	}

}
