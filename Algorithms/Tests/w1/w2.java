package w1;

import static org.junit.Assert.*;

import java.util.Arrays;

import org.junit.Test;

import utils.FileReader;
import InverseCount.InverseCount;
import QuickSort.QuickSort;

public class w2 {

	String path2 = "C:\\Users\\atrok\\Documents\\Coursera\\Algorithms 1\\HomeTask\\w2\\QuickSort.txt";
	
	@Test
	public void test() {
		fail("Not yet implemented");
	}
	
	@Test
	public void testCase1() {
	
		FileReader fr=new FileReader(path2,false);
		
		int[] a=new int[]{1,2,3,4,5,6,7,8};
		QuickSort q=new QuickSort(new int[]{3,8,2,5,1,4,7,6});
		
		assertEquals(Arrays.toString(a),Arrays.toString(q.getSortedArray()));
		
	}
	
	@Test
	public void testCase2() {
		int[] a=new int[10000];
		for (int i=0;i<=9999;i++)
			a[i]=i+1;
		
		FileReader fr=new FileReader(path2,false);
		
		long start=System.currentTimeMillis();
		QuickSort q=new QuickSort(fr.getResultInt());
		
		long[] res=new long[q.getSortedArray().length];
		for (int i=0;i<q.getSortedArray().length;i++)
			res[i]=Long.valueOf(q.getSortedArray()[i]);
		

		
		InverseCount i=new InverseCount(res);
		
		System.out.println(System.currentTimeMillis()-start+" ms");
		
		assertEquals(Arrays.toString(a), Arrays.toString(q.getSortedArray()));
	}
	

}
