import java.util.*;
public class Hello {

    public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int g=sc.nextInt();
		int s1=sc.nextInt();
		int s2=sc.nextInt();
		int s3=sc.nextInt();
		int to=sc.nextInt();
		int le=0;
		if(s1 < s2 && s1 <= s3)
	    {
		le=s1;
	    }
	else if(s2 <= s3)
	{
		le=s2;
	}
	else
	{
		le=s3;
	}
	int sum=0;
	int count=0;
	while(sum<=(to-g))
	{
	    sum+=le;
	    count++;
	}
	System.out.print(count-1);

	}
}
