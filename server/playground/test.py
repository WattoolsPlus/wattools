from textsum import FrequencySummarizer

fs = FrequencySummarizer()
apps = [
"WATisRain is an iOS app to help you navigate the buildings of the University of Waterloo without going outside (ie, by going through the various tunnels between buildings). This may prove to be useful when it's raining outside, or if it's freezing cold.",
"Have one of those moments you've got to share? Got a secret you need to get off your chest? Hear something on campus so stupid it needs to be on the internet? These are OMG moments. OMG UW is a blog dedicated to sharing these precious moments at the University of Waterloo. Inspired by FML, grouphug, PostSecret, Overheard at Western and more, this is the place to share your OMG moments easily and anonymously. Have fun.",
"WATisRain is an Android app to help you navigate the buildings of the University of Waterloo without going outside (ie, by going through the various tunnels between buildings). This may prove to be useful when it's raining outside, or if it's freezing cold.",
"ClassM8 allows you to import your schedule, and search around for other courses so you can mess around with courses in your timetable in a very easy way. When you've finally made your perfect timetable, you can go to quest and swap your courses with the ones you chose on ClassM8. ClassM8 doesn't actually do any course swapping for you, it just provides an easy to use interface so you don't have to have 3 tabs open anymore."]
for text in apps:
  print fs.summarize(text, 1)

