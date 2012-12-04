/**  
 * desc: Hadoop Testing 
 * author: Jialiang Qin
 */   

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.text.*;


import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.*;
import org.apache.hadoop.mapreduce.*;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;
 
/**  
 * Testing Reducer 
 */  
public class Test_2 extends Configured implements Tool {	
	
	enum Counter 
	{
		LINESKIP,	//error nums
	}
	
	/**  
	 * MAP Class
	 */  
	public static class Map extends Mapper<LongWritable, Text, Text, Text> 
	{
		public void map ( LongWritable key, Text value, Context context ) throws IOException, InterruptedException 
		{
			String line = value.toString();				//read source data
			
			try
			{
				//data change
				String [] lineSplit = line.split(" ");
				String anum = lineSplit[0];
				String bnum = lineSplit[1];
				
				context.write( new Text(bnum), new Text(anum) );	//out
			}
			catch ( java.lang.ArrayIndexOutOfBoundsException e )
			{
				context.getCounter(Counter.LINESKIP).increment(1); 
				return;
			}
		}
	}

	/**  
	 * REDUCE Class
	 */ 
	public static class Reduce extends Reducer<Text, Text, Text, Text> 
	{
		public void reduce ( Text key, Iterable<Text> values, Context context ) throws IOException, InterruptedException
		{
			String valueString;
			String out = "";
			
			for ( Text value : values )
			{
				valueString = value.toString();
				out += valueString + "|";
			}
			
			context.write( key, new Text(out) );
		}
	}
	
	public int run(String[] args) throws Exception 
	{
		Configuration conf = getConf();

		Job job = new Job(conf, "Test_2");								//Process name
		job.setJarByClass(Test_2.class);								//run Class
		
		FileInputFormat.addInputPath( job, new Path(args[0]) );			//input path
		FileOutputFormat.setOutputPath( job, new Path(args[1]) );		//output path
		
		job.setMapperClass( Map.class );								//call Map class
		job.setReducerClass ( Reduce.class );							//call Reduce class
		job.setOutputFormatClass( TextOutputFormat.class );
		job.setOutputKeyClass( Text.class );							//define Key format
		job.setOutputValueClass( Text.class );							//define Out VALUE format
		
		job.waitForCompletion(true);
		
		//print run info
		System.out.println( "Process name: " + job.getJobName() );
		System.out.println( "succ: " + ( job.isSuccessful()?"yes":"no" ) );
		System.out.println( "input lines: " + job.getCounters().findCounter("org.apache.hadoop.mapred.Task$Counter", "MAP_INPUT_RECORDS").getValue() );
		System.out.println( "output lines " + job.getCounters().findCounter("org.apache.hadoop.mapred.Task$Counter", "MAP_OUTPUT_RECORDS").getValue() );
		System.out.println( "skip lines " + job.getCounters().findCounter(Counter.LINESKIP).getValue() );

		return job.isSuccessful() ? 0 : 1;
	}
	
	/**  
	 * system intro
	 * setting MapReduce process
	 */  
	public static void main(String[] args) throws Exception 
	{
		
		//params nums is bad or null params
		if ( args.length != 2 )
		{
			System.err.println("");
			System.err.println("Usage: Test_2 < input path > < output path > ");
			System.err.println("Example: hadoop jar ~/Test_2.jar hdfs://hadoop3:9000/home/hadoop/Test_2 hdfs://hadoop3:9000/home/hadoop/output");
			System.err.println("Counter:");
			System.err.println("\t"+"LINESKIP"+"\t"+"Lines which are too short");
			System.exit(-1);
		}
		
		//record start time
		DateFormat formatter = new SimpleDateFormat( "yyyy-MM-dd HH:mm:ss" );
		Date start = new Date();
		
		//run process 
		int res = ToolRunner.run(new Configuration(), new Test_2(), args);

		//output process run info
		Date end = new Date();
		float time =  (float) (( end.getTime() - start.getTime() ) / 60000.0) ;
		System.out.println( "startime: " + formatter.format(start) );
		System.out.println( "endtime: " + formatter.format(end) );
		System.out.println( "runtime: " + String.valueOf( time ) + " minute" ); 

        System.exit(res);
	}
}





