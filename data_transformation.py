#!/usr/bin/env python
# -*- coding: utf-8 -*-


x = """1	New York[d]	 New York	8,398,748	8,175,133	+2.74%	301.5 sq mi	780.9 km2	28,317/sq mi	10,933/km2	40.6635°N 73.9387°W
2	Los Angeles	 California	3,990,456	3,792,621	+5.22%	468.7 sq mi	1,213.9 km2	8,484/sq mi	3,276/km2	34.0194°N 118.4108°W
3	Chicago	 Illinois	2,705,994	2,695,598	+0.39%	227.3 sq mi	588.7 km2	11,900/sq mi	4,600/km2	41.8376°N 87.6818°W
4	Houston[3]	 Texas	2,325,502	2,100,263	+10.72%	637.5 sq mi	1,651.1 km2	3,613/sq mi	1,395/km2	29.7866°N 95.3909°W
5	Phoenix	 Arizona	1,660,272	1,445,632	+14.85%	517.6 sq mi	1,340.6 km2	3,120/sq mi	1,200/km2	33.5722°N 112.0901°W
6	Philadelphia[e]	 Pennsylvania	1,584,138	1,526,006	+3.81%	134.2 sq mi	347.6 km2	11,683/sq mi	4,511/km2	40.0094°N 75.1333°W
7	San Antonio	 Texas	1,532,233	1,327,407	+15.43%	461.0 sq mi	1,194.0 km2	3,238/sq mi	1,250/km2	29.4724°N 98.5251°W
8	San Diego	 California	1,425,976	1,307,402	+9.07%	325.2 sq mi	842.3 km2	4,325/sq mi	1,670/km2	32.8153°N 117.1350°W
9	Dallas	 Texas	1,345,047	1,197,816	+12.29%	340.9 sq mi	882.9 km2	3,866/sq mi	1,493/km2	32.7933°N 96.7665°W
10	San Jose	 California	1,030,119	945,942	+8.90%	177.5 sq mi	459.7 km2	5,777/sq mi	2,231/km2	37.2967°N 121.8189°W
11	Austin	 Texas	964,254	790,390	+22.00%	312.7 sq mi	809.9 km2	3,031/sq mi	1,170/km2	30.3039°N 97.7544°W
12	Jacksonville[f]	 Florida	903,889	821,784	+9.99%	747.4 sq mi	1,935.8 km2	1,178/sq mi	455/km2	30.3369°N 81.6616°W
13	Fort Worth	 Texas	895,008	741,206	+20.75%	342.9 sq mi	888.1 km2	2,491/sq mi	962/km2	32.7815°N 97.3467°W
14	Columbus	 Ohio	892,533	787,033	+13.40%	218.5 sq mi	565.9 km2	3,936/sq mi	1,520/km2	39.9852°N 82.9848°W
15	San Francisco[g]	 California	883,305	805,235	+9.70%	46.9 sq mi	121.5 km2	18,569/sq mi	7,170/km2	37.7272°N 123.0322°W
16	Charlotte	 North Carolina	872,498	731,424	+19.29%	305.4 sq mi	791.0 km2	2,757/sq mi	1,064/km2	35.2078°N 80.8310°W
17	Indianapolis[h]	 Indiana	867,125	820,445	+5.69%	361.5 sq mi	936.3 km2	2,366/sq mi	914/km2	39.7767°N 86.1459°W
18	Seattle	 Washington	744,955	608,660	+22.39%	83.8 sq mi	217.0 km2	8,405/sq mi	3,245/km2	47.6205°N 122.3509°W
19	Denver[i]	 Colorado	716,492	600,158	+19.38%	153.3 sq mi	397.0 km2	4,521/sq mi	1,746/km2	39.7619°N 104.8811°W
20	Washington[j]	 District of Columbia	702,455	601,723	+16.74%	61.1 sq mi	158.2 km2	11,148/sq mi	4,304/km2	38.9041°N 77.0172°W
21	Boston	 Massachusetts	694,583	617,594	+12.47%	48.3 sq mi	125.1 km2	13,938/sq mi	5,381/km2	42.3320°N 71.0202°W
22	El Paso	 Texas	682,669	649,121	+5.17%	256.8 sq mi	665.1 km2	2,660/sq mi	1,030/km2	31.8484°N 106.4270°W
23	Detroit	 Michigan	672,662	713,777	−5.76%	138.8 sq mi	359.5 km2	4,847/sq mi	1,871/km2	42.3830°N 83.1022°W
24	Nashville[k]	 Tennessee	669,053	601,222	+11.28%	475.9 sq mi	1,232.6 km2	1,388/sq mi	536/km2	36.1718°N 86.7850°W
25	Portland	 Oregon	653,115	583,776	+11.88%	133.5 sq mi	345.8 km2	4,793/sq mi	1,851/km2	45.5370°N 122.6500°W
26	Memphis	 Tennessee	650,618	646,889	+0.58%	317.4 sq mi	822.1 km2	2,056/sq mi	794/km2	35.1028°N 89.9774°W
27	Oklahoma City	 Oklahoma	649,021	579,999	+11.90%	606.3 sq mi	1,570.3 km2	1,053/sq mi	407/km2	35.4671°N 97.5137°W
28	Las Vegas	 Nevada	644,644	583,756	+10.43%	134.4 sq mi	348.1 km2	4,709/sq mi	1,818/km2	36.2292°N 115.2601°W
29	Louisville[l]	 Kentucky	620,118	597,337	+3.81%	263.5 sq mi	682.5 km2	2,339/sq mi	903/km2	38.1654°N 85.6474°W
30	Baltimore[m]	 Maryland	602,495	620,961	−2.97%	80.9 sq mi	209.5 km2	7,598/sq mi	2,934/km2	39.3000°N 76.6105°W
31	Milwaukee	 Wisconsin	592,025	594,833	−0.47%	96.2 sq mi	249.2 km2	6,186/sq mi	2,388/km2	43.0633°N 87.9667°W
32	Albuquerque	 New Mexico	560,218	545,852	+2.63%	188.2 sq mi	487.4 km2	2,972/sq mi	1,147/km2	35.1056°N 106.6474°W
33	Tucson	 Arizona	545,975	520,116	+4.97%	230.8 sq mi	597.8 km2	2,299/sq mi	888/km2	32.1531°N 110.8706°W
34	Fresno	 California	530,093	494,665	+7.16%	114.4 sq mi	296.3 km2	4,563/sq mi	1,762/km2	36.7836°N 119.7934°W
35	Mesa	 Arizona	508,958	439,041	+15.92%	137.9 sq mi	357.2 km2	3,514/sq mi	1,357/km2	33.4019°N 111.7174°W
36	Sacramento	 California	508,529	466,488	+9.01%	97.9 sq mi	253.6 km2	5,059/sq mi	1,953/km2	38.5666°N 121.4686°W
37	Atlanta	 Georgia	498,044	420,003	+18.58%	133.5 sq mi	345.8 km2	3,539/sq mi	1,366/km2	33.7629°N 84.4227°W
38	Kansas City	 Missouri	491,918	459,787	+6.99%	315.0 sq mi	815.8 km2	1,528/sq mi	590/km2	39.1251°N 94.5510°W
39	Colorado Springs	 Colorado	472,688	416,427	+13.51%	195.6 sq mi	506.6 km2	2,378/sq mi	918/km2	38.8673°N 104.7607°W
40	Miami	 Florida	470,914	399,457	+17.89%	36.0 sq mi	93.2 km2	12,599/sq mi	4,865/km2	25.7752°N 80.2086°W
41	Raleigh	 North Carolina	469,298	403,892	+16.19%	145.1 sq mi	375.8 km2	3,163/sq mi	1,221/km2	35.8306°N 78.6418°W
42	Omaha	 Nebraska	468,262	408,958	+14.50%	133.2 sq mi	345.0 km2	3,356/sq mi	1,296/km2	41.2644°N 96.0451°W
43	Long Beach	 California	467,354	462,257	+1.10%	50.3 sq mi	130.3 km2	9,347/sq mi	3,609/km2	33.8092°N 118.1553°W
44	Virginia Beach[m]	 Virginia	450,189	437,994	+2.78%	244.7 sq mi	633.8 km2	1,850/sq mi	710/km2	36.7800°N 76.0252°W
45	Oakland	 California	429,082	390,724	+9.82%	55.9 sq mi	144.8 km2	7,514/sq mi	2,901/km2	37.7698°N 122.2257°W
46	Minneapolis	 Minnesota	425,403	382,578	+11.19%	54.0 sq mi	139.9 km2	7,660/sq mi	2,960/km2	44.9633°N 93.2683°W
47	Tulsa	 Oklahoma	400,669	391,906	+2.24%	196.8 sq mi	509.7 km2	2,048/sq mi	791/km2	36.1279°N 95.9023°W
48	Arlington	 Texas	398,112	365,438	+8.94%	95.8 sq mi	248.1 km2	4,100/sq mi	1,600/km2	32.7007°N 97.1247°W
49	Tampa	 Florida	392,890	335,709	+17.03%	113.4 sq mi	293.7 km2	3,326/sq mi	1,284/km2	27.9701°N 82.4797°W
50	New Orleans[n]	 Louisiana	391,006	343,829	+13.72%	169.4 sq mi	438.7 km2	2,311/sq mi	892/km2	30.0534°N 89.9345°W
51	Wichita	 Kansas	389,255	382,368	+1.80%	160.4 sq mi	415.4 km2	2,431/sq mi	939/km2	37.6907°N 97.3459°W
52	Cleveland	 Ohio	383,793	396,815	−3.28%	77.7 sq mi	201.2 km2	4,965/sq mi	1,917/km2	41.4785°N 81.6794°W
53	Bakersfield	 California	383,579	347,483	+10.39%	148.8 sq mi	385.4 km2	2,529/sq mi	976/km2	35.3212°N 119.0183°W
54	Aurora	 Colorado	374,114	325,078	+15.08%	153.5 sq mi	397.6 km2	2,356/sq mi	910/km2	39.6880°N 104.6897°W
55	Anaheim	 California	352,005	336,265	+4.68%	50.0 sq mi	129.5 km2	7,021/sq mi	2,711/km2	33.8555°N 117.7601°W
56	Honolulu[b]	 Hawaii	347,397	337,256	+3.01%	60.5 sq mi	156.7 km2	5,815/sq mi	2,245/km2	21.3243°N 157.8476°W
57	Santa Ana	 California	332,725	324,528	+2.53%	27.1 sq mi	70.2 km2	12,333/sq mi	4,762/km2	33.7363°N 117.8830°W
58	Riverside	 California	330,063	303,871	+8.62%	81.2 sq mi	210.3 km2	3,999/sq mi	1,544/km2	33.9381°N 117.3932°W
59	Corpus Christi	 Texas	326,554	305,215	+6.99%	174.6 sq mi	452.2 km2	1,866/sq mi	720/km2	27.7543°N 97.1734°W
60	Lexington[o]	 Kentucky	323,780	295,803	+9.46%	283.6 sq mi	734.5 km2	1,123/sq mi	434/km2	38.0407°N 84.4583°W
61	Stockton	 California	311,178	291,707	+6.67%	61.7 sq mi	159.8 km2	4,977/sq mi	1,922/km2	37.9763°N 121.3133°W
62	Henderson	 Nevada	310,390	257,729	+20.43%	104.7 sq mi	271.2 km2	2,798/sq mi	1,080/km2	36.0097°N 115.0357°W
63	Saint Paul	 Minnesota	307,695	285,068	+7.94%	52.0 sq mi	134.7 km2	5,815/sq mi	2,245/km2	44.9489°N 93.1041°W
64	St. Louis[m]	 Missouri	302,838	319,294	−5.15%	62.0 sq mi	160.6 km2	5,023/sq mi	1,939/km2	38.6357°N 90.2446°W
65	Cincinnati	 Ohio	302,605	296,943	+1.91%	77.4 sq mi	200.5 km2	3,860/sq mi	1,490/km2	39.1402°N 84.5058°W
66	Pittsburgh	 Pennsylvania	301,048	305,704	−1.52%	55.4 sq mi	143.5 km2	5,481/sq mi	2,116/km2	40.4398°N 79.9766°W
67	Greensboro	 North Carolina	294,722	269,666	+9.29%	128.3 sq mi	332.3 km2	2,237/sq mi	864/km2	36.0951°N 79.8270°W
68	Anchorage[p]	 Alaska	291,538	291,826	−0.10%	1,706.6 sq mi	4,420.1 km2	175/sq mi	68/km2	61.1743°N 149.2843°W
69	Plano	 Texas	288,061	259,841	+10.86%	71.7 sq mi	185.7 km2	3,990/sq mi	1,540/km2	33.0508°N 96.7479°W
70	Lincoln	 Nebraska	287,401	258,379	+11.23%	92.1 sq mi	238.5 km2	3,044/sq mi	1,175/km2	40.8105°N 96.6803°W
71	Orlando	 Florida	285,713	238,300	+19.90%	105.2 sq mi	272.5 km2	2,635/sq mi	1,017/km2	28.4166°N 81.2736°W
72	Irvine	 California	282,572	212,375	+33.05%	65.6 sq mi	169.9 km2	4,057/sq mi	1,566/km2	33.6784°N 117.7713°W
73	Newark	 New Jersey	282,090	277,140	+1.79%	24.1 sq mi	62.4 km2	11,691/sq mi	4,514/km2	40.7242°N 74.1726°W
74	Toledo	 Ohio	274,975	287,208	−4.26%	80.7 sq mi	209.0 km2	3,451/sq mi	1,332/km2	41.6641°N 83.5819°W
75	Durham	 North Carolina	274,291	228,330	+20.13%	109.8 sq mi	284.4 km2	2,395/sq mi	925/km2	35.9811°N 78.9029°W
76	Chula Vista	 California	271,651	243,916	+11.37%	49.6 sq mi	128.5 km2	5,387/sq mi	2,080/km2	32.6277°N 117.0152°W
77	Fort Wayne	 Indiana	267,633	253,691	+5.50%	110.6 sq mi	286.5 km2	2,391/sq mi	923/km2	41.0882°N 85.1439°W
78	Jersey City	 New Jersey	265,549	247,597	+7.25%	14.8 sq mi	38.3 km2	17,848/sq mi	6,891/km2	40.7114°N 74.0648°W
79	St. Petersburg	 Florida	265,098	244,769	+8.31%	61.8 sq mi	160.1 km2	4,223/sq mi	1,631/km2	27.7620°N 82.6441°W
80	Laredo	 Texas	261,639	236,091	+10.82%	101.1 sq mi	261.8 km2	2,544/sq mi	982/km2	27.5604°N 99.4892°W
81	Madison	 Wisconsin	258,054	233,209	+10.65%	77.0 sq mi	199.4 km2	3,280/sq mi	1,270/km2	43.0878°N 89.4299°W
82	Chandler	 Arizona	257,165	236,123	+8.91%	64.9 sq mi	168.1 km2	3,813/sq mi	1,472/km2	33.2829°N 111.8549°W
83	Buffalo	 New York	256,304	261,310	−1.92%	40.4 sq mi	104.6 km2	6,359/sq mi	2,455/km2	42.8925°N 78.8597°W
84	Lubbock	 Texas	255,885	229,573	+11.46%	124.6 sq mi	322.7 km2	2,027/sq mi	783/km2	33.5656°N 101.8867°W
85	Scottsdale	 Arizona	255,310	217,385	+17.45%	183.9 sq mi	476.3 km2	1,341/sq mi	518/km2	33.6843°N 111.8611°W
86	Reno	 Nevada	250,998	225,221	+11.45%	107.3 sq mi	277.9 km2	2,286/sq mi	883/km2	39.5491°N 119.8499°W
87	Glendale	 Arizona	250,702	226,721	+10.58%	59.1 sq mi	153.1 km2	4,161/sq mi	1,607/km2	33.5331°N 112.1899°W
88	Gilbert[q]	 Arizona	248,279	208,453	+19.11%	68.0 sq mi	176.1 km2	3,487/sq mi	1,346/km2	33.3103°N 111.7431°W
89	Winston–Salem	 North Carolina	246,328	229,617	+7.28%	132.5 sq mi	343.2 km2	1,828/sq mi	706/km2	36.1027°N 80.2610°W
90	North Las Vegas	 Nevada	245,949	216,961	+13.36%	98.0 sq mi	253.8 km2	2,436/sq mi	941/km2	36.2857°N 115.0939°W
91	Norfolk[m]	 Virginia	244,076	242,803	+0.52%	53.3 sq mi	138.0 km2	4,599/sq mi	1,776/km2	36.9230°N 76.2446°W
92	Chesapeake[m]	 Virginia	242,634	222,209	+9.19%	338.5 sq mi	876.7 km2	703/sq mi	271/km2	36.6794°N 76.3018°W
93	Garland	 Texas	242,507	226,876	+6.89%	57.0 sq mi	147.6 km2	4,122/sq mi	1,592/km2	32.9098°N 96.6303°W
94	Irving	 Texas	242,242	216,290	+12.00%	67.0 sq mi	173.5 km2	3,557/sq mi	1,373/km2	32.8577°N 96.9700°W
95	Hialeah	 Florida	238,942	224,669	+6.35%	21.5 sq mi	55.7 km2	10,995/sq mi	4,245/km2	25.8699°N 80.3029°W
96	Fremont	 California	237,807	214,089	+11.08%	77.5 sq mi	200.7 km2	3,008/sq mi	1,161/km2	37.4945°N 121.9412°W
97	Boise[r]	 Idaho	228,790	205,671	+11.24%	82.1 sq mi	212.6 km2	2,718/sq mi	1,049/km2	43.6002°N 116.2317°W
98	Richmond[m]	 Virginia	228,783	204,214	+12.03%	59.8 sq mi	154.9 km2	3,732/sq mi	1,441/km2	37.5314°N 77.4760°W
99	Baton Rouge[s]	 Louisiana	221,599	229,493	−3.44%	85.9 sq mi	222.5 km2	2,651/sq mi	1,024/km2	30.4422°N 91.1309°W
100	Spokane	 Washington	219,190	208,916	+4.92%	68.7 sq mi	177.9 km2	3,144/sq mi	1,214/km2	47.6669°N 117.4333°W
101	Des Moines	 Iowa	216,853	203,433	+6.60%	88.9 sq mi	230.2 km2	2,424/sq mi	936/km2	41.5726°N 93.6102°W
102	Tacoma	 Washington	216,279	198,397	+9.01%	49.7 sq mi	128.7 km2	4,251/sq mi	1,641/km2	47.2522°N 122.4598°W
103	San Bernardino	 California	215,941	209,924	+2.87%	61.5 sq mi	159.3 km2	3,516/sq mi	1,358/km2	34.1416°N 117.2936°W
104	Modesto	 California	215,030	201,165	+6.89%	43.0 sq mi	111.4 km2	4,934/sq mi	1,905/km2	37.6375°N 121.0030°W
105	Fontana	 California	213,739	196,069	+9.01%	43.0 sq mi	111.4 km2	4,876/sq mi	1,883/km2	34.1090°N 117.4629°W
106	Santa Clarita	 California	210,089	176,320	+19.15%	52.8 sq mi	136.8 km2	3,446/sq mi	1,331/km2	34.4030°N 118.5042°W
107	Birmingham	 Alabama	209,880	212,237	−1.11%	146.1 sq mi	378.4 km2	1,452/sq mi	561/km2	33.5274°N 86.7990°W
108	Oxnard	 California	209,877	197,899	+6.05%	26.9 sq mi	69.7 km2	7,729/sq mi	2,984/km2	34.2023°N 119.2046°W
109	Fayetteville	 North Carolina	209,468	200,564	+4.44%	147.7 sq mi	382.5 km2	1,386/sq mi	535/km2	35.0828°N 78.9735°W
110	Moreno Valley	 California	209,050	193,365	+8.11%	51.3 sq mi	132.9 km2	4,006/sq mi	1,547/km2	33.9233°N 117.2057°W
111	Rochester	 New York	206,284	210,565	−2.03%	35.8 sq mi	92.7 km2	5,835/sq mi	2,253/km2	43.1699°N 77.6169°W
112	Glendale	 California	201,361	191,719	+5.03%	30.4 sq mi	78.7 km2	6,606/sq mi	2,551/km2	34.1814°N 118.2458°W
113	Huntington Beach	 California	200,641	189,992	+5.60%	26.9 sq mi	69.7 km2	7,459/sq mi	2,880/km2	33.6906°N 118.0093°W
114	Salt Lake City	 Utah	200,591	186,440	+7.59%	111.2 sq mi	288.0 km2	1,742/sq mi	673/km2	40.7769°N 111.9310°W
115	Grand Rapids	 Michigan	200,217	188,040	+6.48%	44.4 sq mi	115.0 km2	4,424/sq mi	1,708/km2	42.9612°N 85.6556°W
116	Amarillo	 Texas	199,924	190,695	+4.84%	101.4 sq mi	262.6 km2	1,968/sq mi	760/km2	35.1999°N 101.8302°W
117	Yonkers	 New York	199,663	195,976	+1.88%	18.0 sq mi	46.6 km2	11,156/sq mi	4,307/km2	40.9459°N 73.8674°W
118	Aurora	 Illinois	199,602	197,899	+0.86%	44.9 sq mi	116.3 km2	4,479/sq mi	1,729/km2	41.7635°N 88.2901°W
119	Montgomery	 Alabama	198,218	205,764	−3.67%	159.8 sq mi	413.9 km2	1,252/sq mi	483/km2	32.3472°N 86.2661°W
120	Akron	 Ohio	198,006	199,110	−0.55%	62.0 sq mi	160.6 km2	3,188/sq mi	1,231/km2	41.0805°N 81.5214°W
121	Little Rock	 Arkansas	197,881	193,524	+2.25%	118.7 sq mi	307.4 km2	1,673/sq mi	646/km2	34.7254°N 92.3586°W
122	Huntsville	 Alabama	197,318	180,105	+9.56%	213.4 sq mi	552.7 km2	905/sq mi	349/km2	34.6990°N 86.6730°W
123	Augusta[t]	 Georgia	196,939	195,844	+0.56%	302.5 sq mi	783.5 km2	652/sq mi	252/km2	33.3655°N 82.0734°W
124	Port St. Lucie	 Florida	195,248	164,603	+18.62%	118.9 sq mi	307.9 km2	1,557/sq mi	601/km2	27.2806°N 80.3883°W
125	Grand Prairie	 Texas	194,614	175,396	+10.96%	72.3 sq mi	187.3 km2	2,637/sq mi	1,018/km2	32.6869°N 97.0211°W
126	Columbus[u]	 Georgia	194,160	189,885	+2.25%	216.4 sq mi	560.5 km2	913/sq mi	353/km2	32.5102°N 84.8749°W
127	Tallahassee	 Florida	193,551	181,376	+6.71%	100.4 sq mi	260.0 km2	1,901/sq mi	734/km2	30.4551°N 84.2534°W
128	Overland Park	 Kansas	192,536	173,372	+11.05%	75.1 sq mi	194.5 km2	2,516/sq mi	971/km2	38.8890°N 94.6906°W
129	Tempe	 Arizona	192,364	161,719	+18.95%	40.0 sq mi	103.6 km2	4,562/sq mi	1,761/km2	33.3884°N 111.9318°W
130	McKinney	 Texas	191,645	131,117	+46.16%	63.0 sq mi	163.2 km2	2,735/sq mi	1,056/km2	33.1985°N 96.6680°W
131	Mobile	 Alabama	189,572	195,111	−2.84%	139.4 sq mi	361.0 km2	1,384/sq mi	534/km2	30.6684°N 88.1002°W
132	Cape Coral	 Florida	189,343	154,305	+22.71%	105.6 sq mi	273.5 km2	1,703/sq mi	658/km2	26.6432°N 81.9974°W
133	Shreveport	 Louisiana	188,987	199,311	−5.18%	107.1 sq mi	277.4 km2	1,820/sq mi	700/km2	32.4669°N 93.7922°W
134	Frisco	 Texas	188,170	116,989	+60.84%	67.7 sq mi	175.3 km2	2,417/sq mi	933/km2	33.1554°N 96.8226°W
135	Knoxville	 Tennessee	187,500	178,874	+4.82%	98.5 sq mi	255.1 km2	1,891/sq mi	730/km2	35.9707°N 83.9493°W
136	Worcester	 Massachusetts	185,877	181,045	+2.67%	37.4 sq mi	96.9 km2	4,933/sq mi	1,905/km2	42.2695°N 71.8078°W
137	Brownsville	 Texas	183,392	175,023	+4.78%	132.5 sq mi	343.2 km2	1,387/sq mi	536/km2	25.9991°N 97.4550°W
138	Vancouver	 Washington	183,012	161,791	+13.12%	46.9 sq mi	121.5 km2	3,728/sq mi	1,439/km2	45.6349°N 122.5957°W
139	Fort Lauderdale	 Florida	182,595	165,521	+10.32%	34.6 sq mi	89.6 km2	5,166/sq mi	1,995/km2	26.1412°N 80.1467°W
140	Sioux Falls	 South Dakota	181,883	153,888	+18.19%	75.4 sq mi	195.3 km2	2,312/sq mi	893/km2	43.5383°N 96.7320°W
141	Ontario	 California	181,107	163,924	+10.48%	49.9 sq mi	129.2 km2	3,471/sq mi	1,340/km2	34.0394°N 117.6042°W
142	Chattanooga	 Tennessee	180,557	167,674	+7.68%	143.1 sq mi	370.6 km2	1,241/sq mi	479/km2	35.0660°N 85.2484°W
143	Providence	 Rhode Island	179,335	178,042	+0.73%	18.4 sq mi	47.7 km2	9,740/sq mi	3,760/km2	41.8231°N 71.4188°W
144	Newport News[m]	 Virginia	178,626	180,719	−1.16%	69.1 sq mi	179.0 km2	2,631/sq mi	1,016/km2	37.0762°N 76.5220°W
145	Rancho Cucamonga	 California	177,751	165,269	+7.55%	40.0 sq mi	103.6 km2	4,413/sq mi	1,704/km2	34.1233°N 117.5642°W
146	Santa Rosa	 California	177,586	167,815	+5.82%	41.3 sq mi	107.0 km2	4,241/sq mi	1,637/km2	38.4468°N 122.7061°W
147	Oceanside	 California	176,080	167,086	+5.38%	41.3 sq mi	107.0 km2	4,249/sq mi	1,641/km2	33.2245°N 117.3062°W
148	Salem	 Oregon	173,442	154,637	+12.16%	48.6 sq mi	125.9 km2	3,445/sq mi	1,330/km2	44.9237°N 123.0232°W
149	Elk Grove	 California	172,886	153,015	+12.99%	42.2 sq mi	109.3 km2	4,022/sq mi	1,553/km2	38.4146°N 121.3850°W
150	Garden Grove	 California	172,646	170,883	+1.03%	18.0 sq mi	46.6 km2	9,714/sq mi	3,751/km2	33.7788°N 117.9605°W
151	Pembroke Pines	 Florida	172,374	154,019	+11.92%	33.0 sq mi	85.5 km2	5,109/sq mi	1,973/km2	26.0210°N 80.3404°W
152	Peoria	 Arizona	172,259	154,065	+11.81%	175.7 sq mi	455.1 km2	934/sq mi	361/km2	33.7862°N 112.3080°W
153	Eugene	 Oregon	171,245	156,185	+9.64%	44.1 sq mi	114.2 km2	3,777/sq mi	1,458/km2	44.0567°N 123.1162°W
154	Corona	 California	168,819	152,374	+10.79%	39.5 sq mi	102.3 km2	4,222/sq mi	1,630/km2	33.8620°N 117.5655°W
155	Cary[v]	 North Carolina	168,160	135,234	+24.35%	56.5 sq mi	146.3 km2	2,873/sq mi	1,109/km2	35.7809°N 78.8133°W
156	Springfield	 Missouri	168,122	159,498	+5.41%	82.3 sq mi	213.2 km2	2,033/sq mi	785/km2	37.1942°N 93.2913°W
157	Fort Collins	 Colorado	167,830	143,986	+16.56%	55.8 sq mi	144.5 km2	2,943/sq mi	1,136/km2	40.5482°N 105.0648°W
158	Jackson	 Mississippi	164,422	173,514	−5.24%	111.0 sq mi	287.5 km2	1,524/sq mi	588/km2	32.3158°N 90.2128°W
159	Alexandria[m]	 Virginia	160,530	139,966	+14.69%	15.0 sq mi	38.8 km2	10,387/sq mi	4,010/km2	38.8201°N 77.0841°W
160	Hayward	 California	159,620	144,186	+10.70%	45.5 sq mi	117.8 km2	3,493/sq mi	1,349/km2	37.6287°N 122.1024°W
161	Lancaster	 California	159,053	156,633	+1.55%	94.3 sq mi	244.2 km2	1,698/sq mi	656/km2	34.6936°N 118.1753°W
162	Lakewood	 Colorado	156,798	142,980	+9.66%	42.9 sq mi	111.1 km2	3,599/sq mi	1,390/km2	39.6989°N 105.1176°W
163	Clarksville	 Tennessee	156,794	132,929	+17.95%	98.3 sq mi	254.6 km2	1,529/sq mi	590/km2	36.5664°N 87.3452°W
164	Palmdale	 California	156,667	152,750	+2.56%	106.0 sq mi	274.5 km2	1,484/sq mi	573/km2	34.5910°N 118.1054°W
165	Salinas	 California	156,259	150,441	+3.87%	23.6 sq mi	61.1 km2	6,662/sq mi	2,572/km2	36.6902°N 121.6337°W
166	Springfield	 Massachusetts	155,032	153,060	+1.29%	31.9 sq mi	82.6 km2	4,830/sq mi	1,860/km2	42.1155°N 72.5400°W
167	Hollywood	 Florida	154,823	140,768	+9.98%	27.3 sq mi	70.7 km2	5,568/sq mi	2,150/km2	26.0310°N 80.1646°W
168	Pasadena	 Texas	153,219	149,043	+2.80%	43.5 sq mi	112.7 km2	3,525/sq mi	1,361/km2	29.6586°N 95.1506°W
169	Sunnyvale	 California	153,185	140,081	+9.35%	22.0 sq mi	57.0 km2	6,944/sq mi	2,681/km2	37.3858°N 122.0263°W
170	Macon[w]	 Georgia	153,095	91,351	+67.59%	249.3 sq mi	645.7 km2	612/sq mi	236/km2	32.8088°N 83.6942°W
171	Kansas City[x]	 Kansas	152,958	145,786	+4.92%	124.8 sq mi	323.2 km2	1,216/sq mi	470/km2	39.1225°N 94.7418°W
172	Pomona	 California	152,361	149,058	+2.22%	23.0 sq mi	59.6 km2	6,630/sq mi	2,560/km2	34.0585°N 117.7611°W
173	Escondido	 California	152,213	143,911	+5.77%	37.1 sq mi	96.1 km2	4,087/sq mi	1,578/km2	33.1331°N 117.0740°W
174	Killeen	 Texas	149,103	127,921	+16.56%	53.5 sq mi	138.6 km2	2,680/sq mi	1,030/km2	31.0777°N 97.7320°W
175	Naperville	 Illinois	148,304	141,853	+4.55%	38.7 sq mi	100.2 km2	3,802/sq mi	1,468/km2	41.7492°N 88.1620°W
176	Joliet	 Illinois	148,099	147,433	+0.45%	64.4 sq mi	166.8 km2	2,302/sq mi	889/km2	41.5177°N 88.1488°W
177	Bellevue	 Washington	147,599	122,363	+20.62%	33.5 sq mi	86.8 km2	4,221/sq mi	1,630/km2	47.5979°N 122.1565°W
178	Rockford	 Illinois	146,526	152,871	−4.15%	63.5 sq mi	164.5 km2	2,325/sq mi	898/km2	42.2588°N 89.0646°W
179	Savannah	 Georgia	145,862	136,286	+7.03%	103.6 sq mi	268.3 km2	1,417/sq mi	547/km2	32.0025°N 81.1536°W
180	Paterson	 New Jersey	145,627	146,199	−0.39%	8.4 sq mi	21.8 km2	17,500/sq mi	6,800/km2	40.9148°N 74.1628°W
181	Torrance	 California	145,182	145,438	−0.18%	20.5 sq mi	53.1 km2	7,180/sq mi	2,770/km2	33.8350°N 118.3414°W
182	Bridgeport	 Connecticut	144,900	144,229	+0.47%	16.1 sq mi	41.7 km2	9,064/sq mi	3,500/km2	41.1874°N 73.1958°W
183	McAllen	 Texas	143,433	129,877	+10.44%	58.4 sq mi	151.3 km2	2,435/sq mi	940/km2	26.2322°N 98.2464°W
184	Mesquite	 Texas	142,816	139,824	+2.14%	47.2 sq mi	122.2 km2	3,045/sq mi	1,176/km2	32.7629°N 96.5888°W
185	Syracuse	 New York	142,749	145,170	−1.67%	25.0 sq mi	64.7 km2	5,735/sq mi	2,214/km2	43.0410°N 76.1436°W
186	Midland	 Texas	142,344	111,147	+28.07%	74.4 sq mi	192.7 km2	1,809/sq mi	698/km2	32.0246°N 102.1135°W
187	Pasadena	 California	141,371	137,122	+3.10%	23.0 sq mi	59.6 km2	6,176/sq mi	2,385/km2	34.1606°N 118.1396°W
188	Murfreesboro	 Tennessee	141,344	108,755	+29.97%	55.9 sq mi	144.8 km2	2,360/sq mi	910/km2	35.8522°N 86.4160°W
189	Miramar	 Florida	140,823	122,041	+15.39%	29.4 sq mi	76.1 km2	4,709/sq mi	1,818/km2	25.9770°N 80.3358°W
190	Dayton	 Ohio	140,640	141,527	−0.63%	55.7 sq mi	144.3 km2	2,522/sq mi	974/km2	39.7774°N 84.1996°W
191	Fullerton	 California	139,640	135,161	+3.31%	22.4 sq mi	58.0 km2	6,282/sq mi	2,425/km2	33.8857°N 117.9280°W
192	Olathe	 Kansas	139,605	125,872	+10.91%	60.9 sq mi	157.7 km2	2,225/sq mi	859/km2	38.8843°N 94.8195°W
193	Orange	 California	139,484	136,416	+2.25%	25.4 sq mi	65.8 km2	5,532/sq mi	2,136/km2	33.7870°N 117.8613°W
194	Thornton	 Colorado	139,436	118,772	+17.40%	35.7 sq mi	92.5 km2	3,829/sq mi	1,478/km2	39.9194°N 104.9428°W
195	Roseville	 California	139,117	118,788	+17.11%	43.0 sq mi	111.4 km2	3,085/sq mi	1,191/km2	38.7690°N 121.3189°W
196	Denton	 Texas	138,541	113,383	+22.19%	93.4 sq mi	241.9 km2	1,433/sq mi	553/km2	33.2166°N 97.1414°W
197	Waco	 Texas	138,183	124,805	+10.72%	89.0 sq mi	230.5 km2	1,510/sq mi	580/km2	31.5601°N 97.1860°W
198	Surprise	 Arizona	138,161	117,517	+17.57%	107.9 sq mi	279.5 km2	1,230/sq mi	470/km2	33.6706°N 112.4527°W
199	Carrollton	 Texas	136,879	119,097	+14.93%	36.3 sq mi	94.0 km2	3,674/sq mi	1,419/km2	32.9884°N 96.8998°W
200	West Valley City	 Utah	136,401	129,480	+5.35%	35.5 sq mi	91.9 km2	3,847/sq mi	1,485/km2	40.6885°N 112.0118°W
201	Charleston	 South Carolina	136,208	120,083	+13.43%	109.0 sq mi	282.3 km2	1,233/sq mi	476/km2	32.8179°N 79.9590°W
202	Warren	 Michigan	134,587	134,056	+0.40%	34.4 sq mi	89.1 km2	3,928/sq mi	1,517/km2	42.4929°N 83.0250°W
203	Hampton[m]	 Virginia	134,313	137,436	−2.27%	51.5 sq mi	133.4 km2	2,629/sq mi	1,015/km2	37.0480°N 76.2971°W
204	Gainesville	 Florida	133,857	124,354	+7.64%	62.3 sq mi	161.4 km2	2,112/sq mi	815/km2	29.6788°N 82.3461°W
205	Visalia	 California	133,800	124,442	+7.52%	37.5 sq mi	97.1 km2	3,495/sq mi	1,349/km2	36.3273°N 119.3289°W
206	Coral Springs	 Florida	133,507	121,096	+10.25%	23.8 sq mi	61.6 km2	5,465/sq mi	2,110/km2	26.2707°N 80.2593°W
207	Columbia	 South Carolina	133,451	129,272	+3.23%	133.5 sq mi	345.8 km2	1,006/sq mi	388/km2	34.0291°N 80.8980°W
208	Cedar Rapids	 Iowa	133,174	126,326	+5.42%	70.8 sq mi	183.4 km2	1,852/sq mi	715/km2	41.9670°N 91.6778°W
209	Sterling Heights	 Michigan	132,964	129,699	+2.52%	36.5 sq mi	94.5 km2	3,628/sq mi	1,401/km2	42.5812°N 83.0303°W
210	New Haven	 Connecticut	130,418	129,779	+0.49%	18.7 sq mi	48.4 km2	6,948/sq mi	2,683/km2	41.3108°N 72.9250°W
211	Stamford	 Connecticut	129,775	122,643	+5.82%	37.6 sq mi	97.4 km2	3,434/sq mi	1,326/km2	41.0799°N 73.5460°W
212	Concord	 California	129,688	122,067	+6.24%	30.5 sq mi	79.0 km2	4,221/sq mi	1,630/km2	37.9722°N 122.0016°W
213	Kent	 Washington	129,618	92,411	+40.26%	33.7 sq mi	87.3 km2	3,784/sq mi	1,461/km2	47.3880°N 122.2127°W
214	Santa Clara	 California	129,488	116,468	+11.18%	18.4 sq mi	47.7 km2	6,845/sq mi	2,643/km2	37.3646°N 121.9679°W
215	Elizabeth	 New Jersey	128,885	124,969	+3.13%	12.3 sq mi	31.9 km2	10,459/sq mi	4,038/km2	40.6664°N 74.1935°W
216	Round Rock	 Texas	128,739	99,887	+28.88%	35.6 sq mi	92.2 km2	3,396/sq mi	1,311/km2	30.5252°N 97.6660°W
217	Thousand Oaks	 California	127,690	126,683	+0.79%	55.2 sq mi	143.0 km2	2,335/sq mi	902/km2	34.1933°N 118.8742°W
218	Lafayette[y]	 Louisiana	126,143	120,623	+4.58%	53.8 sq mi	139.3 km2	2,372/sq mi	916/km2	30.2074°N 92.0285°W
219	Athens[z]	 Georgia	125,964	115,452	+9.11%	116.4 sq mi	301.5 km2	1,060/sq mi	410/km2	33.9496°N 83.3701°W
220	Topeka	 Kansas	125,904	127,473	−1.23%	61.5 sq mi	159.3 km2	2,062/sq mi	796/km2	39.0347°N 95.6962°W
221	Simi Valley	 California	125,851	124,237	+1.30%	41.5 sq mi	107.5 km2	3,044/sq mi	1,175/km2	34.2669°N 118.7485°W
222	Fargo	 North Dakota	124,844	105,549	+18.28%	49.3 sq mi	127.7 km2	2,450/sq mi	950/km2	46.8652°N 96.8290°W
223	Norman	 Oklahoma	123,471	110,925	+11.31%	178.8 sq mi	463.1 km2	683/sq mi	264/km2	35.2406°N 97.3453°W
224	Columbia	 Missouri	123,180	108,500	+13.53%	65.0 sq mi	168.3 km2	1,856/sq mi	717/km2	38.951561°N 92.328638°W
225	Abilene	 Texas	122,999	117,063	+5.07%	106.7 sq mi	276.4 km2	1,146/sq mi	442/km2	32.4545°N 99.7381°W
226	Wilmington	 North Carolina	122,607	106,476	+15.15%	51.6 sq mi	133.6 km2	2,278/sq mi	880/km2	34.2092°N 77.8858°W
227	Hartford	 Connecticut	122,587	124,775	−1.75%	17.4 sq mi	45.1 km2	7,083/sq mi	2,735/km2	41.7659°N 72.6816°W
228	Victorville	 California	122,312	115,903	+5.53%	73.3 sq mi	189.8 km2	1,668/sq mi	644/km2	34.5277°N 117.3536°W
229	Pearland	 Texas	122,149	91,252	+33.86%	46.3 sq mi	119.9 km2	2,453/sq mi	947/km2	29.5558°N 95.3231°W
230	Vallejo	 California	121,913	115,942	+5.15%	30.7 sq mi	79.5 km2	3,951/sq mi	1,525/km2	38.1079°N 122.2640°W
231	Ann Arbor	 Michigan	121,890	113,934	+6.98%	28.1 sq mi	72.8 km2	4,298/sq mi	1,659/km2	42.2761°N 83.7309°W
232	Berkeley	 California	121,643	112,580	+8.05%	10.5 sq mi	27.2 km2	11,547/sq mi	4,458/km2	37.8670°N 122.2991°W
233	Allentown	 Pennsylvania	121,433	118,032	+2.88%	17.5 sq mi	45.3 km2	6,882/sq mi	2,657/km2	40.5936°N 75.4784°W
234	Richardson	 Texas	120,981	99,223	+21.93%	28.6 sq mi	74.1 km2	3,963/sq mi	1,530/km2	32.9723°N 96.7081°W
235	Odessa	 Texas	120,568	99,940	+20.64%	45.2 sq mi	117.1 km2	2,608/sq mi	1,007/km2	31.8838°N 102.3411°W
236	Arvada	 Colorado	120,492	106,433	+13.21%	38.6 sq mi	100.0 km2	3,043/sq mi	1,175/km2	39.8337°N 105.1503°W
237	Cambridge	 Massachusetts	118,977	105,162	+13.14%	6.4 sq mi	16.6 km2	17,289/sq mi	6,675/km2	42.3760°N 71.1187°W
238	Sugar Land	 Texas	118,600	78,817	+50.48%	34.0 sq mi	88.1 km2	3,488/sq mi	1,347/km2	29.5994°N 95.6142°W
239	Beaumont	 Texas	118,428	118,296	+0.11%	82.1 sq mi	212.6 km2	1,441/sq mi	556/km2	30.0849°N 94.1453°W
240	Lansing	 Michigan	118,427	114,297	+3.61%	39.1 sq mi	101.3 km2	2,967/sq mi	1,146/km2	42.7143°N 84.5593°W
241	Evansville	 Indiana	117,963	117,429	+0.45%	47.3 sq mi	122.5 km2	2,526/sq mi	975/km2	37.9877°N 87.5347°W
242	Rochester	 Minnesota	116,961	106,769	+9.55%	54.6 sq mi	141.4 km2	2,088/sq mi	806/km2	44.0154°N 92.4772°W
243	Independence	 Missouri	116,925	116,830	+0.08%	77.8 sq mi	201.5 km2	1,504/sq mi	581/km2	39.0855°N 94.3521°W
244	Fairfield	 California	116,884	105,321	+10.98%	40.9 sq mi	105.9 km2	2,806/sq mi	1,083/km2	38.2593°N 122.0321°W
245	Provo	 Utah	116,702	112,488	+3.75%	41.7 sq mi	108.0 km2	2,803/sq mi	1,082/km2	40.2453°N 111.6448°W
246	Clearwater	 Florida	116,478	107,685	+8.17%	25.9 sq mi	67.1 km2	4,415/sq mi	1,705/km2	27.9789°N 82.7666°W
247	College Station	 Texas	116,218	93,857	+23.82%	51.0 sq mi	132.1 km2	2,199/sq mi	849/km2	30.5852°N 96.2964°W
248	West Jordan	 Utah	116,046	103,712	+11.89%	32.3 sq mi	83.7 km2	3,520/sq mi	1,360/km2	40.6024°N 112.0008°W
249	Carlsbad	 California	115,877	105,328	+10.02%	37.7 sq mi	97.6 km2	3,023/sq mi	1,167/km2	33.1239°N 117.2828°W
250	El Monte	 California	115,586	113,475	+1.86%	9.6 sq mi	24.9 km2	12,063/sq mi	4,658/km2	34.0746°N 118.0291°W
251	Murrieta	 California	114,985	103,466	+11.13%	33.6 sq mi	87.0 km2	3,324/sq mi	1,283/km2	33.5721°N 117.1904°W
252	Temecula	 California	114,742	100,097	+14.63%	37.3 sq mi	96.6 km2	3,031/sq mi	1,170/km2	33.4931°N 117.1317°W
253	Springfield	 Illinois	114,694	116,250	−1.34%	60.1 sq mi	155.7 km2	1,925/sq mi	743/km2	39.7911°N 89.6446°W
254	Palm Bay	 Florida	114,194	103,190	+10.66%	65.7 sq mi	170.2 km2	1,676/sq mi	647/km2	27.9856°N 80.6626°W
255	Costa Mesa	 California	113,615	109,960	+3.32%	15.7 sq mi	40.7 km2	7,186/sq mi	2,775/km2	33.6659°N 117.9123°W
256	Westminster	 Colorado	113,479	106,114	+6.94%	31.7 sq mi	82.1 km2	3,592/sq mi	1,387/km2	39.8822°N 105.0644°W
257	North Charleston	 South Carolina	113,237	97,471	+16.18%	73.7 sq mi	190.9 km2	1,483/sq mi	573/km2	32.9178°N 80.0650°W
258	Miami Gardens	 Florida	113,069	107,167	+5.51%	18.2 sq mi	47.1 km2	6,212/sq mi	2,398/km2	25.9489°N 80.2436°W
259	Manchester	 New Hampshire	112,525	109,565	+2.70%	33.1 sq mi	85.7 km2	3,339/sq mi	1,289/km2	42.9849°N 71.4441°W
260	High Point	 North Carolina	112,316	104,371	+7.61%	55.2 sq mi	143.0 km2	2,015/sq mi	778/km2	35.9900°N 79.9905°W
261	Downey	 California	112,269	111,772	+0.44%	12.4 sq mi	32.1 km2	9,134/sq mi	3,527/km2	33.9382°N 118.1309°W
262	Clovis	 California	112,022	95,631	+17.14%	24.2 sq mi	62.7 km2	4,404/sq mi	1,700/km2	36.8282°N 119.6849°W
263	Pompano Beach	 Florida	111,954	99,845	+12.13%	24.0 sq mi	62.2 km2	4,558/sq mi	1,760/km2	26.2416°N 80.1339°W
264	Pueblo	 Colorado	111,750	106,595	+4.84%	53.6 sq mi	138.8 km2	2,058/sq mi	795/km2	38.2699°N 104.6123°W
265	Elgin	 Illinois	111,683	108,188	+3.23%	37.4 sq mi	96.9 km2	2,998/sq mi	1,158/km2	42.0396°N 88.3217°W
266	Lowell	 Massachusetts	111,670	106,519	+4.84%	13.6 sq mi	35.2 km2	8,129/sq mi	3,139/km2	42.6390°N 71.3211°W
267	Antioch	 California	111,535	102,372	+8.95%	29.4 sq mi	76.1 km2	3,772/sq mi	1,456/km2	37.9791°N 121.7962°W
268	West Palm Beach	 Florida	111,398	99,919	+11.49%	55.1 sq mi	142.7 km2	1,963/sq mi	758/km2	26.7464°N 80.1251°W
269	Peoria	 Illinois	111,388	115,007	−3.15%	48.2 sq mi	124.8 km2	2,371/sq mi	915/km2	40.7515°N 89.6174°W
270	Everett	 Washington	111,262	103,019	+8.00%	33.3 sq mi	86.2 km2	3,275/sq mi	1,264/km2	47.9566°N 122.1914°W
271	Ventura[aa]	 California	111,128	106,433	+4.41%	21.8 sq mi	56.5 km2	5,027/sq mi	1,941/km2	34.2678°N 119.2542°W
272	Centennial	 Colorado	110,831	100,377	+10.41%	29.5 sq mi	76.4 km2	3,727/sq mi	1,439/km2	39.5906°N 104.8691°W
273	Lakeland	 Florida	110,516	97,422	+13.44%	65.9 sq mi	170.7 km2	1,615/sq mi	624/km2	28.0555°N 81.9549°W
274	Gresham	 Oregon	110,158	105,594	+4.32%	23.3 sq mi	60.3 km2	4,786/sq mi	1,848/km2	45.5023°N 122.4416°W
275	Richmond	 California	110,146	103,701	+6.21%	30.1 sq mi	78.0 km2	3,648/sq mi	1,409/km2	37.9523°N 122.3606°W
276	Billings	 Montana	109,550	104,170	+5.16%	43.7 sq mi	113.2 km2	2,525/sq mi	975/km2	45.7885°N 108.5499°W
277	Inglewood	 California	109,419	109,673	−0.23%	9.1 sq mi	23.6 km2	12,160/sq mi	4,700/km2	33.9561°N 118.3443°W
278	Broken Arrow	 Oklahoma	109,171	98,850	+10.44%	61.7 sq mi	159.8 km2	1,741/sq mi	672/km2	36.0365°N 95.7810°W
279	Sandy Springs	 Georgia	108,797	93,853	+15.92%	37.7 sq mi	97.6 km2	2,804/sq mi	1,083/km2	33.9315°N 84.3687°W
280	Jurupa Valley	 California	108,393	0	NA[ab]	42.9 sq mi	111.1 km2	2,414/sq mi	932/km2	34.0026°N 117.4676°W
281	Hillsboro	 Oregon	108,389	91,611	+18.31%	25.0 sq mi	64.7 km2	4,207/sq mi	1,624/km2	45.5280°N 122.9357°W
282	Waterbury	 Connecticut	108,093	110,366	−2.06%	28.5 sq mi	73.8 km2	3,799/sq mi	1,467/km2	41.5585°N 73.0367°W
283	Santa Maria	 California	107,408	99,553	+7.89%	22.8 sq mi	59.1 km2	4,662/sq mi	1,800/km2	34.9332°N 120.4438°W
284	Boulder	 Colorado	107,353	97,385	+10.24%	24.8 sq mi	64.2 km2	4,358/sq mi	1,683/km2	40.0270°N 105.2519°W
285	Greeley	 Colorado	107,348	92,889	+15.57%	47.8 sq mi	123.8 km2	2,176/sq mi	840/km2	40.4153°N 104.7697°W
286	Daly City	 California	107,008	101,123	+5.82%	7.6 sq mi	19.7 km2	14,009/sq mi	5,409/km2	37.7009°N 122.4650°W
287	Meridian	 Idaho	106,804	75,092	+42.23%	29.8 sq mi	77.2 km2	3,584/sq mi	1,384/km2	43.6142°N 116.3989°W
288	Lewisville	 Texas	106,586	95,290	+11.85%	36.7 sq mi	95.1 km2	2,852/sq mi	1,101/km2	33.0466°N 96.9818°W
289	Davie[ac]	 Florida	106,558	91,992	+15.83%	34.9 sq mi	90.4 km2	2,919/sq mi	1,127/km2	26.0791°N 80.2850°W
290	West Covina	 California	106,311	106,098	+0.20%	16.0 sq mi	41.4 km2	6,740/sq mi	2,600/km2	34.0559°N 117.9099°W
291	League City	 Texas	106,244	83,560	+27.15%	51.2 sq mi	132.6 km2	1,992/sq mi	769/km2	29.4901°N 95.1091°W
292	Tyler	 Texas	105,729	96,900	+9.11%	56.6 sq mi	146.6 km2	1,852/sq mi	715/km2	32.3173°N 95.3059°W
293	Norwalk	 California	105,120	105,549	−0.41%	9.7 sq mi	25.1 km2	10,946/sq mi	4,226/km2	33.9076°N 118.0835°W
294	San Mateo	 California	105,025	97,207	+8.04%	12.1 sq mi	31.3 km2	8,592/sq mi	3,317/km2	37.5603°N 122.3106°W
295	Green Bay	 Wisconsin	104,879	104,057	+0.79%	45.4 sq mi	117.6 km2	2,316/sq mi	894/km2	44.5207°N 87.9842°W
296	Wichita Falls	 Texas	104,576	104,553	+0.02%	72.2 sq mi	187.0 km2	1,450/sq mi	560/km2	33.9067°N 98.5259°W
297	Sparks	 Nevada	104,246	90,264	+15.49%	35.9 sq mi	93.0 km2	2,810/sq mi	1,080/km2	39.5544°N 119.7356°W
298	Lakewood[ad]	 New Jersey	104,157	92,843	+12.19%	24.7 sq mi	64.0 km2	4,079/sq mi	1,575/km2	40.0771°N 74.2004°W
299	Burbank	 California	103,695	103,340	+0.34%	17.4 sq mi	45.1 km2	6,003/sq mi	2,318/km2	34.1901°N 118.3264°W
300	Rialto	 California	103,440	99,171	+4.30%	22.3 sq mi	57.8 km2	4,633/sq mi	1,789/km2	34.1118°N 117.3883°W
301	Allen	 Texas	103,383	84,246	+22.72%	27.1 sq mi	70.2 km2	3,715/sq mi	1,434/km2	33.0997°N 96.6631°W
302	El Cajon	 California	103,241	99,478	+3.78%	14.5 sq mi	37.6 km2	7,156/sq mi	2,763/km2	32.8017°N 116.9604°W
303	Las Cruces	 New Mexico	102,926	97,618	+5.44%	76.9 sq mi	199.2 km2	1,323/sq mi	511/km2	32.3264°N 106.7897°W
304	Renton	 Washington	102,153	90,927	+12.35%	23.4 sq mi	60.6 km2	4,314/sq mi	1,666/km2	47.4761°N 122.1920°W
305	Davenport	 Iowa	102,085	99,685	+2.41%	62.9 sq mi	162.9 km2	1,631/sq mi	630/km2	41.5541°N 90.6040°W
306	South Bend	 Indiana	101,860	101,168	+0.68%	41.4 sq mi	107.2 km2	2,457/sq mi	949/km2	41.6769°N 86.2690°W
307	Vista	 California	101,224	93,834	+7.88%	18.7 sq mi	48.4 km2	5,436/sq mi	2,099/km2	33.1895°N 117.2386°W
308	Tuscaloosa	 Alabama	101,113	90,468	+11.77%	71.7 sq mi	185.7 km2	1,399/sq mi	540/km2	33.2065°N 87.5346°W
309	Clinton[ae]	 Michigan	100,800	96,796	+4.14%	28.1 sq mi	72.8 km2	3,573/sq mi	1,380/km2	42.5903°N 82.9170°W
310	Edison[ad]	 New Jersey	100,693	99,967	+0.73%	30.1 sq mi	78.0 km2	3,389/sq mi	1,309/km2	40.5040°N 74.3494°W
311	Woodbridge[ad]	 New Jersey	100,450	99,585	+0.87%	23.3 sq mi	60.3 km2	4,351/sq mi	1,680/km2	40.5607°N 74.2927°W
312	San Angelo	 Texas	100,215	93,200	+7.53%	59.9 sq mi	155.1 km2	1,681/sq mi	649/km2	31.4411°N 100.4505°W
313	Kenosha	 Wisconsin	100,164	99,218	+0.95%	28.0 sq mi	72.5 km2	3,577/sq mi	1,381/km2	42.5822°N 87.8456°W
314	Vacaville	 California	100,154	92,428	+8.36%	29.0 sq mi	75.1 km2	3,449/sq mi	1,332/km2	38.3539°N 121.9728°W
"""

y = [l.split('\t') for l in x.splitlines()]


def format(str):
    return str.replace(',', '')


def remove_non_ascii(text):
    return ''.join([i if ord(i) < 128 else '' for i in text])


def format_coords(coords):
    coords = remove_non_ascii(coords)
    coords = coords.split(' ')
    coords[0] = float(coords[0][:-1]) if coords[0][-1] == 'N' else - \
        1 * float(coords[0][:-1])
    coords[1] = float(coords[1][:-1]) if coords[1][-1] == 'E' else - \
        1 * float(coords[1][:-1])
    return coords


def format_city(city):
    i = city.find('[')
    if i == -1:
        return city
    new_city = city[:i]
    return new_city.strip()


y2 = [[format_city(x[1]), x[2].strip(), format(x[3]), format_coords(x[10])]
      for x in y]
# z2 = ['(\'{x[1]}\', \'{x[2]}\', {x[4]})'.format(x=x) for x in y]
y3 = ['(\'{x[0]}\', \'{x[1]}\', {x[2]}, {x[3][0]}, {x[3][1]})'.format(x=x)
      for x in y2]
y4 = '\n, '.join(y3)
print(y4)
