# Adapted from http://glowingpython.blogspot.ca/2014/09/text-summarization-with-nltk.html

import nltk
from nltk.tokenize import sent_tokenize,word_tokenize
from nltk.corpus import stopwords
from collections import defaultdict
from string import punctuation
from heapq import nlargest
import os 

dir_path = os.path.dirname(os.path.realpath(__file__))

nltk.data.path.append(dir_path + '/nltk_data_local')
# nltk.download('all')

class FrequencySummarizer:
  def __init__(self, min_cut=0.1, max_cut=0.9):
    """
     Initilize the text summarizer.
     Words that have a frequency term lower than min_cut 
     or higer than max_cut will be ignored.
    """
    self._min_cut = min_cut
    self._max_cut = max_cut 
    self._stopwords = set(stopwords.words('english') + list(punctuation))

  def _compute_frequencies(self, word_sent):
    """ 
      Compute the frequency of each of word.
      Input: 
       word_sent, a list of sentences already tokenized.
      Output: 
       freq, a dictionary where freq[w] is the frequency of w.
    """
    freq = defaultdict(int)
    for s in word_sent:
      for word in s:
        if word not in self._stopwords:
          freq[word] += 1
    # frequencies normalization and fitering
    m = float(max(freq.values()))
    for w in freq.keys():
      freq[w] = freq[w]/m
      if freq[w] >= self._max_cut or freq[w] <= self._min_cut:
        del freq[w]
    return freq

  def summarize(self, text, n):
    """
      Return a list of n sentences 
      which represent the summary of text.
    """
    sents = sent_tokenize(text)
    assert n <= len(sents)
    word_sent = [word_tokenize(s.lower()) for s in sents]
    self._freq = self._compute_frequencies(word_sent)
    ranking = defaultdict(int)
    for i,sent in enumerate(word_sent):
      for w in sent:
        if w in self._freq:
          ranking[i] += self._freq[w]
    sents_idx = self._rank(ranking, n)    
    return [sents[j] for j in sents_idx]

  def _rank(self, ranking, n):
    """ return the first n sentences with highest ranking """
    return nlargest(n, ranking, key=ranking.get)


fs = FrequencySummarizer()
apps = [
"WATisRain is an iOS app to help you navigate the buildings of the University of Waterloo without going outside (ie, by going through the various tunnels between buildings). This may prove to be useful when it's raining outside, or if it's freezing cold.",
"Have one of those moments you've got to share? Got a secret you need to get off your chest? Hear something on campus so stupid it needs to be on the internet? These are OMG moments. OMG UW is a blog dedicated to sharing these precious moments at the University of Waterloo. Inspired by FML, grouphug, PostSecret, Overheard at Western and more, this is the place to share your OMG moments easily and anonymously. Have fun.",
"WATisRain is an Android app to help you navigate the buildings of the University of Waterloo without going outside (ie, by going through the various tunnels between buildings). This may prove to be useful when it's raining outside, or if it's freezing cold.",
"ClassM8 allows you to import your schedule, and search around for other courses so you can mess around with courses in your timetable in a very easy way. When you've finally made your perfect timetable, you can go to quest and swap your courses with the ones you chose on ClassM8. ClassM8 doesn't actually do any course swapping for you, it just provides an easy to use interface so you don't have to have 3 tabs open anymore."]
for text in apps:
  print fs.summarize(text, 1)

