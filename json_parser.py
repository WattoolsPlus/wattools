import json
from pprint import pprint

def convertToCsv(fileprefix):
  with open(fileprefix + '.json') as data_file:
    data = json.load(data_file)
    category = data.keys()[0]
    data = data[category]
    f = open(fileprefix + '.csv','w')
    for i in range(len(data)):
      line = ""
      curTool = data[i]

      title = curTool["Name"]["text"].replace('\n', ' ')
      line += title
      line += "\t"

      line += category.replace('\n', ' ')
      line += "\t"

      if "Description" in curTool.keys():
        description = curTool["Description"]["text"].replace('\n', ' ')
      else:
        description = title
      line += description
      line += "\t"

      link = curTool["Name"]["url"].replace('\n', ' ')
      line += link
      line += "\t"

      if "Author" in curTool.keys():
        author = curTool["Author"]["text"].replace('\n', ' ')
        line += author
        line += "\t"
        if "url" in curTool["Author"].keys():
          authorlink = curTool["Author"]["url"].replace('\n', ' ')
          line += authorlink
        line += "\t"
      elif "Authors" in curTool.keys():
        author = curTool["Authors"]["text"].replace('\n', ' ')
        line += author
        line += "\t"
        if "url" in curTool["Authors"].keys():
          authorlink = curTool["Authors"]["url"].replace('\n', ' ')
          line += authorlink
        line += "\t"
      else:
        line += "\t"
        line += "\t"
      if "Source Code" in curTool.keys():
        sourcelink = curTool["Source Code"]["url"].replace('\n', ' ')
        line += sourcelink
      line += "\t"
      line += "APPROVED"
      print line
      f.write(line.encode('utf8') + '\n') # python will convert \n to os.linesep
    f.close() # you can omit in most cases as the destructor will call it

convertToCsv("data/10-general")
convertToCsv("data/20-course-selection")
convertToCsv("data/30-jobmine")
convertToCsv("data/40-learn")
convertToCsv("data/40-learn")
convertToCsv("data/45-grt")
convertToCsv("data/50-class-helpers")
convertToCsv("data/60-guides")
convertToCsv("data/98-developers")
convertToCsv("data/99-dead")
