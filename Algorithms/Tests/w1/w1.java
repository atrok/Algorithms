package w1;

import static org.junit.Assert.*;

import org.junit.Test;

import utils.FileReader;
import InverseCount.InverseCount;
import InverseCount.Solution;

public class w1 {
	
	String path = "C:\\Users\\atrok\\Documents\\Coursera\\Algorithms 1\\HomeTask\\w1\\IntegerArray.txt";
	
	
	@Test
	public void testFileReader() {
		
		
		FileReader fr=new FileReader(path,false);
		assertEquals(fr.getResult().length, 100000);
		
		assertEquals(fr.getResultInt().length, 100000);
		
	}
	
	@Test
	public void testInverseCount() {

		FileReader fr=new FileReader(path,false);

		long start=System.currentTimeMillis();
		Solution s=new Solution(fr.getResultInt());
		System.out.println("Solution runs: "+(System.currentTimeMillis()-start)+" ms");
		
		InverseCount i=new InverseCount(fr.getResultLong());
		System.out.println(s.get());
		System.out.println(i.getCount());
		
		assertEquals(s.get(),i.getCount());
		
	}	

}
