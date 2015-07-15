package w1;

import static org.junit.Assert.*;

import org.junit.Test;

import InverseCount.FileReader;

public class w1 {

	@Test
	public void testFileReader() {
		
		String path = "C:\\Users\\atrok\\Documents\\Coursera\\Algorithms 1\\HomeTask\\w1\\IntegerArray.txt";
		
		FileReader fr=new FileReader(path,false);
		assertEquals(fr.getResult().length, 100000);
		
	}

}
