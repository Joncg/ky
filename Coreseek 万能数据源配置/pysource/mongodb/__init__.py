# coreseek3.2 python source操作mongodb数据库
# author: Zhang ChengGuo
# date: 2012-12-03 10:05

import pymongo

class MainSource(object):
    def __init__(self, conf):
        self.conf =  conf
        self.idx = 0
        self.data = []
        self.conn = None
        self.cur = None

    def GetScheme(self):  #获取结构，docid、文本、整数
        return [
            ('id' , {'id':True, } ),
            ('title', { 'type':'text'} ),
            ('_keywords', { 'type':'text'} ),
            ('system_time', {'type':'integer'} ),
        ]

    def GetFieldOrder(self): #字段的优先顺序
        return [('title', 'context')]
        
    def Connected(self):   #如果是数据库，则在此处做数据库连接
        if self.conn==None:       
	    connection=pymongo.Connection('localhost',27017)
	    db = connection.uc
	    uc_help = db.uc_help_info
	    data = uc_help.find({"status":2})
	    self.data = []
	    for rows in data:
		  self.data.append(rows)
        pass

    def NextDocument(self):   #取得每一个文档记录的调用
        if self.idx < len(self.data):
            item = self.data[self.idx]
            self.id = self.id = item['id'] #'id':True
            self.title = item['title'].encode('utf-8')
            self._keywords = item['_keywords'].encode('utf-8')
            self.idx += 1
            return True
        else:
            return False

if __name__ == "__main__":    #直接访问演示部分
    conf = {}
    source = MainSource(conf)
    source.Connected()

    while source.NextDocument():
        print "id=%d, _keyrowds=%s" % (source.id, source._keywords)
    pass
#eof
