---
title: sdks
week: 5
---

## sdks
Some APIs can get VERY big. Or, they may have a series of API calls you need to make to accomplish a given task. Or perhaps you call the APIs a lot in your application and you want an easy way to do so. In these cases, finding or writing an sdk makes sense.

What is an sdk? An sdk is code that consumes an API. It is a series of helper methods to make calling the API easier.

For example, in python to call an API to get a story within a project, I may need to do something like this:
```
import requests
base_url = 'https://api.com'
project_id = '123'
story_id = 'ABC'
url = self.base_url + '/projects/' + project_id + '/stories/' + story_id
story = requests.get(url, headers={'Authorization': 'Token 123123123'})
return story.json()
```
Wouldn't it be annoying to have to write this much code in each place we want to see a list of stories? We should turn this into an sdk function:

```
import requests
base_url = 'https://api.com'
def getStory(project_id, story_id):
    url = self.base_url + '/projects/' + project_id + '/stories/' + story_id
    story = requests.get(url, headers={'Authorization': 'Token 123123123'})
    return story.json()
```
Now, anywhere we need to get a story, we can simply do it like this
```
story = getStory('123', 'ABC')
```
Much easier. If we have several of these functions, we can enclose them all inside of a class. Then, the class becomes the sdk. To use it, we can simply instantiate an instance of the class, and then call any of the sdk methods on it.

Here is an example of what an sdk class could look like:
```
import requests

base_url = 'https://api.com'

class MySDK:
    __init__(self, auth_token):
        self.auth_token = auth_token

    def getStory(project_id, story_id):
        url = self.base_url + '/projects/' + project_id + '/stories/' + story_id
        story = requests.get(url, headers={'Authorization': 'Token ' + self.auth_token})
        return story.json()

    def updateStory(project_id, story_id, data):
        url = self.base_url + '/projects/' + project_id + '/stories/' + story_id
        res = requests.patch(url, data, headers={'Authorization': 'Token ' + self.auth_token})
        return res.json()
```
This sdk allows you to initiate it with an `auth_token`. This is a common authorization measure for APIs that you include in a header. Then, you can call any of the two helper methods with their associated data. So, using the sdk would look like this:

```
sdk_instance = MySDK('ASLKJF2342SK')

story = sdk_instance.get_story('ASLKJ3934K', 'KLJFDKDF49K')

sdk_instance.update_story('ASLKJ3934K', 'KLJFDKDF49K', { 'name': 'Get this story done!' })
```

Take a look at the following sdks to see how it looks in real use cases:
* [Zillow SDK](https://github.com/seme0021/python-zillow/blob/master/zillow/api.py)
* [Fitbit](https://github.com/orcasgit/python-fitbit/blob/master/fitbit/api.py#L164)

Check these Javascript versions out for extra practice:
* [Yelp](https://github.com/olalonde/node-yelp/blob/master/src/index.js)
* [Weather](https://github.com/noazark/weather/blob/master/lib/weather.js)
