const products = [
  {
    name: 'Figs',
    imageUrl:
      'https://images.unsplash.com/photo-1635341814161-d696d538542c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    description:
      'Figs are a good source of both calcium and potassium. These minerals can work together to improve bone density, which can, in turn, prevent conditions like osteoporosis. Studies suggest that a potassium-rich diet, in particular, can improve bone health and reduce bone turnover.',
    price: 4.99,
    countInStock: 55,
  },
  {
    name: 'NZ Valencia Oranges',
    imageUrl:
      'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
    description:
      'Valencia Oranges are a wonderful source of fiber, vitamin C and folate. They contain antioxidants in them that help to boost immunity.',
    price: 3.99,
    countInStock: 100,
  },
  {
    name: 'Strawberries',
    imageUrl:
      'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:
      'These potent little packages protect your heart, increase HDL (good) cholesterol, lower your blood pressure, and guard against cancer. Packed with vitamins, fiber, and particularly high levels of antioxidants known as polyphenols, strawberries are a sodium-free, fat-free, cholesterol-free, low-calorie food.',
    price: 7.99,
    countInStock: 250,
  },
  {
    name: 'Doris Plum',
    imageUrl:
      'https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description:
      'One of the most sought-after plum varieties is Black Doris, which is readily grown through New Zealand. Why they are good for you: As well as being high in vitamins C and A, plums are also packed with vitamin B2, which is essential for the body to metabolise fats and protein.',
    price: 4.99,
    countInStock: 65,
  },
  {
    name: 'Blueberries',
    imageUrl:
      'https://images.unsplash.com/photo-1594002348772-bc0cb57ade8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80',
    description:
      'According to a few studies, a bowl of blueberries can help in boosting immunity and can reduce the risk of diabetes, obesity and heart diseases. Moreover, consuming a small portion of berries daily can help in strengthening the metabolism and prevent any kind of metabolic syndrome and deficiency.',
    price: 5.99,
    countInStock: 200,
  },
  {
    name: 'Bananas',
    imageUrl:
      'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
    description:
      'Most people do not consume enough potassium in their daily diet, which often can have a direct impact on blood pressure control and other components of heart health. Additionally, Healthline explains that a potassium-rich diet—AKA eating a banana every day—can lower your risk of heart disease by 27%.',
    price: 3.99,
    countInStock: 100,
  },
  {
    name: 'Jazz Apples',
    imageUrl:
      'https://images.unsplash.com/photo-1569870499705-504209102861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2482&q=80',
    description:
      'Jazz Apples are a good source of potassium and antioxidants. They are also a good source of fiber, which can help to prevent osteoporosis and other conditions that can lead to heart disease.',
    price: 3.99,
    countInStock: 150,
  },
  {
    name: 'Granny Smith Apples',
    imageUrl:
      'https://images.unsplash.com/photo-1577028300036-aa112c18d109?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:
      'Granny Smith Apples are a good source of potassium and antioxidants. They are also a good source of fiber, which can help to prevent osteoporosis and other conditions that can lead to heart disease.',
    price: 3.99,
    countInStock: 100,
  },
  {
    name: 'Raspberries',
    imageUrl:
      'https://images.unsplash.com/photo-1609622511068-70c39f3c2253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:
      'They provide potassium, essential to heart function, and proven to lower blood pressure. The omega-3 fatty acids in raspberries can help prevent stroke and heart disease. They also contain a mineral called manganese, which is necessary for healthy bones and skin and helps regulate blood sugar.',
    price: 6.99,
    countInStock: 150,
  },
  {
    name: 'Grape Tomatoes',
    imageUrl:
      'https://images.unsplash.com/photo-1578048745930-3218e2acb823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:
      'Tomatoes are rich in lycopene, as well as vitamin A and vitamin C. Lycopene is known as a cancer-fighting agent, and vitamin A and vitamin C are known for maintaining healthy skin, good vision, a strong immune system, and a healthy heart. What more could you want from these amazing superfoods?',
    price: 4.99,
    countInStock: 200,
  },
  {
    name: 'Avocados',
    imageUrl:
      'https://images.unsplash.com/photo-1573566291259-fd494a326b60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80',
    description:
      'Avocados are an excellent source of monounsaturated fat and vitamin E, and are a good source of folate. They also supply more soluble fibre than other fruit and contain a number of useful minerals including iron, copper and potassium.',
    price: 1.99,
    countInStock: 100,
  },
]

module.exports = products
