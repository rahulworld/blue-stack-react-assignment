export const EVENT_TYPE = {
    'UPCOMING': 'Upcoming Campaigns',
    'LIVE': 'Live Campaigns',
    'PAST': 'Past Campaigns',
};

export const getDiffInDays = (eventDate) => {
    let date1 = new Date(); 
    let date2 = new Date(eventDate); 
    let Difference_In_Time = date2.getTime() - date1.getTime(); 
    let Difference_In_Days = parseInt(Difference_In_Time / (1000 * 3600 * 24), 10); 
    if (Difference_In_Days < 0){
        Difference_In_Days = Math.abs(Difference_In_Days) + ' Days Ago'
    } else if(Difference_In_Days === 0){
        Difference_In_Days = 'Today Live'
    } else {
        Difference_In_Days = Difference_In_Days + ' days ahead'
    }
    return Difference_In_Days
};

export const getDiffInNumber = (eventDate) => {
    let date1 = new Date(); 
    let date2 = new Date(eventDate); 
    let Difference_In_Time = date2.getTime() - date1.getTime(); 
    let Difference_In_Days = parseInt(Difference_In_Time / (1000 * 3600 * 24), 10); 
    return Difference_In_Days;
};

export const EVENT_DATA = {
    "data": [{
        "id": 1,
        "name": "Test Whatsapp",
        "region": "US",
        "createdOn": 1559807714999,
        "price": 20,
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url":"../assets/images/logo.png" 
      },
      {
        "id": 2,
        "name": "Super Jewels Quest",
        "region": "CA, FR",
        "createdOn": 1559806715124,
        "price": 20,
        "csv": "Some CSV link for Super Jewels Quest",
        "report": "Some report link for Super Jewels Ques",
        "image_url":"../assets/images/logo.png"
      },
      {
        "id": 3,
        "name": "Mole Slayer",
        "region": "FR",
        "createdOn": 1559806711124,
        "price": 20,
        "csv": "Some CSV link for Mole Slayer",
        "report": "Some report link for Mole Slayer",
        "image_url":"../assets/images/logo.png"
      },
      {
        "id": 4,
        "name": "Mancala Mix",
        "region": "JP",
        "createdOn": 1559806680124,
        "price": 20,
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"../assets/images/logo.png"
      },
      {
        "id": 5,
        "name": "Mancala Mix1",
        "region": "JP",
        "createdOn": 1736590201222,
        "price": 20,
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"../assets/images/logo.png"
      },
      {
        "id": 6,
        "name": "Mancala Mix2",
        "region": "JP",
        "createdOn": 1736590201222,
        "price": 20,
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"../assets/images/logo.png"
      },
      {
        "id": 7,
        "name": "Mancala Mix3",
        "region": "JP",
        "createdOn": 1736590201222,
        "price": 20,
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"../assets/images/logo.png"
      }
    ]
  };