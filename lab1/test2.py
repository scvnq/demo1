{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf100
{\fonttbl\f0\fnil\fcharset0 Monaco;}
{\colortbl;\red255\green255\blue255;\red52\green52\blue52;\red245\green245\blue245;\red115\green0\blue2;
}
{\*\expandedcolortbl;;\cssrgb\c26667\c26667\c26667;\cssrgb\c96863\c96863\c96863;\cssrgb\c53333\c0\c0;
}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl320\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cb3  MySQLdb\
\
db = MySQLdb.connect(host=\cf4 \cb1 \strokec4 "localhost"\cf2 \cb3 \strokec2 ,\
user=\cf4 \cb1 \strokec4 ""\cf2 \cb3 \strokec2 ,\
passwd=\cf4 \cb1 \strokec4 ""\cf2 \cb3 \strokec2 ,\
db=\cf4 \cb1 \strokec4 ""\cf2 \cb3 \strokec2 )\
\
cur = db.cursor()\
\
platform = raw_input(\cf4 \cb1 \strokec4 'Enter language: '\cf2 \cb3 \strokec2 )\
\
cur.execute(\cf4 \cb1 \strokec4 "SELECT * FROM platforms WHERE language = '%s';"\cf2 \cb3 \strokec2  % platform)\
\cb1 for\cb3  row \cb1 in\cb3  cur.fetchall():\
\cb1 print\cb3  (row)\
\
db.close()}