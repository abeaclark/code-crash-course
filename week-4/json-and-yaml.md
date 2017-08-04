## JSON, YAML, XML
There are several ways to represent data in a coded form. JSON, YAML, and XML are three of the most prevalent. The goal of each is generally the same, provide a way to type in data that can be interpreted by other programs. They are a standardized way of communicating in code. Here are a few snippets to show what each looks like, along with some common mistakes people make when writing:

**JSON:**
* You can only use double quotes, not single quotes (`"` is what you want, not `'`)
* You cannot have trailing commas. This means as the end of an object, let last item will not have a comma after it. Look at `zipCode` as an example.
```
{
  "user": {
    "id": "12345",
    "firstName": "Art",
    "address": {
      "streetAddress": "444 Row St",
      "state": "WA",
      "zipCode": 39489
    },
    "transactions": [
      {"value": 45.34, "itemId": "2345"},
      {"value": 30.22, "itemId": "3456"},
      {"value": 20.00, "itemId": "4567"}
    ]
  }
}
```

**XML:**
```
<?xml version="1.0" encoding="UTF-8" ?>
<user>
  <id>12345</id>
  <firstName>Art</firstName>
  <address>
    <streetAddress>444 Row St</streetAddress>
    <state>WA</state>
    <zipCode>39489</zipCode>
  </address>
  <transactions>
    <value>45.34</value>
    <itemId>2345</itemId>
  </transactions>
  <transactions>
    <value>30.22</value>
    <itemId>3456</itemId>
  </transactions>
  <transactions>
    <value>20</value>
    <itemId>4567</itemId>
  </transactions>
</user>
```
**YAML:**
* This is completely based on spacing, so tabs and spaces before an item matter
```
---
user:
  id: '12345'
  firstName: Art
  address:
    streetAddress: 444 Row St
    state: WA
    zipCode: 39489
  transactions:
  - value: 45.34
    itemId: '2345'
  - value: 30.22
    itemId: '3456'
  - value: 20
    itemId: '4567'
```

There are many free services online to validate or translate data in these formats. Just google "YAML to XML" or "JSON validator". These can be very helpful when you are starting.
