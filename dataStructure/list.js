function List() {
    this.listSize = 0; //列表元素的个数
    this.dataStore = []; //初始化一个空数组用来存储列表元素
    this.pos = 0; //列表当前位置
    this.find = find; //查找元素
    this.clear = clear; //清空元素
    this.toString = toString; //返回当前列表的字符串形式
    this.remove = remove; //清除元素
    this.insert = insert; //在现有元素后插入新元素
    this.append = append; //在列表末尾插入新元素
    this.front = front; //从列表的当前位置移到第一个元素
    this.end = end; //从列表的当前位置移到最后一个元素
    this.prev = prev; //将当前位置后移一位
    this.next = next; //将当前位置前移一位
    this.length = length; //列表包含元素个数
    this.currPos = currPos; //返回列表当前位置
    this.moveTo = moveTo; //将列表移动到指定位置
    this.getElement = getElement; //显示当前元素
    this.contains = contains; //是否包含该元素
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    //此处++应置于之前，以便返回正确的索引
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.slice(foundAt, 1);
        --this.listSize;
        return;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore.length = 0; //创建一个空数组
    this.pos = this.listSize = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement(element) {
    return this.dataStore[this.pos];
}

var names = new List();
names.append("小红");
names.append("小明");
names.append("小强");
names.next();
alert(names.getElement());
//迭代器
for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}