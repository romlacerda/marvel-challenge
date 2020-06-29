import mockAxios from 'axios';
import { fetchCharacter, getComics } from '../services/character';

test('fetchs and display character data', async () => {
  const heroId = 1011299;
  mockAxios.get.mockImplementationOnce(() => 
    Promise.resolve({
      data: {
        results: [
          {
            "id": 1009552,
            "name": "S.H.I.E.L.D.",
            "description": "",
            "modified": "2016-04-14T12:23:14-0400",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/51097abb8e306",
              "extension": "jpg"
            },
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009552",
            "comics": {
              "available": 159,
              "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/comics",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/24348",
                  "name": "Adam: Legend of the Blue Marvel (Trade Paperback)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/22856",
                  "name": "Adam: Legend of the Blue Marvel (2008) #2"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/56034",
                  "name": "Agents of S.H.I.E.L.D. (2016) #6"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/56035",
                  "name": "Agents of S.H.I.E.L.D. (2016) #7"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/56036",
                  "name": "Agents of S.H.I.E.L.D. (2016) #8"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/56037",
                  "name": "Agents of S.H.I.E.L.D. (2016) #9"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/56038",
                  "name": "Agents of S.H.I.E.L.D. (2016) #10"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/6970",
                  "name": "Avengers (1963) #115"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/32477",
                  "name": "Avengers & the Infinity Gauntlet (2010) #1"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/21247",
                  "name": "Avengers/Invaders (2008) #1"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/21394",
                  "name": "Avengers/Invaders (2008) #2"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/22524",
                  "name": "Avengers/Invaders (2008) #6"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/64791",
                  "name": "Avengers: Standoff (Trade Paperback)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/65326",
                  "name": "Avengers: Tales to Astonish (Trade Paperback)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/47986",
                  "name": "Black Widow (2014) #1"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/47987",
                  "name": "Black Widow (2014) #2"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/47988",
                  "name": "Black Widow (2014) #3"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/47989",
                  "name": "Black Widow (2014) #4"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/47990",
                  "name": "Black Widow (2014) #5"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/47991",
                  "name": "Black Widow (2014) #6"
                }
              ],
              "returned": 20
            },
            "series": {
              "available": 74,
              "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/series",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
                  "name": "Adam: Legend of the Blue Marvel (2008)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/7524",
                  "name": "Adam: Legend of the Blue Marvel (2008)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/20607",
                  "name": "Agents of S.H.I.E.L.D. (2016)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                  "name": "Avengers (1963 - 1996)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/9859",
                  "name": "Avengers & the Infinity Gauntlet (2010)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/4864",
                  "name": "Avengers/Invaders (2008 - 2009)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/23601",
                  "name": "Avengers: Standoff (2017)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/23777",
                  "name": "Avengers: Tales to Astonish (2017)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/18138",
                  "name": "Black Widow (2014 - 2015)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/26394",
                  "name": "Blade: Vampire Hunter (1999 - 2000)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/24019",
                  "name": "Cable & X-Force: Onslaught Rising (2018)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/2722",
                  "name": "Cap Transport (2005 - 2006)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/832",
                  "name": "Captain America (2004 - 2011)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/21100",
                  "name": "CAPTAIN AMERICA: STEVE ROGERS VOL. 2 - THE TRIAL OF MARIA HILL TPB (2017)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/1613",
                  "name": "Captain America: Winter Soldier Vol. 2 (2006)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/21417",
                  "name": "Civil War II (2016)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/10105",
                  "name": "Civil War: X-Men (2011)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/2002",
                  "name": "Daredevil (1964 - 1998)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/23832",
                  "name": "Deadpool & X-Force Omnibus (2017)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/series/27502",
                  "name": "DEADPOOL BY POSEHN & DUGGAN: THE COMPLETE COLLECTION VOL. 2 TPB (2018)"
                }
              ],
              "returned": 20
            },
            "stories": {
              "available": 186,
              "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/4243",
                  "name": "2 of 6 - Winter Soldier",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/4244",
                  "name": "2 of 6 - Winter Soldier",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/4271",
                  "name": "1 of ? - Civil War",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/10240",
                  "name": "Cover #10240",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/10241",
                  "name": "Who Strikes at---Shield?",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/10249",
                  "name": "Cover #10249",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/10261",
                  "name": "Cover #10261",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/11993",
                  "name": "The Warrior and the Whip!",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/14478",
                  "name": "Below Us the Battle!",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/15611",
                  "name": "Before I'd Be Slave...",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/15754",
                  "name": "... And a HYDRA New Year!",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/16352",
                  "name": "Flying Blind Part 3: Under the Gun",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/16354",
                  "name": "Flying Blind Part 4: Face to Face with the Truth!",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/18823",
                  "name": "Incredible Hulk (1962) #337",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/18824",
                  "name": "Crossroads",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/25760",
                  "name": "Out Of The Blue (Into The Fire) [Part 1 of 3]",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/25763",
                  "name": "Broken! [Part 2 of 3]",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/25834",
                  "name": "Doomsday!",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/27422",
                  "name": "The Dogs of War, Part 7",
                  "type": "interiorStory"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/28542",
                  "name": "Out Of The Blue (Into The Fire) [Part 1 of 3]",
                  "type": "interiorStory"
                }
              ],
              "returned": 20
            },
            "events": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/events",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
                  "name": "Civil War"
                }
              ],
              "returned": 1
            },
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/characters/1009552/shield.?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c"
              },
              {
                "type": "wiki",
                "url": "http://marvel.com/universe/S.H.I.E.L.D.?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c"
              },
              {
                "type": "comiclink",
                "url": "http://marvel.com/comics/characters/1009552/shield.?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c"
              }
            ]
          }
        ]
      }
    })
  );

  const chars = await fetchCharacter(heroId);

  expect(chars).toEqual(
    {
      data: {
      results: [
        {
          "id": 1009552,
          "name": "S.H.I.E.L.D.",
          "description": "",
          "modified": "2016-04-14T12:23:14-0400",
          "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/51097abb8e306",
            "extension": "jpg"
          },
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009552",
          "comics": {
            "available": 159,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/comics",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/24348",
                "name": "Adam: Legend of the Blue Marvel (Trade Paperback)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22856",
                "name": "Adam: Legend of the Blue Marvel (2008) #2"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/56034",
                "name": "Agents of S.H.I.E.L.D. (2016) #6"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/56035",
                "name": "Agents of S.H.I.E.L.D. (2016) #7"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/56036",
                "name": "Agents of S.H.I.E.L.D. (2016) #8"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/56037",
                "name": "Agents of S.H.I.E.L.D. (2016) #9"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/56038",
                "name": "Agents of S.H.I.E.L.D. (2016) #10"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6970",
                "name": "Avengers (1963) #115"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/32477",
                "name": "Avengers & the Infinity Gauntlet (2010) #1"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/21247",
                "name": "Avengers/Invaders (2008) #1"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/21394",
                "name": "Avengers/Invaders (2008) #2"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22524",
                "name": "Avengers/Invaders (2008) #6"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/64791",
                "name": "Avengers: Standoff (Trade Paperback)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/65326",
                "name": "Avengers: Tales to Astonish (Trade Paperback)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/47986",
                "name": "Black Widow (2014) #1"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/47987",
                "name": "Black Widow (2014) #2"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/47988",
                "name": "Black Widow (2014) #3"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/47989",
                "name": "Black Widow (2014) #4"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/47990",
                "name": "Black Widow (2014) #5"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/47991",
                "name": "Black Widow (2014) #6"
              }
            ],
            "returned": 20
          },
          "series": {
            "available": 74,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/series",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
                "name": "Adam: Legend of the Blue Marvel (2008)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7524",
                "name": "Adam: Legend of the Blue Marvel (2008)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/20607",
                "name": "Agents of S.H.I.E.L.D. (2016)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                "name": "Avengers (1963 - 1996)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/9859",
                "name": "Avengers & the Infinity Gauntlet (2010)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/4864",
                "name": "Avengers/Invaders (2008 - 2009)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/23601",
                "name": "Avengers: Standoff (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/23777",
                "name": "Avengers: Tales to Astonish (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/18138",
                "name": "Black Widow (2014 - 2015)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/26394",
                "name": "Blade: Vampire Hunter (1999 - 2000)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/24019",
                "name": "Cable & X-Force: Onslaught Rising (2018)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2722",
                "name": "Cap Transport (2005 - 2006)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/832",
                "name": "Captain America (2004 - 2011)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/21100",
                "name": "CAPTAIN AMERICA: STEVE ROGERS VOL. 2 - THE TRIAL OF MARIA HILL TPB (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1613",
                "name": "Captain America: Winter Soldier Vol. 2 (2006)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/21417",
                "name": "Civil War II (2016)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/10105",
                "name": "Civil War: X-Men (2011)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2002",
                "name": "Daredevil (1964 - 1998)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/23832",
                "name": "Deadpool & X-Force Omnibus (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/27502",
                "name": "DEADPOOL BY POSEHN & DUGGAN: THE COMPLETE COLLECTION VOL. 2 TPB (2018)"
              }
            ],
            "returned": 20
          },
          "stories": {
            "available": 186,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/stories",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/4243",
                "name": "2 of 6 - Winter Soldier",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/4244",
                "name": "2 of 6 - Winter Soldier",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/4271",
                "name": "1 of ? - Civil War",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/10240",
                "name": "Cover #10240",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/10241",
                "name": "Who Strikes at---Shield?",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/10249",
                "name": "Cover #10249",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/10261",
                "name": "Cover #10261",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/11993",
                "name": "The Warrior and the Whip!",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/14478",
                "name": "Below Us the Battle!",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/15611",
                "name": "Before I'd Be Slave...",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/15754",
                "name": "... And a HYDRA New Year!",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/16352",
                "name": "Flying Blind Part 3: Under the Gun",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/16354",
                "name": "Flying Blind Part 4: Face to Face with the Truth!",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/18823",
                "name": "Incredible Hulk (1962) #337",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/18824",
                "name": "Crossroads",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/25760",
                "name": "Out Of The Blue (Into The Fire) [Part 1 of 3]",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/25763",
                "name": "Broken! [Part 2 of 3]",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/25834",
                "name": "Doomsday!",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/27422",
                "name": "The Dogs of War, Part 7",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/28542",
                "name": "Out Of The Blue (Into The Fire) [Part 1 of 3]",
                "type": "interiorStory"
              }
            ],
            "returned": 20
          },
          "events": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009552/events",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
                "name": "Civil War"
              }
            ],
            "returned": 1
          },
          "urls": [
            {
              "type": "detail",
              "url": "http://marvel.com/comics/characters/1009552/shield.?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c"
            },
            {
              "type": "wiki",
              "url": "http://marvel.com/universe/S.H.I.E.L.D.?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c"
            },
            {
              "type": "comiclink",
              "url": "http://marvel.com/comics/characters/1009552/shield.?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c"
            }
          ]
        }
      ]

    }}
    
);

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(`http://gateway.marvel.com/v1/public/characters/${heroId}?ts=thesoer&apikey=96e3274cf3039b0f54dff62968bf9e0c&hash=29afd7900598bf5909d98cb452365ec2`);
});