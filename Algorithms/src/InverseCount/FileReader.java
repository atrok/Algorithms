package InverseCount;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.nio.channels.FileChannel;
import java.util.ArrayList;

public class FileReader {
	
	FileInputStream inFile;
	FileChannel inChannel;
	ArrayList<String> result=new ArrayList<String>();
	
	public FileReader(String path, boolean byteStream){
		
		InputStream ins = null; // raw byte-stream
		Reader r = null; // cooked reader
		BufferedReader br = null; // buffered for readLine()
		try {
		    String s;
		    if (byteStream) {
		        //String data = "#foobar\t1234\n#xyz\t5678\none\ttwo\n";
		        ins = new ByteArrayInputStream(path.getBytes());
		    } else {
		        ins = new FileInputStream(path);
		    }
		    r = new InputStreamReader(ins, "UTF-8"); // leave charset out for default
		    br = new BufferedReader(r);
		    while ((s = br.readLine()) != null) {
		        result.add(s);
		    }
		}
		catch (Exception e)
		{
		    System.err.println(e.getMessage()); // handle exception
		}
		finally {
		    if (br != null) { try { br.close(); } catch(Throwable t) { /* ensure close happens */ } }
		    if (r != null) { try { r.close(); } catch(Throwable t) { /* ensure close happens */ } }
		    if (ins != null) { try { ins.close(); } catch(Throwable t) { /* ensure close happens */ } }
		}
	    
	}
	
	public String[] getResult(){
		return result.toArray(new String[result.size()]);
		}
	
	public int[] getResultInt(){
		int[] res=new int[result.size()];
		for (int i=0;i<result.size();i++)
			res[i]=Integer.valueOf(result.get(i));
		return res;
	}

	public long[] getResultLong(){
		long[] res=new long[result.size()];
		for (int i=0;i<result.size();i++)
			res[i]=Long.valueOf(result.get(i));
		return res;
	}
}
