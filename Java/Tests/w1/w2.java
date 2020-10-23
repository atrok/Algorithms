package w1;

import static org.junit.Assert.*;

import java.util.Arrays;

import org.junit.Test;

import utils.FileReader;
import InverseCount.InverseCount;
import QuickSort.AbstractQuickSort;
import QuickSort.QuickSortFinalPivot;
import QuickSort.QuickSortFirstPivot;
import QuickSort.QuickSortMedianPivot;
import QuickSort.QuickSortRandom;

public class w2 {

	String path2 = "C:\\Users\\atrok\\Documents\\Coursera\\Algorithms 1\\HomeTask\\w2\\QuickSort.txt";
	FileReader fr = new FileReader(path2, false);

	@Test
	public void testCase1() {

		FileReader fr = new FileReader(path2, false);

		int[] a = new int[] { 1, 2, 3, 4, 5, 6, 7, 8 };
		QuickSortRandom q = new QuickSortRandom(new int[] { 3, 8, 2, 5, 1, 4,
				7, 6 });

		q.start();
		assertEquals(Arrays.toString(a), Arrays.toString(q.getSortedArray()));

	}

	@Test
	public void testCase2() {
		System.out.println("### testCase2 ###");

		testResults(new QuickSortFirstPivot(fr.getResultInt()));
		testResults(new QuickSortFinalPivot(fr.getResultInt()));
		testResults(new QuickSortMedianPivot(fr.getResultInt()));
		testResults(new QuickSortRandom(fr.getResultInt()));
	
	}
	
	@Test
	public void testCase3() {
		System.out.println("### testCase3 median ###");

		int[] c=new int[] { 1, 2, 3, 4, 5, 6, 7, 8 };
		QuickSortMedianPivot q=new QuickSortMedianPivot(new int[] { 3, 8, 2, 5, 1, 4,
				7, 6 });
		q.start();
		
		assertEquals(Arrays.toString(c), Arrays.toString(q.getSortedArray()));
	
		
	}

	private void testResults(AbstractQuickSort q) {
		
		long start = System.currentTimeMillis();
		long comparison=q.start();
		System.out.println(q.getClass().getName() + " running time: "
				+ (System.currentTimeMillis() - start) + " ms");

		System.out.println(q.getClass().getName()+": number of comparisons: "+comparison);
		
		int[] a = new int[10000];
		for (int i = 0; i <= 9999; i++)
			a[i] = i + 1;

		long[] res = new long[q.getSortedArray().length];
		for (int i = 0; i < q.getSortedArray().length; i++)
			res[i] = Long.valueOf(q.getSortedArray()[i]);

		InverseCount i = new InverseCount(res);

		assertEquals(Arrays.toString(a), Arrays.toString(q.getSortedArray()));

	}

}
