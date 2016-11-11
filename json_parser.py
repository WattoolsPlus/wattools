import json
from pprint import pprint

with open('10-general.json') as data_file:
  data = json.load(data_file)
  data = data["General"]
  f = open('10-general.csv','w')
  for i in range(len(data)):
    line = ""
    curTool = data[i]

    title = curTool["Name"]["text"]
    line += title
    line += "\t"

    description = curTool["Description"]["text"]
    line += description
    line += "\t"

    link = curTool["Name"]["url"]
    line += link
    line += "\t"

    if "Author" in curTool.keys():
      author = curTool["Author"]["text"]
      line += author
      line += "\t"
      if "url" in curTool["Author"].keys():
        authorlink = curTool["Author"]["url"]
        line += authorlink
      line += "\t"
    elif "Authors" in curTool.keys():
      author = curTool["Authors"]["text"]
      line += author
      line += "\t"
      if "url" in curTool["Authors"].keys():
        authorlink = curTool["Authors"]["url"]
        line += authorlink
      line += "\t"
    else:
      line += "\t"
      line += "\t"
    if "Source Code" in curTool.keys():
      sourcelink = curTool["Source Code"]["url"]
      line += sourcelink
    line += "\t"
    line += "approved"
    print line
    f.write(line + '\n') # python will convert \n to os.linesep
  f.close() # you can omit in most cases as the destructor will call it
