# LiteQueue.js

Simple to use and extensible queue library for javascript.

------

## Documentation

### Install

``` npm install litequeue ```

### Usage

```
const { Queue } = require('litequeue');

var queue = new Queue();

// Add items to a queue :: $item can be anything accepted by an array.
queue.add(item)

// Remove first-in-line from a queue
queue.remove()

// View all items in the queue
queue.getAll()

// Clear the queue
queue.clear()

// Get the length of the queue
queue.getLength()

// Check if queue is empty
queue.isEmpty()

// Look at the first item in the queue (look whose at the front) without removing it. 
queue.first();

// look at the most recent item in the queue (look at whose at the back) without removing it.
queue.recent()

```

## MIT License
Copyright (c) 2020 - t. Macleod Sawyer 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

----

There were a few people who have attempted this in the past and I have taken many ideas from them, and tried to follow the pysabertooth code as close as possible in API. Thanks to: [MomsFriendlyRobotCompany/pysabertooth](https://github.com/MomsFriendlyRobotCompany/pysabertooth), and [Joehuew/RaspWifiRover](https://github.com/joehuewe/RaspiWifiRover)

