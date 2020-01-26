#!/usr/bin/env python
# -*- coding: utf-8 -*-


x = """1	New York, NY, United States	100.00	100.00	100.00	100.00	100.00	100.00
2	San Francisco, CA, United States	90.96	115.03	102.47	86.46	93.03	135.30
3	Anchorage, AK, United States	90.70	38.81	65.88	87.87	77.31	118.69
4	Honolulu, HI, United States	89.13	62.76	76.53	89.28	81.93	88.42
5	Brooklyn, NY, United States	88.54	81.07	84.97	82.70	90.92	92.43
6	Washington, DC, United States	87.20	78.53	83.06	85.91	85.73	126.90
7	Oakland, CA, United States	86.05	79.32	82.83	88.73	73.13	113.63
8	Seattle, WA, United States	85.50	65.43	75.90	81.32	80.09	133.40
9	Bellevue, WA, United States	81.98	62.40	72.62	76.39	75.09	164.68
10	Boston, MA, United States	81.85	74.01	78.10	79.99	79.93	115.76
11	Chicago, IL, United States	79.71	58.16	69.40	75.99	75.14	115.10
12	Sarasota, FL, United States	78.79	46.24	63.24	88.74	70.29	81.90
13	Philadelphia, PA, United States	78.35	46.76	63.24	76.55	71.36	98.46
14	New Orleans, LA, United States	78.33	41.15	60.55	76.94	74.30	89.63
15	San Jose, CA, United States	78.14	83.40	80.65	70.95	81.52	143.34
16	Portland, OR, United States	78.13	49.13	64.26	75.48	67.33	113.06
17	Toronto, Canada	77.55	50.04	64.39	73.39	74.45	77.88
18	Sacramento, CA, United States	76.39	46.28	62.00	69.28	74.51	114.71
19	Minneapolis, MN, United States	76.34	44.37	61.05	67.58	77.12	126.65
20	Los Angeles, CA, United States	76.06	71.78	74.01	70.71	78.32	113.20
21	Albany, NY, United States	75.08	32.86	54.90	69.09	78.75	105.12
22	Miami, FL, United States	74.64	58.13	66.75	68.60	76.87	97.13
23	Pittsburgh, PA, United States	73.92	36.05	55.82	69.97	65.19	122.01
24	Jacksonville, FL, United States	73.84	33.44	54.53	76.42	75.69	121.38
25	San Diego, CA, United States	73.75	66.50	70.29	67.18	75.38	130.40
26	Baltimore, MD, United States	73.60	42.41	58.70	66.98	75.26	125.69
27	Reno, NV, United States	73.47	38.06	56.55	74.57	73.68	116.17
28	Atlanta, GA, United States	73.21	46.45	60.42	69.34	67.70	139.29
29	Denver, CO, United States	72.71	51.79	62.71	64.65	75.54	130.63
30	Vancouver, Canada	72.66	51.15	62.37	72.64	67.19	90.13
31	Halifax, Canada	72.08	29.37	51.67	74.36	62.12	78.96
32	Tucson, AZ, United States	72.03	26.26	50.16	63.59	68.66	105.03
33	Columbus, OH, United States	71.84	31.69	52.65	68.94	66.18	140.21
34	Buffalo, NY, United States	71.55	27.88	50.67	65.89	68.56	110.37
35	Nashville, TN, United States	71.53	46.67	59.65	64.87	79.18	124.49
36	Olympia, WA, United States	71.43	41.10	56.93	67.05	69.38	129.38
37	Charlotte, NC, United States	71.26	42.24	57.39	61.59	75.29	144.68
38	Victoria, Canada	70.74	38.64	55.39	70.14	67.38	89.57
39	Tacoma, WA, United States	70.61	41.02	56.47	59.34	69.40	113.91
40	Colorado Springs, CO, United States	70.55	35.84	53.96	69.63	58.19	112.75
41	Saint Louis, MO, United States	70.53	28.89	50.63	69.89	63.17	126.22
42	Calgary, Canada	69.98	28.35	50.08	62.83	69.95	125.61
43	San Juan, Puerto Rico	69.71	24.07	47.90	65.58	70.67	79.64
44	Saint John's, Canada	69.40	22.09	46.79	66.19	65.53	89.90
45	Raleigh, NC, United States	69.18	36.46	53.55	69.96	65.39	145.74
46	Edmonton, Canada	68.90	28.78	49.72	60.89	68.74	110.62
47	Kansas City, MO, United States	68.76	30.41	50.43	60.70	72.68	134.77
48	Saskatoon, Canada	68.36	24.34	47.32	63.68	62.99	95.14
49	Regina, Canada	68.06	29.28	49.53	66.41	61.42	94.93
50	Ottawa, Canada	67.49	33.82	51.39	60.62	66.58	120.36
51	Austin, TX, United States	67.36	51.61	59.83	63.39	70.60	146.69
52	Las Vegas, NV, United States	67.21	35.82	52.20	55.37	74.76	127.90
53	Tampa, FL, United States	67.14	40.72	54.52	64.89	62.97	125.21
54	Dallas, TX, United States	67.09	46.84	57.41	59.46	69.06	156.25
55	Richmond, VA, United States	66.80	33.95	51.10	58.76	74.91	112.49
56	Orlando, FL, United States	66.75	41.48	54.67	60.57	70.76	104.76
57	Phoenix, AZ, United States	66.72	36.20	52.13	60.86	66.49	129.91
58	Quebec City, Canada	66.57	17.00	42.88	67.04	58.29	110.46
59	Montreal, Canada	66.54	28.29	48.25	66.90	61.03	97.52
60	Louisville, KY, United States	66.20	28.14	48.00	58.41	76.45	120.22
61	Indianapolis, IN, United States	65.82	29.12	48.27	61.44	61.25	109.71
62	San Antonio, TX, United States	65.35	36.28	51.45	62.30	63.57	116.68
63	Houston, TX, United States	64.78	42.66	54.20	56.38	75.66	142.56
64	Madison, WI, United States	64.26	38.02	51.71	55.94	68.14	124.43
65	Brampton, Canada	64.24	34.42	49.98	56.51	55.18	79.78
66	Hamilton, Canada	64.13	27.68	46.70	58.37	62.20	102.96
67	Tulsa, OK, United States	63.89	26.23	45.88	63.19	58.12	118.18
68	Salt Lake City, UT, United States	63.66	36.59	50.72	57.97	61.22	130.57
69	Detroit, MI, United States	63.47	37.63	51.12	62.93	57.73	78.67
70	Winnipeg, Canada	63.35	24.03	44.55	58.61	59.06	101.91
71	Kitchener, Canada	62.78	27.93	46.11	54.57	66.53	97.36
72	Cincinnati, OH, United States	61.27	33.85	48.17	56.48	59.33	131.97
73	Little Rock, AR, United States	60.63	26.50	44.32	54.52	64.87	124.02
74	Boise, ID, United States	60.40	34.33	47.94	50.08	68.13	99.10
75	London, Canada	59.28	26.32	43.52	50.81	58.61	98.84
76	San Jose, Costa Rica	58.06	18.43	39.12	53.68	48.94	38.55
77	Kingston, Jamaica	56.88	15.73	37.22	54.14	42.51	30.11
78	Panama City, Panama	56.86	27.35	42.76	56.58	50.47	35.27
79	El Paso, TX, United States	52.04	22.62	37.98	52.24	39.13	127.86
80	Montevideo, Uruguay	51.85	15.33	34.39	40.99	46.46	40.10
81	San Salvador, El Salvador	47.63	14.45	31.77	47.77	32.51	24.01
82	Santiago, Chile	45.19	15.03	30.77	37.72	44.52	42.57
83	Santo Domingo, Dominican Republic	44.89	12.32	29.32	37.22	37.65	24.22
84	Sao Paulo, Brazil	44.30	15.84	30.69	32.46	38.09	32.84
85	Guatemala City, Guatemala	43.91	15.49	30.33	39.01	34.13	39.08
86	Brasilia, Brazil	43.85	14.59	29.86	32.10	34.93	58.09
87	Guayaquil, Ecuador	43.71	13.98	29.49	37.97	28.64	33.14
88	Quito, Ecuador	43.40	12.76	28.76	39.03	33.04	39.14
89	Paramaribo, Suriname	42.88	7.73	26.08	45.50	34.28	22.96
90	Lima, Peru	42.29	15.61	29.54	37.77	27.98	31.74
91	Rio de Janeiro, Brazil	41.75	13.86	28.41	30.18	31.62	32.49
92	Campinas, Brazil	39.70	9.59	25.31	27.36	32.61	41.38
93	Tijuana, Mexico	38.92	11.80	25.96	35.80	34.58	37.05
94	Cancun, Mexico	38.70	13.16	26.50	34.32	33.34	37.97
95	Curitiba, Brazil	38.63	8.90	24.42	28.46	32.10	32.67
96	Monterrey, Mexico	38.58	13.19	26.44	35.03	34.76	56.42
97	Mexico City, Mexico	38.38	20.53	29.85	33.65	32.50	42.95
98	Porto Alegre, Brazil	38.38	9.80	24.72	29.24	29.12	33.01
99	Queretaro, Mexico	37.56	10.81	24.77	35.41	30.78	49.11
100	Belo Horizonte, Brazil	37.20	9.37	23.89	26.28	30.07	23.56
101	Guadalajara, Mexico	36.01	11.39	24.24	32.91	32.48	43.63
102	Cuenca, Ecuador	34.73	11.43	23.59	30.30	25.12	33.75
103	Puebla, Mexico	34.50	8.54	22.08	31.59	25.33	40.34
104	Buenos Aires, Argentina	34.31	9.09	22.25	26.60	32.17	47.91
105	Merida, Mexico	33.75	8.33	21.60	31.91	28.25	35.97
106	Bogota, Colombia	31.65	11.69	22.11	24.97	23.63	28.55
107	Asuncion, Paraguay	30.51	9.98	20.69	24.82	24.41	33.48
108	Medellin, Colombia	29.00	9.94	19.88	24.78	22.20	30.95
109	Cali, Colombia	27.68	7.04	17.82	22.04	19.58	36.33
110	Caracas, Venezuela	27.54	7.82	18.11	29.18	23.74	2.37
"""

y1 = [l.split('\t') for l in x.splitlines()]


def format(str):
    return str.replace(',', '')


def contains_US(str):
    return 'United States' in str


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


y2 = [[x[1], x[2]]
      for x in y1]

y3 = [x for x in y2 if contains_US(x[0])]

y4 = [[x[0][:-15].split(', '), x[1]] for x in y3]
y5 = '\n, '.join(['(\'{x[0][0]}\', \'{x[0][1]}\', {x[1]})'.format(x=x)
                  for x in y4])
print(y5)
