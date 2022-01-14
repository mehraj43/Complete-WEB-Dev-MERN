const mongoose = require('mongoose');
const { createTracing } = require('trace_events');

// mongoose.connect('mongodb://localhost:27017/codingMalik', {
//     useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

// connection creation if DBs is present it will connect if DBs not present it will create it and then connect
mongoose
	.connect('mongodb://localhost:27017/codingMalikMongoose')
	.then(() => {
		console.log('Connection Successfull');
	})
	.then((err) => {
		console.log(err);
	});

// Schema in MongoDB
// A mongoose schema defines the structure of the document default values, validators, etc

const mySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	ctype: String,
	videos: Number,
	author: String,
	active: Boolean,
	date: {
		type: Date,
		default: Date.now,
	},
});

// A mongoose model is a wrapper on the mongoose Schema where a mongoose model provides an interface to the DB for createTracing, quering, updating, deleting records, etc.

// collection creation
const Playlist = new mongoose.model('Playlist', mySchema);


D = [ "".join(sorted(i)) for i in Data]
Q = ["".join(sorted(i)) for i in Query]

result = [D.count(i) for i in Q]

retrun result



// Python Code for Dominants Cells
#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'numCells' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY grid as parameter.
#

def numCells(grid):
    # Write your code here
    n1 = len(grid)
    n2 = len(grid[0])
    donminantCells = 0
    if n1 > 1 and n2 > 1:
        if grid[0][0]>grid[0][1] and grid[0][0]>grid[1][0] and grid[0][0]>grid[1][1]:
            donminantCells+=1
        if grid[0][n2-1]>grid[0][n2-2] and grid[0][n2-1]>grid[1][0] and grid[0][n2-1]>grid[1][n2-2]:
            donminantCells+=1
        if grid[n1-1][0]>grid[n1-1][1] and grid[n1-1][0]>grid[n1-2][0] and grid[n1-1][0]>grid[n1-2][1]:
            donminantCells+=1
        if grid[n1-1][n2-1]>grid[n1-1][n2-2] and grid[n1-1][n2-1]>grid[n1-2][n2-1] and grid[n1-1][n2-1]>grid[n1-2][n2-2]:
            donminantCells+=1
        for i in range(1,n2-1,1):
            if grid[0][i]>grid[0][i-1] and grid[0][i]>grid[0][i+1] and grid[0][i]>grid[1][i] and grid[0][i]>grid[1][i+1] and grid[0][i]>grid[1][i-1]:
                donminantCells+=1
            if grid[n1-1][i]>grid[n1-1][i-1] and grid[n1-1][i]>grid[n1-1][i+1] and grid[n1-1][i]>grid[n1-2][i] and grid[n1-1][i]>grid[n1-2][i+1] and grid[n1-1][i]>grid[n1-2][i-1]:
                donminantCells+=1
                
        for i in range(1,n1-1,1):
            if grid[i][0]>grid[i-1][0] and grid[i][0]>grid[i+1][0] and grid[i][0]>grid[i][1] and grid[i][0]>grid[i+1][1] and grid[i][0]>grid[i-1][1]:
                donminantCells+=1
            if grid[i][n2-1]>grid[i-1][n2-1] and grid[i][n2-1]>grid[i+1][n2-1] and grid[i][n2-1]>grid[i][n2-2] and grid[i][n2-1]>grid[i+1][n2-2] and grid[i][n2-1]>grid[i-1][n2-2]:
                donminantCells+=1
        
        for a in range(1,n1-1,1):
            for b in range(1,n2-1,1):
                if grid[a][b]>grid[a-1][b] and grid[a][b]>grid[a-1][b-1] and grid[a][b]>grid[a-1][b+1] and grid[a][b]>grid[a][b-1] and grid[a][b]>grid[a][b+1] and grid[a][b]>grid[a+1][b] and grid[a][b]>grid[a+1][b-1] and grid[a][b]>grid[a+1][b+1]:
                    donminantCells+=1
    else:
        if n1 ==1 and n2==1:
            return 1
        elif n1 == 1:
            if grid[n1-1][0]>grid[n1-1][1]:
                donminantCells+=1
            if grid[n1-1][n2-1]>grid[n1-1][n2-2]:
                donminantCells+=1
            
            if n2>2:
                for i in range(1,n2-1,1):
                    if grid[n1-1][i]>grid[n1-1][i-1] and grid[n1-1][i]>grid[n1-1][i+1]:
                        donminantCells+=1
        elif n2 == 1:
            if grid[0][n2-1]>grid[1][n2-1]:
                donminantCells+=1
            if grid[n1-1][n2-1]>grid[n1-2][n2-1]:
                donminantCells+=1
            
            if n1>2:
                for i in range(1,n1-1,1):
                    if grid[i][n2-1]>grid[i+1][n2-1] and grid[i][n2-1]>grid[i-1][n2-1]:
                        donminantCells+=1
                
    return donminantCells
    
            
if __name__ == '__main__':