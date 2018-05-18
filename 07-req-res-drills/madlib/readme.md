# Mad lib generator

In this drill, you'll implement a simple Mad Libs interface. If you're not familiar with Mad Libs, it's the name of a word game that dates back to the 1960s and is still around. It's the sort of game kids will play to stay occupied while riding in the back of a car with an equally bored sibling on a cross-country family vacation. You are prompted to supply keywords of your choosing: for instance, a proper name, an adjective, a sport, a dessert item, etc. After making your choices, you plug each into a preset, paragraph-long text that has blanks that you fill in with the word choices you've made.

In this drill, you're going to implement a simple, server-side Mad lib app. Your app should have a single endpoint at the root (/). The request body should supply this endpoint with 3 adjectives, 1 adverb, 1 name, 1 place, and 1 noun.

While you're welcome to substitute your own template text, here's an example you can use:

There's a {adjective1} new {name} in {place} and everyone's talking. Stunningly {adjective2} and {adverb} {adjective3}, all the cool kids know it. However, {name} has a secret - {name}'s a vile vampire.

Will it end with a bite, or with a stake through the {noun}?

The {...} above indicate a place where the JSON value from a POST request should be inserted.

To get started, open this remixed starter app. Click the "Show Live" button to open the Glitch URL in a new browser tab, then copy the Glitch URL (https://[YOUR-RANDOM-SUBDOMAIN].glitch.me/).

Open Postman and in a new tab click on the drop-down menu that says "GET" and change the request type to "POST". Paste the Glitch URL you just copied into where Postman says "Enter request URL" then under that select the "Body" tab.

In the Body tab choose "raw" then to the right of that in the "Text" drop-down menu select "JSON (application/json)" and enter the following example raw JSON in Postman:

{
    "adjective1": "red",
    "adjective2": "spikey",
    "adjective3": "effective",
    "adverb": "rapidly",
    "name": "Joe",
    "place": "Kansas",
    "noun": "bungee cord"
}
Click Postman's Send button at this point and you'll get a 404 error saying "Cannot POST /" since the Glitch does not yet include code to responds to requests.

If you use the example template text and raw JSON provided above, once your app is finished it will respond to a POST request by returning the following plain text response, along with a 200 HTTP status code:

There's a red new Joe in Kansas and everyone's talking. Stunningly spikey and rapidly effective, all the cool kids know it. However, Joe has a secret - Joe's a vile vampire.

Will it end with a bite, or with a stake through the bungee cord?

