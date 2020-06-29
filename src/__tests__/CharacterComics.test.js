import mockAxios from 'axios';
import { fetchCharacter, getComics } from '../services/character';

test('get comics based of hero id', async () => {
  const heroId = 1011299;

  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      results: [
        {
          id: 22956,
          digitalId: 0,
          title: 'Guardians of the Galaxy (2008) #8 (VILLAIN VARIANT)',
          issueNumber: 8,
          variantDescription: 'VILLAIN VARIANT',
          description: "WAR OF KINGS lead-in!\r<br>All hail Blastaar, King of the Negative Zone! As Rocket Raccoon attempts to pull a new team of Guardians together, the big question is... what the d'ast happened to Star-Lord? Prepare for major curve balls and hi-octane action as Star-Lord squares off against the new warlord ruler of the Negative Zone....Blastaar! Just what is this feared FF foe planning to do with a certain high tech\r<br>prison full of some of the Marvel Universe's worst super-offenders? And how does  this all lead to War of Kings? Find out in the series that IGN.com calls \"a rip-roaring, side-splitting romp of a book that shouldn't be missed.\"\r<br>Rated T+ ...$2.99\r<br>",
          modified: '-0001-11-30T00:00:00-0500',
          isbn: '',
          upc: '5960606410-00821',
          diamondCode: 'OCT082458',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "WAR OF KINGS lead-in!\r<br>All hail Blastaar, King of the Negative Zone! As Rocket Raccoon attempts to pull a new team of Guardians together, the big question is... what the d'ast happened to Star-Lord? Prepare for major curve balls and hi-octane action as Star-Lord squares off against the new warlord ruler of the Negative Zone....Blastaar! Just what is this feared FF foe planning to do with a certain high tech\r<br>prison full of some of the Marvel Universe's worst super-offenders? And how does  this all lead to War of Kings? Find out in the series that IGN.com calls \"a rip-roaring, side-splitting romp of a book that shouldn't be missed.\"\r<br>Rated T+ ...$2.99\r<br>",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/22956',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/22956/guardians_of_the_galaxy_2008_8_villain_variant/villain_variant?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22957',
              name: 'Guardians of the Galaxy (2008) #8',
            },
          ],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2008-12-31T00:00:00-0500',
            },
            {
              type: 'focDate',
              date: '2008-12-11T00:00:00-0500',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/80/4bb5be318d1b0',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/80/4bb5be318d1b0',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22956/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/532',
                name: 'Brandon Peterson',
                role: 'colorist',
              },
            ],
            returned: 2,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22956/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22956/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/50959',
                name: 'Cover #50959',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/50960',
                name: 'Interior #50960',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 0,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22956/events',
            items: [],
            returned: 0,
          },
        },
        {
          id: 22024,
          digitalId: 0,
          title: 'Guardians of the Galaxy (2008) #5 (MONKEY VARIANT (SI, 1 FOR 10))',
          issueNumber: 5,
          variantDescription: 'MONKEY VARIANT (SI, 1 FOR 10)',
          description: "Secret Invasion tie-in!\r<br>On Knowhere, the Guardian's transdimensional HQ, fear and mistrust boil to the surface as the mismatched team attempts to uncover the Skrull agents in their midst! Who can they trust? And if the answer is \"no one\", what does that say about the future of the Galaxy's toughest protectors? Intrigue, suspense and Skrull-duggery await in the series that IGN.com says \"With a rip-roaringly good cast, trippy visuals, and a great cliffhanger to cap it all off, this has all but cemented its place in my pull list permanently.\"\r<br>Rated T+ ...$2.99 \r<br>",
          modified: '-0001-11-30T00:00:00-0500',
          isbn: '',
          upc: '5960606410-00521',
          diamondCode: 'JUL082323',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "Secret Invasion tie-in!\r<br>On Knowhere, the Guardian's transdimensional HQ, fear and mistrust boil to the surface as the mismatched team attempts to uncover the Skrull agents in their midst! Who can they trust? And if the answer is \"no one\", what does that say about the future of the Galaxy's toughest protectors? Intrigue, suspense and Skrull-duggery await in the series that IGN.com says \"With a rip-roaringly good cast, trippy visuals, and a great cliffhanger to cap it all off, this has all but cemented its place in my pull list permanently.\"\r<br>Rated T+ ...$2.99 \r<br>",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/22024',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/22024/guardians_of_the_galaxy_2008_5_monkey_variant_si_1_for_10/monkey_variant_si_1_for_10?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22025',
              name: 'Guardians of the Galaxy (2008) #5',
            },
          ],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2008-09-17T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '2008-08-28T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/f0/4bb6acb18709a',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/f0/4bb6acb18709a',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 3,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22024/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/4989',
                name: 'Nic Klein',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                name: 'Rick Magyar',
                role: 'inker',
              },
            ],
            returned: 3,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22024/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22024/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/48548',
                name: '2 of 3 - Secret Invasion',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/48549',
                name: '2 of 3 - Secret Invasion',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 0,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22024/events',
            items: [],
            returned: 0,
          },
        },
        {
          id: 20335,
          digitalId: 19405,
          title: 'Defenders (1972) #28',
          issueNumber: 28,
          variantDescription: '',
          description: null,
          modified: '-0001-11-30T00:00:00-0500',
          isbn: '',
          upc: '',
          diamondCode: '',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 36,
          textObjects: [],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/20335',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/20335/defenders_1972_28?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Defenders-28/digital-comic/19405?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=19405&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/19405?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
            name: 'Defenders (1972 - 1986)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '1975-10-10T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '-0001-11-30T00:00:00-0500',
            },
            {
              type: 'unlimitedDate',
              date: '2015-06-30T13:48:33-0400',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2012-12-11T00:00:00-0500',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 0.25,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/40/50adbe7c3efdf',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/40/50adbe7c3efdf',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 8,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20335/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/105',
                name: 'Sal Buscema',
                role: 'penciler',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/144',
                name: 'Steve Gerber',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1519',
                name: 'Frank Giacoia',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1529',
                name: 'John Tartaglione',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1759',
                name: 'Joe Rosen',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/2854',
                name: 'Al Wenzel',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1219',
                name: 'Ron Wilson',
                role: 'penciller (cover)',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/271',
                name: 'Marv Wolfman',
                role: 'editor',
              },
            ],
            returned: 8,
          },
          characters: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20335/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011023',
                name: 'Defenders',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 2,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20335/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/43571',
                name: 'Enter:  Starhawk!',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/43572',
                name: 'My Mother, The Badoon!',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 0,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20335/events',
            items: [],
            returned: 0,
          },
        },
        {
          id: 32671,
          digitalId: 0,
          title: 'Guardians of the Galaxy (2008) #23 (DEADPOOL VARIANT)',
          issueNumber: 23,
          variantDescription: 'DEADPOOL VARIANT',
          description: "A REALM OF KINGS TIE-IN-GUEST-STARRING MAGUS! Star-Lord and the Guardians risked everything and suffered terrible losses in their epic, cross-time battle with Adam Warlock's evil half. Except...everything they-and you-know could be wrong. Welcome to what's really going on! Welcome to the kingdom of Magus! It's all waiting for you in the book that has CosmicBookNews.com raving \"DnA are mining the Marvel vaults for cosmic characters that have lain dormant for far too long...Guardians of the Galaxy consistently delivers the perfect balance of action, adventure, humor, drama, excitement, and unpredictability.\"\r\nRated T",
          modified: '-0001-11-30T00:00:00-0500',
          isbn: '',
          upc: '5960606410-02321',
          diamondCode: 'DEC090535',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "A REALM OF KINGS TIE-IN-GUEST-STARRING MAGUS! Star-Lord and the Guardians risked everything and suffered terrible losses in their epic, cross-time battle with Adam Warlock's evil half. Except...everything they-and you-know could be wrong. Welcome to what's really going on! Welcome to the kingdom of Magus! It's all waiting for you in the book that has CosmicBookNews.com raving \"DnA are mining the Marvel vaults for cosmic characters that have lain dormant for far too long...Guardians of the Galaxy consistently delivers the perfect balance of action, adventure, humor, drama, excitement, and unpredictability.\"\r\nRated T",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/32671',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/32671/guardians_of_the_galaxy_2008_23_deadpool_variant/deadpool_variant?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/29009',
              name: 'Guardians of the Galaxy (2008) #23',
            },
          ],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2010-02-17T00:00:00-0500',
            },
            {
              type: 'focDate',
              date: '2010-01-28T00:00:00-0500',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 0,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/70/4bac239d563d8',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/60/4bac23a1c0b87',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/70/4bac239d563d8',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 4,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/32671/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/9670',
                name: 'Wes Craig',
                role: 'penciller',
              },
            ],
            returned: 4,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/32671/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/32671/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/63210',
                name: 'Interior #63210',
                type: 'interiorStory',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/74254',
                name: 'Cover #74254',
                type: 'cover',
              },
            ],
            returned: 2,
          },
          events: {
            available: 0,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/32671/events',
            items: [],
            returned: 0,
          },
        },
        {
          id: 20030,
          digitalId: 12953,
          title: 'Giant-Size Defenders (1974) #5',
          issueNumber: 5,
          variantDescription: '',
          description: null,
          modified: '-0001-11-30T00:00:00-0500',
          isbn: '',
          upc: '',
          diamondCode: '',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 17,
          textObjects: [],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/20030',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/20030/giant-size_defenders_1974_5?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Giant-Size-Defenders-5/digital-comic/12953?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=12953&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/12953?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3731',
            name: 'Giant-Size Defenders (1974)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '1975-07-10T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '-0001-11-30T00:00:00-0500',
            },
            {
              type: 'unlimitedDate',
              date: '2015-11-23T00:00:00-0500',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2012-12-11T00:00:00-0500',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 0.5,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/70/50adc3d2aac83',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/70/50adc3d2aac83',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 17,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20030/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/44',
                name: 'Chris Claremont',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/954',
                name: 'Gerry Conway',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1273',
                name: 'Scott Edelman',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/144',
                name: 'Steve Gerber',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1237',
                name: 'Roger Slifer',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/2909',
                name: 'Roy Thomas',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/270',
                name: 'Gene Colan',
                role: 'penciler',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/305',
                name: 'Don Heck',
                role: 'penciler',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/13196',
                name: 'John Romita Jr.',
                role: 'penciler',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1295',
                name: 'Mike Esposito',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/389',
                name: 'Jim Mooney',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1256',
                name: 'Syd Shores',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/13094',
                name: 'Dave Hunt',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1754',
                name: 'Gaspar Saladino',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1548',
                name: 'Artie Simek',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/2053',
                name: 'George Roussos',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/967',
                name: 'Len Wein',
                role: 'editor',
              },
            ],
            returned: 17,
          },
          characters: {
            available: 4,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20030/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009262',
                name: 'Daredevil',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011023',
                name: 'Defenders',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010349',
                name: 'Nighthawk',
              },
            ],
            returned: 4,
          },
          stories: {
            available: 3,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20030/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/42899',
                name: 'Cover #42899',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/42900',
                name: 'Eelar Moves in Mysterious Ways!',
                type: 'interiorStory',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/42901',
                name: 'Quoth the Nighthawk, "Nevermore!"',
                type: 'interiorStory',
              },
            ],
            returned: 3,
          },
          events: {
            available: 0,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20030/events',
            items: [],
            returned: 0,
          },
        },
        {
          id: 32550,
          digitalId: 0,
          title: 'Guardians of the Galaxy (2008) #25 (IRON MAN BY DESIGN VARIANT)',
          issueNumber: 25,
          variantDescription: 'IRON MAN BY DESIGN VARIANT',
          description: "He's back...Thanos! How did he return? Why is he back? And what does the appearance of the galaxy's #1 threat mean for our rag-tag band of universal protectors? Find out in the next issue of the comic that CosmicBookNews.com calls \"Awesome. Amazingly, jaw-droppingly awesome.\"\r\nRated T",
          modified: '-0001-11-30T00:00:00-0500',
          isbn: '',
          upc: '5960606410-02521',
          diamondCode: 'FEB100551',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "He's back...Thanos! How did he return? Why is he back? And what does the appearance of the galaxy's #1 threat mean for our rag-tag band of universal protectors? Find out in the next issue of the comic that CosmicBookNews.com calls \"Awesome. Amazingly, jaw-droppingly awesome.\"\r\nRated T",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/32550',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/32550/guardians_of_the_galaxy_2008_25_iron_man_by_design_variant/iron_man_by_design_variant?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/32551',
              name: 'Guardians of the Galaxy (2008) #25',
            },
          ],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2010-04-21T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '2010-03-25T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 0,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/90/4ba946380817c',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/90/4ba946380817c',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 5,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/32550/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8003',
                name: 'Alex Garner',
                role: 'penciller',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                name: 'Brad Walker',
                role: 'penciller',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/7190',
                name: 'Skottie Young',
                role: 'penciller',
              },
            ],
            returned: 5,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/32550/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 3,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/32550/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/63214',
                name: 'Interior #63214',
                type: 'interiorStory',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/73509',
                name: 'Cover #73509',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/73511',
                name: 'Interior #73511',
                type: 'interiorStory',
              },
            ],
            returned: 3,
          },
          events: {
            available: 0,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/32550/events',
            items: [],
            returned: 0,
          },
        },
        {
          id: 20334,
          digitalId: 19404,
          title: 'Defenders (1972) #27',
          issueNumber: 27,
          variantDescription: '',
          description: null,
          modified: '-0001-11-30T00:00:00-0500',
          isbn: '',
          upc: '',
          diamondCode: '',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 36,
          textObjects: [],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/20334',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/20334/defenders_1972_27?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Defenders-27/digital-comic/19404?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=19404&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/19404?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
            name: 'Defenders (1972 - 1986)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '1975-09-10T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '-0001-11-30T00:00:00-0500',
            },
            {
              type: 'unlimitedDate',
              date: '2015-06-30T13:46:26-0400',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2012-12-11T00:00:00-0500',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 0.25,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/30/50adbfb36a947',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/30/50adbfb36a947',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 7,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20334/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/105',
                name: 'Sal Buscema',
                role: 'penciler',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1523',
                name: 'Vince Colletta',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/144',
                name: 'Steve Gerber',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/148',
                name: 'Gil Kane',
                role: 'penciller (cover)',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1759',
                name: 'Joe Rosen',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/967',
                name: 'Len Wein',
                role: 'editor',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/2854',
                name: 'Al Wenzel',
                role: 'colorist',
              },
            ],
            returned: 7,
          },
          characters: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20334/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011023',
                name: 'Defenders',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 2,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20334/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/43569',
                name: 'Cover #43569',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/43570',
                name: 'Three Worlds to Conquer!',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 0,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20334/events',
            items: [],
            returned: 0,
          },
        },
        {
          id: 20333,
          digitalId: 19403,
          title: 'Defenders (1972) #26',
          issueNumber: 26,
          variantDescription: '',
          description: null,
          modified: '-0001-11-30T00:00:00-0500',
          isbn: '',
          upc: '',
          diamondCode: '',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 36,
          textObjects: [],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/20333',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/20333/defenders_1972_26?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Defenders-26/digital-comic/19403?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=19403&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/19403?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
            name: 'Defenders (1972 - 1986)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '1975-08-10T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '-0001-11-30T00:00:00-0500',
            },
            {
              type: 'unlimitedDate',
              date: '2015-06-30T13:44:49-0400',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2012-12-11T00:00:00-0500',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 0.25,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/c0/50adc38131842',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/c0/50adc38131842',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 8,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20333/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/105',
                name: 'Sal Buscema',
                role: 'penciler',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1523',
                name: 'Vince Colletta',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/144',
                name: 'Steve Gerber',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/148',
                name: 'Gil Kane',
                role: 'penciller (cover)',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/2422',
                name: 'Karen Mantlo',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1754',
                name: 'Gaspar Saladino',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/2169',
                name: 'Irene Vartanoff',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/967',
                name: 'Len Wein',
                role: 'editor',
              },
            ],
            returned: 8,
          },
          characters: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20333/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011023',
                name: 'Defenders',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 2,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20333/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/43567',
                name: 'Cover #43567',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/43568',
                name: 'Savage Time!',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 0,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/20333/events',
            items: [],
            returned: 0,
          },
        },
        {
          id: 27894,
          digitalId: 0,
          title: 'Guardians of the Galaxy (2008) #17 (70TH FRAME VARIANT)',
          issueNumber: 17,
          variantDescription: '70TH FRAME VARIANT',
          description: "A WAR OF KINGS TIE-IN! In order to save the universe, Adam Warlock takes desperate action and seeks the help of allies you won't believe! This must-read issue will have profound effects not only for the Guardians of Galaxy, but for the very Marvel cosmos itself! It's more mind-blowing galactic action from the book Ain't It Cool News describes as \"just damn cool...Lanning and Abnett continue doing cosmic right.\"\r\nRated T  ...$2.99",
          modified: '-0001-11-30T00:00:00-0500',
          isbn: '',
          upc: '5960606410-01721',
          diamondCode: 'JUN090572',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "A WAR OF KINGS TIE-IN! In order to save the universe, Adam Warlock takes desperate action and seeks the help of allies you won't believe! This must-read issue will have profound effects not only for the Guardians of Galaxy, but for the very Marvel cosmos itself! It's more mind-blowing galactic action from the book Ain't It Cool News describes as \"just damn cool...Lanning and Abnett continue doing cosmic right.\"\r\nRated T  ...$2.99",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/27894',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/27894/guardians_of_the_galaxy_2008_17_70th_frame_variant/70th_frame_variant?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/25305',
              name: 'Guardians of the Galaxy (2008) #17',
            },
          ],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2009-08-26T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '2009-08-06T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/30/4bb3f72f05d7b',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/4bb4382883da7',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/30/4bb3f72f05d7b',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 5,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/27894/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/708',
                name: 'Mike Perkins',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                name: 'Wil Quintana',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                name: 'Brad Walker',
                role: 'penciller',
              },
            ],
            returned: 5,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/27894/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/27894/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/61034',
                name: 'Cover #61034',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/61035',
                name: 'Interior #61035',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 0,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/27894/events',
            items: [],
            returned: 0,
          },
        },
        {
          id: 21412,
          digitalId: 10840,
          title: 'Guardians of the Galaxy (2008) #2',
          issueNumber: 2,
          variantDescription: '',
          description: "One day on the job, and our cosmic protectors have already made themselves a major new enemy! But how does that connect to Adam Warlock's mystical past? Could it really be the threat he's spent years trying to deny?",
          modified: '2013-04-12T10:38:57-0400',
          isbn: '',
          upc: '5960606410-00211',
          diamondCode: 'APR082268',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_preview_text',
              language: 'en-us',
              text: "One day on the job, and our cosmic protectors have already made themselves a major new enemy! But how does that connect to Adam Warlock's mystical past? Could it really be the threat he's spent years trying to deny?",
            },
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "Groot is here! And so is...hey, wasn't he sunk in Antarctica? One day on the job, and our cosmic protectors have already made themselves a major new enemy! But how does that connect to Adam Warlock's mystical past? Could it really be the threat he's spent years trying to deny? And exactly what or who have the Guardians discovered frozen & adrift in space? It can't be...can it? If you're curious, give GUARDIANS a go and find out why critics like ComicAddiction.com say \"Dan Abnett and Andy Lanning are the unsung heroes of the writing staff at Marvel Comics.\"\r<br>Rated T+ ...$2.99 \r<br>",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21412',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/21412/guardians_of_the_galaxy_2008_2?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-2/digital-comic/10840?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=10840&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/10840?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2008-06-18T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '2008-05-29T00:00:00-0400',
            },
            {
              type: 'unlimitedDate',
              date: '2009-03-12T00:00:00-0400',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2011-05-24T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/80/517ad37ceb179',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/80/517ad37ceb179',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/90/4bb7c6c638eaf',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 8,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21412/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                name: 'Virtual Calligr',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/10454',
                name: 'Nathan Fairbairn',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                name: 'Clint Langley',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                name: 'Rick Magyar',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
                name: 'Paul Pelletier',
                role: 'penciller',
              },
            ],
            returned: 8,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21412/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21412/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/47276',
                name: 'Cover #47276',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/47277',
                name: 'Interior #47277',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 0,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21412/events',
            items: [],
            returned: 0,
          },
        },
        {
          id: 21586,
          digitalId: 10848,
          title: 'Guardians of the Galaxy (2008) #3',
          issueNumber: 3,
          variantDescription: '',
          description: 'Beware the return of Starhawk! How and why is this original Guardian of the Galaxy here in our reality, and what does his ominous arrival mean for our motley crew of freedom fighters?',
          modified: '2013-04-12T10:39:08-0400',
          isbn: '',
          upc: '5960606410-00311',
          diamondCode: 'MAY082274',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_preview_text',
              language: 'en-us',
              text: 'Beware the return of Starhawk! How and why is this original Guardian of the Galaxy here in our reality, and what does his ominous arrival mean for our motley crew of freedom fighters?',
            },
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "Beware the return of...Starhawk! First it was the recovery of a ceratin world-famous shield...and now the enigmatic Starhawk reigns death from above! How and why is this original Guardian of the Galaxy here in our reality, and what does his ominous arrival mean for our motley crew of freedom fighters? The mysteries continue to deepen and the craziness comes hot and heavy in the book that ComicPants.com raves \"packs more awesome than the rest of Marvel and DC's lineup combined.\"\r<br>Rated T+ ...$2.99\r<br>",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21586',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/21586/guardians_of_the_galaxy_2008_3?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-3/digital-comic/10848?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=10848&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/10848?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2008-07-09T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '2008-06-19T00:00:00-0400',
            },
            {
              type: 'unlimitedDate',
              date: '2009-06-04T00:00:00-0400',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2011-05-24T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/80/517ad3694cee2',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/80/517ad3694cee2',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/b0/4bb795c694502',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 8,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21586/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                name: 'Virtual Calligr',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/10454',
                name: 'Nathan Fairbairn',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                name: 'Clint Langley',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                name: 'Rick Magyar',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
                name: 'Paul Pelletier',
                role: 'penciller',
              },
            ],
            returned: 8,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21586/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21586/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/47578',
                name: 'Cover #47578',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/47579',
                name: 'Interior #47579',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 0,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21586/events',
            items: [],
            returned: 0,
          },
        },
        {
          id: 21783,
          digitalId: 10867,
          title: 'Guardians of the Galaxy (2008) #4',
          issueNumber: 4,
          variantDescription: '',
          description: "When their HQ is sabotaged, the universe's scrappiest squad of butt-kickers must ask themselves: \"Who do you trust?\" Is there a Skrull amongst the Guardians? Maybe the recently returned and revamped Adam Warlock? Or Star-Lord? Rocket Racoon?",
          modified: '2013-04-12T10:39:17-0400',
          isbn: '',
          upc: '5960606410-00411',
          diamondCode: 'JUN082359',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_preview_text',
              language: 'en-us',
              text: "When their HQ is sabotaged, the universe's scrappiest squad of butt-kickers must ask themselves: \"Who do you trust?\" Is there a Skrull amongst the Guardians? Maybe the recently returned and revamped Adam Warlock? Or Star-Lord? Rocket Racoon?",
            },
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "SECRET INVASION TIE-IN!\r<br>When their HQ is sabotaged, the universe's scrappiest squad of butt-kickers must ask themselves: \"Who do you trust?\" Is there a Skrull amongst the Guardians? Maybe the recently returned and revamped Adam Warlock? Or Star-Lord, who now hides behind a mask? And a talking raccoon and a telepathic dog? C'mon, people, you just know they're evil infiltrators! So jump onboard, Secret Invasion maniacs, and find out why ComicPants.com says: \"(Writers) DnA are on fire right now, and this team is brilliant.\"\r<br>Rated T+ ...$2.99\r<br>",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21783',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/21783/guardians_of_the_galaxy_2008_4?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-4/digital-comic/10867?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=10867&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/10867?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2008-08-20T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '2008-07-31T00:00:00-0400',
            },
            {
              type: 'unlimitedDate',
              date: '2009-07-30T00:00:00-0400',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2011-05-24T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/517ad36440e01',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/517ad36440e01',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/90/4c36192339427',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 8,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21783/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8571',
                name: 'Guru-eFX',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                name: 'Clint Langley',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                name: 'Virtual Calligr',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                name: 'Rick Magyar',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
                name: 'Paul Pelletier',
                role: 'penciller',
              },
            ],
            returned: 8,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21783/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21783/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/47875',
                name: '1 of 3 - Secret Invasion',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/47876',
                name: '1 of 3 - Secret Invasion',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/21783/events',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
                name: 'Secret Invasion',
              },
            ],
            returned: 1,
          },
        },
        {
          id: 22025,
          digitalId: 10868,
          title: 'Guardians of the Galaxy (2008) #5',
          issueNumber: 5,
          variantDescription: '',
          description: "On Knowhere, the Guardian's transdimensional HQ, fear and mistrust boil to the surface as the mismatched team attempts to uncover the Skrull agents in their midst! Who can they trust?",
          modified: '2013-04-12T10:39:24-0400',
          isbn: '',
          upc: '5960606410-00511',
          diamondCode: 'JUL082322',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_preview_text',
              language: 'en-us',
              text: "On Knowhere, the Guardian's transdimensional HQ, fear and mistrust boil to the surface as the mismatched team attempts to uncover the Skrull agents in their midst! Who can they trust?",
            },
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "Secret Invasion tie-in!\r<br>On Knowhere, the Guardian's transdimensional HQ, fear and mistrust boil to the surface as the mismatched team attempts to uncover the Skrull agents in their midst! Who can they trust? And if the answer is \"no one\", what does that say about the future of the Galaxy's toughest protectors? Intrigue, suspense and Skrull-duggery await in the series that IGN.com says \"With a rip-roaringly good cast, trippy visuals, and a great cliffhanger to cap it all off, this has all but cemented its place in my pull list permanently.\"\r<br>Rated T+ ...$2.99 \r<br>",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/22025',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/22025/guardians_of_the_galaxy_2008_5?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-5/digital-comic/10868?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=10868&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/10868?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22024',
              name: 'Guardians of the Galaxy (2008) #5 (MONKEY VARIANT (SI, 1 FOR 10))',
            },
          ],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2008-09-17T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '2008-08-28T00:00:00-0400',
            },
            {
              type: 'unlimitedDate',
              date: '2008-11-06T00:00:00-0500',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2011-05-24T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/517ad355c9b05',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/517ad355c9b05',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bb716eab9c56',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 8,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22025/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8571',
                name: 'Guru-eFX',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                name: 'Clint Langley',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                name: 'Virtual Calligr',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                name: 'Rick Magyar',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
                name: 'Paul Pelletier',
                role: 'penciller',
              },
            ],
            returned: 8,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22025/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22025/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/48550',
                name: '2 of 3 - Secret Invasion',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/48551',
                name: '2 of 3 - Secret Invasion',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22025/events',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
                name: 'Secret Invasion',
              },
            ],
            returned: 1,
          },
        },
        {
          id: 22352,
          digitalId: 11045,
          title: 'Guardians of the Galaxy (2008) #6',
          issueNumber: 6,
          variantDescription: '',
          description: "Trapped on Knowhere, the Guardians desperately race to uncover their Skrull infiltrator. But why are the Skrulls in the Guardians' bizarre HQ, and what exactly are they up to?",
          modified: '2013-04-12T10:39:32-0400',
          isbn: '',
          upc: '5960606410-00611',
          diamondCode: 'AUG082385',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_preview_text',
              language: 'en-us',
              text: "Trapped on Knowhere, the Guardians desperately race to uncover their Skrull infiltrator. But why are the Skrulls in the Guardians' bizarre HQ, and what exactly are they up to?",
            },
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "A SECRET INVASION TIE-IN!  \r<br>Trapped on Knowhere, the Guardians desperately race to uncover their Skrull infiltration. But why are the Skrulls in the Guardians' bizarre HQ, and what exactly are they up to?  And even if the Guardians survive the danger, paranoia and intrigue, will the team itself be in one piece after all the cards are laid bare? Find out in the latest buzz-building issue of the series that Aint It Cool News calls \"a damn fun comic...with highfalutin' space action, and an anthropomorphic raccoon stealing the show.\"\r<br>Rated T+ ...$2.99\r<br>",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/22352',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/22352/guardians_of_the_galaxy_2008_6?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-6/digital-comic/11045?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=11045&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/11045?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2008-10-15T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '2008-09-25T00:00:00-0400',
            },
            {
              type: 'unlimitedDate',
              date: '2010-02-04T00:00:00-0500',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2011-05-24T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/517ad475ab6f8',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/517ad475ab6f8',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/80/4bb6cee9cdd71',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 8,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22352/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8571',
                name: 'Guru-eFX',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                name: 'Clint Langley',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                name: 'Virtual Calligr',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                name: 'Rick Magyar',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
                name: 'Paul Pelletier',
                role: 'penciller',
              },
            ],
            returned: 8,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22352/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22352/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/49208',
                name: '3 of 3 - Secret Invasion',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/49209',
                name: '3 of 3 - Secret Invasion',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22352/events',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
                name: 'Secret Invasion',
              },
            ],
            returned: 1,
          },
        },
        {
          id: 22957,
          digitalId: 11047,
          title: 'Guardians of the Galaxy (2008) #8',
          issueNumber: 8,
          variantDescription: '',
          description: 'As Rocket Raccoon attempts to pull a new team of Guardians together, the big question is: what happened to Star-Lord? And what is Blastaar planning to do with a certain high tech prison full of some of the worst super-offenders?',
          modified: '2013-04-12T10:39:45-0400',
          isbn: '',
          upc: '5960606410-00811',
          diamondCode: 'OCT082457',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_preview_text',
              language: 'en-us',
              text: 'As Rocket Raccoon attempts to pull a new team of Guardians together, the big question is: what happened to Star-Lord? And what is Blastaar planning to do with a certain high tech prison full of some of the worst super-offenders?',
            },
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "WAR OF KINGS lead-in!\r<br>All hail Blastaar, King of the Negative Zone! As Rocket Raccoon attempts to pull a new team of Guardians together, the big question is... what the d'ast happened to Star-Lord? Prepare for major curve balls and hi-octane action as Star-Lord squares off against the new warlord ruler of the Negative Zone....Blastaar! Just what is this feared FF foe planning to do with a certain high tech\r<br>prison full of some of the Marvel Universe's worst super-offenders? And how does  this all lead to War of Kings? Find out in the series that IGN.com calls \"a rip-roaring, side-splitting romp of a book that shouldn't be missed.\"\r<br>Rated T+ ...$2.99\r<br>",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/22957',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/22957/guardians_of_the_galaxy_2008_8?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-8/digital-comic/11047?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=11047&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/11047?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22956',
              name: 'Guardians of the Galaxy (2008) #8 (VILLAIN VARIANT)',
            },
          ],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2008-12-31T00:00:00-0500',
            },
            {
              type: 'focDate',
              date: '2008-12-11T00:00:00-0500',
            },
            {
              type: 'unlimitedDate',
              date: '2009-09-07T00:00:00-0400',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2011-09-13T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/517ad459c4bc5',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/517ad459c4bc5',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4bb64add99007',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/90/4bb3d38b77ae8',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 8,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22957/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                name: 'Virtual Calligr',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                name: 'Clint Langley',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                name: 'Wil Quintana',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/447',
                name: 'Victor Olazaba',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                name: 'Brad Walker',
                role: 'penciller',
              },
            ],
            returned: 8,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22957/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22957/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/50961',
                name: 'Cover #50961',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/50962',
                name: 'Interior #50962',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/22957/events',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                name: 'War of Kings',
              },
            ],
            returned: 1,
          },
        },
        {
          id: 23148,
          digitalId: 12954,
          title: 'Guardians of the Galaxy (2008) #9',
          issueNumber: 9,
          variantDescription: '',
          description: 'Blastaar attacks the Negative Zone Prison while Star-Lord is trapped inside! Will Rocket Raccoon and his new Guardians arrive in time to save their leader?',
          modified: '2013-04-12T10:39:54-0400',
          isbn: '',
          upc: '5960606410-00911',
          diamondCode: 'NOV082407',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_preview_text',
              language: 'en-us',
              text: 'Blastaar attacks the Negative Zone Prison while Star-Lord is trapped inside! Will Rocket Raccoon and his new Guardians arrive in time to save their leader?',
            },
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "Star-Lord...trapped in jail...in the Negative Zone Prison...under attack from King Blastaar and his barbarian hordes! Will Rocket Raccoon and his new Guardians arrive in time to save their leader? Given their recent run of luck, probably not! Plus, cool art by Star Wars penciler Bong Dazo staggering revelations about Adam Warlock - as events continue to build to WAR OF KINGS! Surely you must be there for the next chapter of the series that has WeeklyComicBookReview.com raving: \"If you aren't reading GUARDIANS OF THE GALAXY yet, now is the time to get a taste of the awesome that is Rocket Raccoon and the gang.\" \r<br>Rated T+ ...$2.99",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/23148',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/23148/guardians_of_the_galaxy_2008_9?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-9/digital-comic/12954?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=12954&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/12954?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2009-01-21T00:00:00-0500',
            },
            {
              type: 'focDate',
              date: '2008-12-18T00:00:00-0500',
            },
            {
              type: 'unlimitedDate',
              date: '2009-07-08T00:00:00-0400',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2011-09-13T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/00/517ad45130d84',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/00/517ad45130d84',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/4bb604a476e23',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 13,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23148/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                name: 'Virtual Calligr',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/7649',
                name: 'Impacto Bruno Hang',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/586',
                name: 'Michael Kelleher',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                name: 'Clint Langley',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                name: 'Wil Quintana',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1005',
                name: 'Carlos Magno',
                role: 'penciller',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                name: 'Brad Walker',
                role: 'penciller',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/447',
                name: 'Victor Olazaba',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8651',
                name: 'Jack Purcell',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/768',
                name: 'Rodney Ramos',
                role: 'inker',
              },
            ],
            returned: 13,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23148/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23148/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/51329',
                name: 'Cover #51329',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/51330',
                name: 'Interior #51330',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23148/events',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                name: 'War of Kings',
              },
            ],
            returned: 1,
          },
        },
        {
          id: 23636,
          digitalId: 12955,
          title: 'Guardians of the Galaxy (2008) #10',
          issueNumber: 10,
          variantDescription: '',
          description: "The drums of battle thunder in the Negative Zone - building to WAR OF KINGS! Rocket Raccoon and the Guardians face down Blastaar's barbarian horde as Star-Lord fights for his life in 42, the besieged Initiative prison!",
          modified: '2013-04-12T10:40:04-0400',
          isbn: '',
          upc: '5960606410-01011',
          diamondCode: 'DEC082393',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_preview_text',
              language: 'en-us',
              text: "The drums of battle thunder in the Negative Zone - building to WAR OF KINGS! Rocket Raccoon and the Guardians face down Blastaar's barbarian horde as Star-Lord fights for his life in 42, the besieged Initiative prison!",
            },
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "The drums of battle thunder in the Negative Zone - building to WAR OF KINGS! Rocket Raccoon and the Guardians face down Blastaar's barbarian horde as Star-Lord fights for his life in 42, the besieged Initiative prison! And if our cosmic misfits fall - Earth is next! Penciler Brad Walker (Action Comics) joins the fun for another episode of the series that IGN.com calls \"right on par with Marvel's very best titles.\"\r<br>Rated T+ ...$2.99\r<br>",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/23636',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/23636/guardians_of_the_galaxy_2008_10?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-10/digital-comic/12955?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=12955&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/12955?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2009-02-18T00:00:00-0500',
            },
            {
              type: 'focDate',
              date: '2009-01-29T00:00:00-0500',
            },
            {
              type: 'unlimitedDate',
              date: '2009-07-08T00:00:00-0400',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2011-09-13T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/517ad44aa4e16',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/517ad44aa4e16',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/4bb5d3690f54a',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 9,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23636/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                name: 'Virtual Calligr',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                name: 'Clint Langley',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                name: 'Wil Quintana',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/497',
                name: 'John Livesay',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/447',
                name: 'Victor Olazaba',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                name: 'Brad Walker',
                role: 'penciller',
              },
            ],
            returned: 9,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23636/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23636/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/52338',
                name: '4 of 4 King Blastaar',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/52339',
                name: '4 of 4 King Blastaar',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23636/events',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                name: 'War of Kings',
              },
            ],
            returned: 1,
          },
        },
        {
          id: 23792,
          digitalId: 12957,
          title: 'Guardians of the Galaxy (2008) #11',
          issueNumber: 11,
          variantDescription: '',
          description: 'Drax and Quasar journey beyond the veil of life in a desperate quest to find Moondragon. But what is waiting for them on the other side, and will it ever let them return?',
          modified: '2013-04-12T10:40:10-0400',
          isbn: '',
          upc: '5960606410-01111',
          diamondCode: 'JAN092508',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_preview_text',
              language: 'en-us',
              text: 'Drax and Quasar journey beyond the veil of life in a desperate quest to find Moondragon. But what is waiting for them on the other side, and will it ever let them return?',
            },
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "If Captain Marvel is no more, how is he here? With War of Kings about to explode across the galaxy, two of the Guardians face death itself! Drax and Quasar journey beyond the veil of life in a desperate quest to find Moondragon. But what is waiting for them on the other side, and will it ever let them return? It's a double shot of cosmic horror - that plants the seeds for where GUARDIANS OF THE GALAXY is heading next!\r<br>Rated T+ ...$2.99",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/23792',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/23792/guardians_of_the_galaxy_2008_11?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-11/digital-comic/12957?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=12957&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/12957?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2009-03-11T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '2009-02-19T00:00:00-0500',
            },
            {
              type: 'unlimitedDate',
              date: '2009-07-08T00:00:00-0400',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2011-09-13T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/517ad59750d3f',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/517ad59750d3f',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/b0/4bb59887b80c0',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 8,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23792/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                name: 'Virtual Calligr',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/9670',
                name: 'Wes Craig',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/789',
                name: 'David Yardin',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/7649',
                name: 'Impacto Bruno Hang',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                name: 'Wil Quintana',
                role: 'colorist',
              },
            ],
            returned: 8,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23792/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23792/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/52792',
                name: 'Cover #52792',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/52793',
                name: 'Interior #52793',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23792/events',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                name: 'War of Kings',
              },
            ],
            returned: 1,
          },
        },
        {
          id: 23793,
          digitalId: 12959,
          title: 'Guardians of the Galaxy (2008) #12',
          issueNumber: 12,
          variantDescription: '',
          description: 'If Captain Marvel is no more, how is he here? With War of Kings about to explode across the galaxy, two of the Guardians face death itself!',
          modified: '2013-04-12T10:40:18-0400',
          isbn: '',
          upc: '5960606410-01211',
          diamondCode: 'JAN092510',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_preview_text',
              language: 'en-us',
              text: 'If Captain Marvel is no more, how is he here? With War of Kings about to explode across the galaxy, two of the Guardians face death itself!',
            },
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "If Captain Marvel is no more, how is he here? With War of Kings about to explode across the galaxy, two of the Guardians face death itself! Drax and Quasar journey beyond the veil of life in a desperate quest to find Moondragon. But what is waiting for them on the other side, and will it ever let them return? It's a double shot of cosmic horror - that plants the seeds for where GUARDIANS OF THE GALAXY is heading next!\r<br>Rated T+ ...$2.99\r<br>",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/23793',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/23793/guardians_of_the_galaxy_2008_12?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-12/digital-comic/12959?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=12959&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/12959?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2009-03-25T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '2009-03-05T00:00:00-0500',
            },
            {
              type: 'unlimitedDate',
              date: '2009-07-08T00:00:00-0400',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2011-09-13T00:00:00-0400',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/517ad5a167300',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/517ad5a167300',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/40/4bb53c68d5bcd',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/d0/4bb4f0bacc66e',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4bb4f0b570441',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/60/4bb4f0b03ac19',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/a0/4bb4f0ab5229b',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4bb4f0a634d07',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 7,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23793/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                name: 'Virtual Calligr',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/9670',
                name: 'Wes Craig',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                name: 'Wil Quintana',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/9233',
                name: 'Paul Renaud',
                role: 'colorist',
              },
            ],
            returned: 7,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23793/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23793/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/52794',
                name: 'Cover #52794',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/52795',
                name: 'Interior #52795',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23793/events',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                name: 'War of Kings',
              },
            ],
            returned: 1,
          },
        },
        {
          id: 23986,
          digitalId: 13565,
          title: 'Guardians of the Galaxy (2008) #13',
          issueNumber: 13,
          variantDescription: '',
          description: "WAR OF KINGS TIE-IN The guns of the Kree and the Shi'Ar have thundered - and there will hell to pay! Star-Lord's Guardians spring into desperate action in an attempt to stop the planet-shattering battle, but will either side listen?",
          modified: '2013-04-12T10:40:22-0400',
          isbn: '',
          upc: '5960606410-01311',
          diamondCode: 'FEB092568',
          ean: '',
          issn: '',
          format: 'Comic',
          pageCount: 32,
          textObjects: [
            {
              type: 'issue_preview_text',
              language: 'en-us',
              text: "WAR OF KINGS TIE-IN The guns of the Kree and the Shi'Ar have thundered - and there will hell to pay! Star-Lord's Guardians spring into desperate action in an attempt to stop the planet-shattering battle, but will either side listen?",
            },
            {
              type: 'issue_solicit_text',
              language: 'en-us',
              text: "A WAR OF KINGS tie-in! The guns of the Kree and the Shi'Ar have thundered - and there will hell to pay! Star-Lord's Guardians spring into desperate action in an attempt to stop the planet-shattering battle, but will either side listen? If they don't, the walls of the galaxy will disintegrate! It's more mind-blowing cosmic heroics from the book that made CBR.com rave \"if comics were movies, this would be the one people would be talking about all summer!\"\r\nRated T  ...$2.99",
            },
          ],
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/23986',
          urls: [
            {
              type: 'detail',
              url: 'http://marvel.com/comics/issue/23986/guardians_of_the_galaxy_2008_13?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'purchase',
              url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-13/digital-comic/13565?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'reader',
              url: 'http://marvel.com/digitalcomics/view.htm?iid=13565&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
            {
              type: 'inAppLink',
              url: 'https://applink.marvel.com/issue/13565?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
            },
          ],
          series: {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: 'onsaleDate',
              date: '2009-04-22T00:00:00-0400',
            },
            {
              type: 'focDate',
              date: '2009-04-02T00:00:00-0400',
            },
            {
              type: 'unlimitedDate',
              date: '2009-12-30T00:00:00-0500',
            },
            {
              type: 'digitalPurchaseDate',
              date: '2011-11-09T00:00:00-0500',
            },
          ],
          prices: [
            {
              type: 'printPrice',
              price: 2.99,
            },
            {
              type: 'digitalPurchasePrice',
              price: 1.99,
            },
          ],
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/03/517ad59261332',
            extension: 'jpg',
          },
          images: [
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/03/517ad59261332',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4bb527b5ea944',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bb4e68ab3793',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4bb4b9b45404b',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bb4b9af464e4',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/00/4bb4b99ece288',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/b0/4bb4b993a0769',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/90/4bb4b98e5d7a3',
              extension: 'jpg',
            },
            {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/4bb4b9895ea80',
              extension: 'jpg',
            },
          ],
          creators: {
            available: 9,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23986/creators',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                name: 'Dan Abnett',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                name: 'Andy Lanning',
                role: 'writer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                name: 'Virtual Calligr',
                role: 'other',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                name: 'Vc Joe Caramagna',
                role: 'letterer',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8504',
                name: "Frank D'ARMATA",
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                name: 'Wil Quintana',
                role: 'colorist',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/11757',
                name: 'Salvador Larroca',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/447',
                name: 'Victor Olazaba',
                role: 'inker',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                name: 'Brad Walker',
                role: 'penciller',
              },
            ],
            returned: 9,
          },
          characters: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23986/characters',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                name: 'Guardians of the Galaxy',
              },
            ],
            returned: 1,
          },
          stories: {
            available: 2,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23986/stories',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/53201',
                name: 'Cover #53201',
                type: 'cover',
              },
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/stories/53202',
                name: 'Interior #53202',
                type: 'interiorStory',
              },
            ],
            returned: 2,
          },
          events: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/comics/23986/events',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                name: 'War of Kings',
              },
            ],
            returned: 1,
          },
        },
      ],
    },
  }));

  const chars = await getComics(heroId, 'modified');

  expect(chars).toEqual(
    {
      data: {
        results: [
          {
            id: 22956,
            digitalId: 0,
            title: 'Guardians of the Galaxy (2008) #8 (VILLAIN VARIANT)',
            issueNumber: 8,
            variantDescription: 'VILLAIN VARIANT',
            description: "WAR OF KINGS lead-in!\r<br>All hail Blastaar, King of the Negative Zone! As Rocket Raccoon attempts to pull a new team of Guardians together, the big question is... what the d'ast happened to Star-Lord? Prepare for major curve balls and hi-octane action as Star-Lord squares off against the new warlord ruler of the Negative Zone....Blastaar! Just what is this feared FF foe planning to do with a certain high tech\r<br>prison full of some of the Marvel Universe's worst super-offenders? And how does  this all lead to War of Kings? Find out in the series that IGN.com calls \"a rip-roaring, side-splitting romp of a book that shouldn't be missed.\"\r<br>Rated T+ ...$2.99\r<br>",
            modified: '-0001-11-30T00:00:00-0500',
            isbn: '',
            upc: '5960606410-00821',
            diamondCode: 'OCT082458',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "WAR OF KINGS lead-in!\r<br>All hail Blastaar, King of the Negative Zone! As Rocket Raccoon attempts to pull a new team of Guardians together, the big question is... what the d'ast happened to Star-Lord? Prepare for major curve balls and hi-octane action as Star-Lord squares off against the new warlord ruler of the Negative Zone....Blastaar! Just what is this feared FF foe planning to do with a certain high tech\r<br>prison full of some of the Marvel Universe's worst super-offenders? And how does  this all lead to War of Kings? Find out in the series that IGN.com calls \"a rip-roaring, side-splitting romp of a book that shouldn't be missed.\"\r<br>Rated T+ ...$2.99\r<br>",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22956',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/22956/guardians_of_the_galaxy_2008_8_villain_variant/villain_variant?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/comics/22957',
                name: 'Guardians of the Galaxy (2008) #8',
              },
            ],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2008-12-31T00:00:00-0500',
              },
              {
                type: 'focDate',
                date: '2008-12-11T00:00:00-0500',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/80/4bb5be318d1b0',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/80/4bb5be318d1b0',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22956/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/532',
                  name: 'Brandon Peterson',
                  role: 'colorist',
                },
              ],
              returned: 2,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22956/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22956/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/50959',
                  name: 'Cover #50959',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/50960',
                  name: 'Interior #50960',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22956/events',
              items: [],
              returned: 0,
            },
          },
          {
            id: 22024,
            digitalId: 0,
            title: 'Guardians of the Galaxy (2008) #5 (MONKEY VARIANT (SI, 1 FOR 10))',
            issueNumber: 5,
            variantDescription: 'MONKEY VARIANT (SI, 1 FOR 10)',
            description: "Secret Invasion tie-in!\r<br>On Knowhere, the Guardian's transdimensional HQ, fear and mistrust boil to the surface as the mismatched team attempts to uncover the Skrull agents in their midst! Who can they trust? And if the answer is \"no one\", what does that say about the future of the Galaxy's toughest protectors? Intrigue, suspense and Skrull-duggery await in the series that IGN.com says \"With a rip-roaringly good cast, trippy visuals, and a great cliffhanger to cap it all off, this has all but cemented its place in my pull list permanently.\"\r<br>Rated T+ ...$2.99 \r<br>",
            modified: '-0001-11-30T00:00:00-0500',
            isbn: '',
            upc: '5960606410-00521',
            diamondCode: 'JUL082323',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "Secret Invasion tie-in!\r<br>On Knowhere, the Guardian's transdimensional HQ, fear and mistrust boil to the surface as the mismatched team attempts to uncover the Skrull agents in their midst! Who can they trust? And if the answer is \"no one\", what does that say about the future of the Galaxy's toughest protectors? Intrigue, suspense and Skrull-duggery await in the series that IGN.com says \"With a rip-roaringly good cast, trippy visuals, and a great cliffhanger to cap it all off, this has all but cemented its place in my pull list permanently.\"\r<br>Rated T+ ...$2.99 \r<br>",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22024',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/22024/guardians_of_the_galaxy_2008_5_monkey_variant_si_1_for_10/monkey_variant_si_1_for_10?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/comics/22025',
                name: 'Guardians of the Galaxy (2008) #5',
              },
            ],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2008-09-17T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '2008-08-28T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/f0/4bb6acb18709a',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/f0/4bb6acb18709a',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 3,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22024/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/4989',
                  name: 'Nic Klein',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                  name: 'Rick Magyar',
                  role: 'inker',
                },
              ],
              returned: 3,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22024/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22024/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/48548',
                  name: '2 of 3 - Secret Invasion',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/48549',
                  name: '2 of 3 - Secret Invasion',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22024/events',
              items: [],
              returned: 0,
            },
          },
          {
            id: 20335,
            digitalId: 19405,
            title: 'Defenders (1972) #28',
            issueNumber: 28,
            variantDescription: '',
            description: null,
            modified: '-0001-11-30T00:00:00-0500',
            isbn: '',
            upc: '',
            diamondCode: '',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 36,
            textObjects: [],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20335',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/20335/defenders_1972_28?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Defenders-28/digital-comic/19405?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=19405&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/19405?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
              name: 'Defenders (1972 - 1986)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '1975-10-10T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '-0001-11-30T00:00:00-0500',
              },
              {
                type: 'unlimitedDate',
                date: '2015-06-30T13:48:33-0400',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2012-12-11T00:00:00-0500',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 0.25,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/40/50adbe7c3efdf',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/40/50adbe7c3efdf',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 8,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20335/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/105',
                  name: 'Sal Buscema',
                  role: 'penciler',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/144',
                  name: 'Steve Gerber',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1519',
                  name: 'Frank Giacoia',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1529',
                  name: 'John Tartaglione',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1759',
                  name: 'Joe Rosen',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/2854',
                  name: 'Al Wenzel',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1219',
                  name: 'Ron Wilson',
                  role: 'penciller (cover)',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/271',
                  name: 'Marv Wolfman',
                  role: 'editor',
                },
              ],
              returned: 8,
            },
            characters: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20335/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011023',
                  name: 'Defenders',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 2,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20335/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/43571',
                  name: 'Enter:  Starhawk!',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/43572',
                  name: 'My Mother, The Badoon!',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20335/events',
              items: [],
              returned: 0,
            },
          },
          {
            id: 32671,
            digitalId: 0,
            title: 'Guardians of the Galaxy (2008) #23 (DEADPOOL VARIANT)',
            issueNumber: 23,
            variantDescription: 'DEADPOOL VARIANT',
            description: "A REALM OF KINGS TIE-IN-GUEST-STARRING MAGUS! Star-Lord and the Guardians risked everything and suffered terrible losses in their epic, cross-time battle with Adam Warlock's evil half. Except...everything they-and you-know could be wrong. Welcome to what's really going on! Welcome to the kingdom of Magus! It's all waiting for you in the book that has CosmicBookNews.com raving \"DnA are mining the Marvel vaults for cosmic characters that have lain dormant for far too long...Guardians of the Galaxy consistently delivers the perfect balance of action, adventure, humor, drama, excitement, and unpredictability.\"\r\nRated T",
            modified: '-0001-11-30T00:00:00-0500',
            isbn: '',
            upc: '5960606410-02321',
            diamondCode: 'DEC090535',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "A REALM OF KINGS TIE-IN-GUEST-STARRING MAGUS! Star-Lord and the Guardians risked everything and suffered terrible losses in their epic, cross-time battle with Adam Warlock's evil half. Except...everything they-and you-know could be wrong. Welcome to what's really going on! Welcome to the kingdom of Magus! It's all waiting for you in the book that has CosmicBookNews.com raving \"DnA are mining the Marvel vaults for cosmic characters that have lain dormant for far too long...Guardians of the Galaxy consistently delivers the perfect balance of action, adventure, humor, drama, excitement, and unpredictability.\"\r\nRated T",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/32671',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/32671/guardians_of_the_galaxy_2008_23_deadpool_variant/deadpool_variant?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/comics/29009',
                name: 'Guardians of the Galaxy (2008) #23',
              },
            ],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2010-02-17T00:00:00-0500',
              },
              {
                type: 'focDate',
                date: '2010-01-28T00:00:00-0500',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 0,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/70/4bac239d563d8',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/60/4bac23a1c0b87',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/70/4bac239d563d8',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 4,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/32671/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/9670',
                  name: 'Wes Craig',
                  role: 'penciller',
                },
              ],
              returned: 4,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/32671/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/32671/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/63210',
                  name: 'Interior #63210',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/74254',
                  name: 'Cover #74254',
                  type: 'cover',
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/32671/events',
              items: [],
              returned: 0,
            },
          },
          {
            id: 20030,
            digitalId: 12953,
            title: 'Giant-Size Defenders (1974) #5',
            issueNumber: 5,
            variantDescription: '',
            description: null,
            modified: '-0001-11-30T00:00:00-0500',
            isbn: '',
            upc: '',
            diamondCode: '',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 17,
            textObjects: [],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20030',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/20030/giant-size_defenders_1974_5?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Giant-Size-Defenders-5/digital-comic/12953?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=12953&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/12953?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3731',
              name: 'Giant-Size Defenders (1974)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '1975-07-10T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '-0001-11-30T00:00:00-0500',
              },
              {
                type: 'unlimitedDate',
                date: '2015-11-23T00:00:00-0500',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2012-12-11T00:00:00-0500',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 0.5,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/70/50adc3d2aac83',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/70/50adc3d2aac83',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 17,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20030/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/44',
                  name: 'Chris Claremont',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/954',
                  name: 'Gerry Conway',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1273',
                  name: 'Scott Edelman',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/144',
                  name: 'Steve Gerber',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1237',
                  name: 'Roger Slifer',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/2909',
                  name: 'Roy Thomas',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/270',
                  name: 'Gene Colan',
                  role: 'penciler',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/305',
                  name: 'Don Heck',
                  role: 'penciler',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/13196',
                  name: 'John Romita Jr.',
                  role: 'penciler',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1295',
                  name: 'Mike Esposito',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/389',
                  name: 'Jim Mooney',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1256',
                  name: 'Syd Shores',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/13094',
                  name: 'Dave Hunt',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1754',
                  name: 'Gaspar Saladino',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1548',
                  name: 'Artie Simek',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/2053',
                  name: 'George Roussos',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/967',
                  name: 'Len Wein',
                  role: 'editor',
                },
              ],
              returned: 17,
            },
            characters: {
              available: 4,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20030/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009262',
                  name: 'Daredevil',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011023',
                  name: 'Defenders',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010349',
                  name: 'Nighthawk',
                },
              ],
              returned: 4,
            },
            stories: {
              available: 3,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20030/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/42899',
                  name: 'Cover #42899',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/42900',
                  name: 'Eelar Moves in Mysterious Ways!',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/42901',
                  name: 'Quoth the Nighthawk, "Nevermore!"',
                  type: 'interiorStory',
                },
              ],
              returned: 3,
            },
            events: {
              available: 0,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20030/events',
              items: [],
              returned: 0,
            },
          },
          {
            id: 32550,
            digitalId: 0,
            title: 'Guardians of the Galaxy (2008) #25 (IRON MAN BY DESIGN VARIANT)',
            issueNumber: 25,
            variantDescription: 'IRON MAN BY DESIGN VARIANT',
            description: "He's back...Thanos! How did he return? Why is he back? And what does the appearance of the galaxy's #1 threat mean for our rag-tag band of universal protectors? Find out in the next issue of the comic that CosmicBookNews.com calls \"Awesome. Amazingly, jaw-droppingly awesome.\"\r\nRated T",
            modified: '-0001-11-30T00:00:00-0500',
            isbn: '',
            upc: '5960606410-02521',
            diamondCode: 'FEB100551',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "He's back...Thanos! How did he return? Why is he back? And what does the appearance of the galaxy's #1 threat mean for our rag-tag band of universal protectors? Find out in the next issue of the comic that CosmicBookNews.com calls \"Awesome. Amazingly, jaw-droppingly awesome.\"\r\nRated T",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/32550',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/32550/guardians_of_the_galaxy_2008_25_iron_man_by_design_variant/iron_man_by_design_variant?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/comics/32551',
                name: 'Guardians of the Galaxy (2008) #25',
              },
            ],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2010-04-21T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '2010-03-25T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 0,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/90/4ba946380817c',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/90/4ba946380817c',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 5,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/32550/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8003',
                  name: 'Alex Garner',
                  role: 'penciller',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                  name: 'Brad Walker',
                  role: 'penciller',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/7190',
                  name: 'Skottie Young',
                  role: 'penciller',
                },
              ],
              returned: 5,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/32550/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 3,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/32550/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/63214',
                  name: 'Interior #63214',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/73509',
                  name: 'Cover #73509',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/73511',
                  name: 'Interior #73511',
                  type: 'interiorStory',
                },
              ],
              returned: 3,
            },
            events: {
              available: 0,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/32550/events',
              items: [],
              returned: 0,
            },
          },
          {
            id: 20334,
            digitalId: 19404,
            title: 'Defenders (1972) #27',
            issueNumber: 27,
            variantDescription: '',
            description: null,
            modified: '-0001-11-30T00:00:00-0500',
            isbn: '',
            upc: '',
            diamondCode: '',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 36,
            textObjects: [],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20334',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/20334/defenders_1972_27?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Defenders-27/digital-comic/19404?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=19404&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/19404?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
              name: 'Defenders (1972 - 1986)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '1975-09-10T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '-0001-11-30T00:00:00-0500',
              },
              {
                type: 'unlimitedDate',
                date: '2015-06-30T13:46:26-0400',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2012-12-11T00:00:00-0500',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 0.25,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/30/50adbfb36a947',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/30/50adbfb36a947',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 7,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20334/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/105',
                  name: 'Sal Buscema',
                  role: 'penciler',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1523',
                  name: 'Vince Colletta',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/144',
                  name: 'Steve Gerber',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/148',
                  name: 'Gil Kane',
                  role: 'penciller (cover)',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1759',
                  name: 'Joe Rosen',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/967',
                  name: 'Len Wein',
                  role: 'editor',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/2854',
                  name: 'Al Wenzel',
                  role: 'colorist',
                },
              ],
              returned: 7,
            },
            characters: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20334/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011023',
                  name: 'Defenders',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 2,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20334/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/43569',
                  name: 'Cover #43569',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/43570',
                  name: 'Three Worlds to Conquer!',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20334/events',
              items: [],
              returned: 0,
            },
          },
          {
            id: 20333,
            digitalId: 19403,
            title: 'Defenders (1972) #26',
            issueNumber: 26,
            variantDescription: '',
            description: null,
            modified: '-0001-11-30T00:00:00-0500',
            isbn: '',
            upc: '',
            diamondCode: '',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 36,
            textObjects: [],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20333',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/20333/defenders_1972_26?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Defenders-26/digital-comic/19403?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=19403&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/19403?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
              name: 'Defenders (1972 - 1986)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '1975-08-10T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '-0001-11-30T00:00:00-0500',
              },
              {
                type: 'unlimitedDate',
                date: '2015-06-30T13:44:49-0400',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2012-12-11T00:00:00-0500',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 0.25,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/c0/50adc38131842',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/c0/50adc38131842',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 8,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20333/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/105',
                  name: 'Sal Buscema',
                  role: 'penciler',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1523',
                  name: 'Vince Colletta',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/144',
                  name: 'Steve Gerber',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/148',
                  name: 'Gil Kane',
                  role: 'penciller (cover)',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/2422',
                  name: 'Karen Mantlo',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1754',
                  name: 'Gaspar Saladino',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/2169',
                  name: 'Irene Vartanoff',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/967',
                  name: 'Len Wein',
                  role: 'editor',
                },
              ],
              returned: 8,
            },
            characters: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20333/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011023',
                  name: 'Defenders',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 2,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20333/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/43567',
                  name: 'Cover #43567',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/43568',
                  name: 'Savage Time!',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/20333/events',
              items: [],
              returned: 0,
            },
          },
          {
            id: 27894,
            digitalId: 0,
            title: 'Guardians of the Galaxy (2008) #17 (70TH FRAME VARIANT)',
            issueNumber: 17,
            variantDescription: '70TH FRAME VARIANT',
            description: "A WAR OF KINGS TIE-IN! In order to save the universe, Adam Warlock takes desperate action and seeks the help of allies you won't believe! This must-read issue will have profound effects not only for the Guardians of Galaxy, but for the very Marvel cosmos itself! It's more mind-blowing galactic action from the book Ain't It Cool News describes as \"just damn cool...Lanning and Abnett continue doing cosmic right.\"\r\nRated T  ...$2.99",
            modified: '-0001-11-30T00:00:00-0500',
            isbn: '',
            upc: '5960606410-01721',
            diamondCode: 'JUN090572',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "A WAR OF KINGS TIE-IN! In order to save the universe, Adam Warlock takes desperate action and seeks the help of allies you won't believe! This must-read issue will have profound effects not only for the Guardians of Galaxy, but for the very Marvel cosmos itself! It's more mind-blowing galactic action from the book Ain't It Cool News describes as \"just damn cool...Lanning and Abnett continue doing cosmic right.\"\r\nRated T  ...$2.99",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/27894',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/27894/guardians_of_the_galaxy_2008_17_70th_frame_variant/70th_frame_variant?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/comics/25305',
                name: 'Guardians of the Galaxy (2008) #17',
              },
            ],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2009-08-26T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '2009-08-06T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/30/4bb3f72f05d7b',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/4bb4382883da7',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/30/4bb3f72f05d7b',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 5,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/27894/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/708',
                  name: 'Mike Perkins',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                  name: 'Wil Quintana',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                  name: 'Brad Walker',
                  role: 'penciller',
                },
              ],
              returned: 5,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/27894/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/27894/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/61034',
                  name: 'Cover #61034',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/61035',
                  name: 'Interior #61035',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/27894/events',
              items: [],
              returned: 0,
            },
          },
          {
            id: 21412,
            digitalId: 10840,
            title: 'Guardians of the Galaxy (2008) #2',
            issueNumber: 2,
            variantDescription: '',
            description: "One day on the job, and our cosmic protectors have already made themselves a major new enemy! But how does that connect to Adam Warlock's mystical past? Could it really be the threat he's spent years trying to deny?",
            modified: '2013-04-12T10:38:57-0400',
            isbn: '',
            upc: '5960606410-00211',
            diamondCode: 'APR082268',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_preview_text',
                language: 'en-us',
                text: "One day on the job, and our cosmic protectors have already made themselves a major new enemy! But how does that connect to Adam Warlock's mystical past? Could it really be the threat he's spent years trying to deny?",
              },
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "Groot is here! And so is...hey, wasn't he sunk in Antarctica? One day on the job, and our cosmic protectors have already made themselves a major new enemy! But how does that connect to Adam Warlock's mystical past? Could it really be the threat he's spent years trying to deny? And exactly what or who have the Guardians discovered frozen & adrift in space? It can't be...can it? If you're curious, give GUARDIANS a go and find out why critics like ComicAddiction.com say \"Dan Abnett and Andy Lanning are the unsung heroes of the writing staff at Marvel Comics.\"\r<br>Rated T+ ...$2.99 \r<br>",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21412',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/21412/guardians_of_the_galaxy_2008_2?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-2/digital-comic/10840?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=10840&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/10840?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2008-06-18T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '2008-05-29T00:00:00-0400',
              },
              {
                type: 'unlimitedDate',
                date: '2009-03-12T00:00:00-0400',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2011-05-24T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/80/517ad37ceb179',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/80/517ad37ceb179',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/90/4bb7c6c638eaf',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 8,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21412/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                  name: 'Virtual Calligr',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/10454',
                  name: 'Nathan Fairbairn',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                  name: 'Clint Langley',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                  name: 'Rick Magyar',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
                  name: 'Paul Pelletier',
                  role: 'penciller',
                },
              ],
              returned: 8,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21412/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21412/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/47276',
                  name: 'Cover #47276',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/47277',
                  name: 'Interior #47277',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21412/events',
              items: [],
              returned: 0,
            },
          },
          {
            id: 21586,
            digitalId: 10848,
            title: 'Guardians of the Galaxy (2008) #3',
            issueNumber: 3,
            variantDescription: '',
            description: 'Beware the return of Starhawk! How and why is this original Guardian of the Galaxy here in our reality, and what does his ominous arrival mean for our motley crew of freedom fighters?',
            modified: '2013-04-12T10:39:08-0400',
            isbn: '',
            upc: '5960606410-00311',
            diamondCode: 'MAY082274',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_preview_text',
                language: 'en-us',
                text: 'Beware the return of Starhawk! How and why is this original Guardian of the Galaxy here in our reality, and what does his ominous arrival mean for our motley crew of freedom fighters?',
              },
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "Beware the return of...Starhawk! First it was the recovery of a ceratin world-famous shield...and now the enigmatic Starhawk reigns death from above! How and why is this original Guardian of the Galaxy here in our reality, and what does his ominous arrival mean for our motley crew of freedom fighters? The mysteries continue to deepen and the craziness comes hot and heavy in the book that ComicPants.com raves \"packs more awesome than the rest of Marvel and DC's lineup combined.\"\r<br>Rated T+ ...$2.99\r<br>",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21586',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/21586/guardians_of_the_galaxy_2008_3?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-3/digital-comic/10848?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=10848&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/10848?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2008-07-09T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '2008-06-19T00:00:00-0400',
              },
              {
                type: 'unlimitedDate',
                date: '2009-06-04T00:00:00-0400',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2011-05-24T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/80/517ad3694cee2',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/80/517ad3694cee2',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/b0/4bb795c694502',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 8,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21586/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                  name: 'Virtual Calligr',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/10454',
                  name: 'Nathan Fairbairn',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                  name: 'Clint Langley',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                  name: 'Rick Magyar',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
                  name: 'Paul Pelletier',
                  role: 'penciller',
                },
              ],
              returned: 8,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21586/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21586/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/47578',
                  name: 'Cover #47578',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/47579',
                  name: 'Interior #47579',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21586/events',
              items: [],
              returned: 0,
            },
          },
          {
            id: 21783,
            digitalId: 10867,
            title: 'Guardians of the Galaxy (2008) #4',
            issueNumber: 4,
            variantDescription: '',
            description: "When their HQ is sabotaged, the universe's scrappiest squad of butt-kickers must ask themselves: \"Who do you trust?\" Is there a Skrull amongst the Guardians? Maybe the recently returned and revamped Adam Warlock? Or Star-Lord? Rocket Racoon?",
            modified: '2013-04-12T10:39:17-0400',
            isbn: '',
            upc: '5960606410-00411',
            diamondCode: 'JUN082359',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_preview_text',
                language: 'en-us',
                text: "When their HQ is sabotaged, the universe's scrappiest squad of butt-kickers must ask themselves: \"Who do you trust?\" Is there a Skrull amongst the Guardians? Maybe the recently returned and revamped Adam Warlock? Or Star-Lord? Rocket Racoon?",
              },
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "SECRET INVASION TIE-IN!\r<br>When their HQ is sabotaged, the universe's scrappiest squad of butt-kickers must ask themselves: \"Who do you trust?\" Is there a Skrull amongst the Guardians? Maybe the recently returned and revamped Adam Warlock? Or Star-Lord, who now hides behind a mask? And a talking raccoon and a telepathic dog? C'mon, people, you just know they're evil infiltrators! So jump onboard, Secret Invasion maniacs, and find out why ComicPants.com says: \"(Writers) DnA are on fire right now, and this team is brilliant.\"\r<br>Rated T+ ...$2.99\r<br>",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21783',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/21783/guardians_of_the_galaxy_2008_4?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-4/digital-comic/10867?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=10867&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/10867?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2008-08-20T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '2008-07-31T00:00:00-0400',
              },
              {
                type: 'unlimitedDate',
                date: '2009-07-30T00:00:00-0400',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2011-05-24T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/517ad36440e01',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/517ad36440e01',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/90/4c36192339427',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 8,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21783/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8571',
                  name: 'Guru-eFX',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                  name: 'Clint Langley',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                  name: 'Virtual Calligr',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                  name: 'Rick Magyar',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
                  name: 'Paul Pelletier',
                  role: 'penciller',
                },
              ],
              returned: 8,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21783/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21783/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/47875',
                  name: '1 of 3 - Secret Invasion',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/47876',
                  name: '1 of 3 - Secret Invasion',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/21783/events',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
                  name: 'Secret Invasion',
                },
              ],
              returned: 1,
            },
          },
          {
            id: 22025,
            digitalId: 10868,
            title: 'Guardians of the Galaxy (2008) #5',
            issueNumber: 5,
            variantDescription: '',
            description: "On Knowhere, the Guardian's transdimensional HQ, fear and mistrust boil to the surface as the mismatched team attempts to uncover the Skrull agents in their midst! Who can they trust?",
            modified: '2013-04-12T10:39:24-0400',
            isbn: '',
            upc: '5960606410-00511',
            diamondCode: 'JUL082322',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_preview_text',
                language: 'en-us',
                text: "On Knowhere, the Guardian's transdimensional HQ, fear and mistrust boil to the surface as the mismatched team attempts to uncover the Skrull agents in their midst! Who can they trust?",
              },
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "Secret Invasion tie-in!\r<br>On Knowhere, the Guardian's transdimensional HQ, fear and mistrust boil to the surface as the mismatched team attempts to uncover the Skrull agents in their midst! Who can they trust? And if the answer is \"no one\", what does that say about the future of the Galaxy's toughest protectors? Intrigue, suspense and Skrull-duggery await in the series that IGN.com says \"With a rip-roaringly good cast, trippy visuals, and a great cliffhanger to cap it all off, this has all but cemented its place in my pull list permanently.\"\r<br>Rated T+ ...$2.99 \r<br>",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22025',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/22025/guardians_of_the_galaxy_2008_5?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-5/digital-comic/10868?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=10868&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/10868?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/comics/22024',
                name: 'Guardians of the Galaxy (2008) #5 (MONKEY VARIANT (SI, 1 FOR 10))',
              },
            ],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2008-09-17T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '2008-08-28T00:00:00-0400',
              },
              {
                type: 'unlimitedDate',
                date: '2008-11-06T00:00:00-0500',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2011-05-24T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/517ad355c9b05',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/517ad355c9b05',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bb716eab9c56',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 8,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22025/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8571',
                  name: 'Guru-eFX',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                  name: 'Clint Langley',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                  name: 'Virtual Calligr',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                  name: 'Rick Magyar',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
                  name: 'Paul Pelletier',
                  role: 'penciller',
                },
              ],
              returned: 8,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22025/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22025/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/48550',
                  name: '2 of 3 - Secret Invasion',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/48551',
                  name: '2 of 3 - Secret Invasion',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22025/events',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
                  name: 'Secret Invasion',
                },
              ],
              returned: 1,
            },
          },
          {
            id: 22352,
            digitalId: 11045,
            title: 'Guardians of the Galaxy (2008) #6',
            issueNumber: 6,
            variantDescription: '',
            description: "Trapped on Knowhere, the Guardians desperately race to uncover their Skrull infiltrator. But why are the Skrulls in the Guardians' bizarre HQ, and what exactly are they up to?",
            modified: '2013-04-12T10:39:32-0400',
            isbn: '',
            upc: '5960606410-00611',
            diamondCode: 'AUG082385',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_preview_text',
                language: 'en-us',
                text: "Trapped on Knowhere, the Guardians desperately race to uncover their Skrull infiltrator. But why are the Skrulls in the Guardians' bizarre HQ, and what exactly are they up to?",
              },
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "A SECRET INVASION TIE-IN!  \r<br>Trapped on Knowhere, the Guardians desperately race to uncover their Skrull infiltration. But why are the Skrulls in the Guardians' bizarre HQ, and what exactly are they up to?  And even if the Guardians survive the danger, paranoia and intrigue, will the team itself be in one piece after all the cards are laid bare? Find out in the latest buzz-building issue of the series that Aint It Cool News calls \"a damn fun comic...with highfalutin' space action, and an anthropomorphic raccoon stealing the show.\"\r<br>Rated T+ ...$2.99\r<br>",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22352',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/22352/guardians_of_the_galaxy_2008_6?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-6/digital-comic/11045?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=11045&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/11045?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2008-10-15T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '2008-09-25T00:00:00-0400',
              },
              {
                type: 'unlimitedDate',
                date: '2010-02-04T00:00:00-0500',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2011-05-24T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/517ad475ab6f8',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/517ad475ab6f8',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/80/4bb6cee9cdd71',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 8,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22352/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8571',
                  name: 'Guru-eFX',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                  name: 'Clint Langley',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                  name: 'Virtual Calligr',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/560',
                  name: 'Rick Magyar',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/559',
                  name: 'Paul Pelletier',
                  role: 'penciller',
                },
              ],
              returned: 8,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22352/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22352/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/49208',
                  name: '3 of 3 - Secret Invasion',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/49209',
                  name: '3 of 3 - Secret Invasion',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22352/events',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
                  name: 'Secret Invasion',
                },
              ],
              returned: 1,
            },
          },
          {
            id: 22957,
            digitalId: 11047,
            title: 'Guardians of the Galaxy (2008) #8',
            issueNumber: 8,
            variantDescription: '',
            description: 'As Rocket Raccoon attempts to pull a new team of Guardians together, the big question is: what happened to Star-Lord? And what is Blastaar planning to do with a certain high tech prison full of some of the worst super-offenders?',
            modified: '2013-04-12T10:39:45-0400',
            isbn: '',
            upc: '5960606410-00811',
            diamondCode: 'OCT082457',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_preview_text',
                language: 'en-us',
                text: 'As Rocket Raccoon attempts to pull a new team of Guardians together, the big question is: what happened to Star-Lord? And what is Blastaar planning to do with a certain high tech prison full of some of the worst super-offenders?',
              },
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "WAR OF KINGS lead-in!\r<br>All hail Blastaar, King of the Negative Zone! As Rocket Raccoon attempts to pull a new team of Guardians together, the big question is... what the d'ast happened to Star-Lord? Prepare for major curve balls and hi-octane action as Star-Lord squares off against the new warlord ruler of the Negative Zone....Blastaar! Just what is this feared FF foe planning to do with a certain high tech\r<br>prison full of some of the Marvel Universe's worst super-offenders? And how does  this all lead to War of Kings? Find out in the series that IGN.com calls \"a rip-roaring, side-splitting romp of a book that shouldn't be missed.\"\r<br>Rated T+ ...$2.99\r<br>",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22957',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/22957/guardians_of_the_galaxy_2008_8?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-8/digital-comic/11047?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=11047&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/11047?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/comics/22956',
                name: 'Guardians of the Galaxy (2008) #8 (VILLAIN VARIANT)',
              },
            ],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2008-12-31T00:00:00-0500',
              },
              {
                type: 'focDate',
                date: '2008-12-11T00:00:00-0500',
              },
              {
                type: 'unlimitedDate',
                date: '2009-09-07T00:00:00-0400',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2011-09-13T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/517ad459c4bc5',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/517ad459c4bc5',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4bb64add99007',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/90/4bb3d38b77ae8',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 8,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22957/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                  name: 'Virtual Calligr',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                  name: 'Clint Langley',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                  name: 'Wil Quintana',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/447',
                  name: 'Victor Olazaba',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                  name: 'Brad Walker',
                  role: 'penciller',
                },
              ],
              returned: 8,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22957/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22957/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/50961',
                  name: 'Cover #50961',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/50962',
                  name: 'Interior #50962',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/22957/events',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                  name: 'War of Kings',
                },
              ],
              returned: 1,
            },
          },
          {
            id: 23148,
            digitalId: 12954,
            title: 'Guardians of the Galaxy (2008) #9',
            issueNumber: 9,
            variantDescription: '',
            description: 'Blastaar attacks the Negative Zone Prison while Star-Lord is trapped inside! Will Rocket Raccoon and his new Guardians arrive in time to save their leader?',
            modified: '2013-04-12T10:39:54-0400',
            isbn: '',
            upc: '5960606410-00911',
            diamondCode: 'NOV082407',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_preview_text',
                language: 'en-us',
                text: 'Blastaar attacks the Negative Zone Prison while Star-Lord is trapped inside! Will Rocket Raccoon and his new Guardians arrive in time to save their leader?',
              },
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "Star-Lord...trapped in jail...in the Negative Zone Prison...under attack from King Blastaar and his barbarian hordes! Will Rocket Raccoon and his new Guardians arrive in time to save their leader? Given their recent run of luck, probably not! Plus, cool art by Star Wars penciler Bong Dazo staggering revelations about Adam Warlock - as events continue to build to WAR OF KINGS! Surely you must be there for the next chapter of the series that has WeeklyComicBookReview.com raving: \"If you aren't reading GUARDIANS OF THE GALAXY yet, now is the time to get a taste of the awesome that is Rocket Raccoon and the gang.\" \r<br>Rated T+ ...$2.99",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23148',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/23148/guardians_of_the_galaxy_2008_9?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-9/digital-comic/12954?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=12954&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/12954?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2009-01-21T00:00:00-0500',
              },
              {
                type: 'focDate',
                date: '2008-12-18T00:00:00-0500',
              },
              {
                type: 'unlimitedDate',
                date: '2009-07-08T00:00:00-0400',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2011-09-13T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/00/517ad45130d84',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/00/517ad45130d84',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/4bb604a476e23',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 13,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23148/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                  name: 'Virtual Calligr',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/7649',
                  name: 'Impacto Bruno Hang',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/586',
                  name: 'Michael Kelleher',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                  name: 'Clint Langley',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                  name: 'Wil Quintana',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1005',
                  name: 'Carlos Magno',
                  role: 'penciller',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                  name: 'Brad Walker',
                  role: 'penciller',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/447',
                  name: 'Victor Olazaba',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8651',
                  name: 'Jack Purcell',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/768',
                  name: 'Rodney Ramos',
                  role: 'inker',
                },
              ],
              returned: 13,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23148/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23148/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/51329',
                  name: 'Cover #51329',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/51330',
                  name: 'Interior #51330',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23148/events',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                  name: 'War of Kings',
                },
              ],
              returned: 1,
            },
          },
          {
            id: 23636,
            digitalId: 12955,
            title: 'Guardians of the Galaxy (2008) #10',
            issueNumber: 10,
            variantDescription: '',
            description: "The drums of battle thunder in the Negative Zone - building to WAR OF KINGS! Rocket Raccoon and the Guardians face down Blastaar's barbarian horde as Star-Lord fights for his life in 42, the besieged Initiative prison!",
            modified: '2013-04-12T10:40:04-0400',
            isbn: '',
            upc: '5960606410-01011',
            diamondCode: 'DEC082393',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_preview_text',
                language: 'en-us',
                text: "The drums of battle thunder in the Negative Zone - building to WAR OF KINGS! Rocket Raccoon and the Guardians face down Blastaar's barbarian horde as Star-Lord fights for his life in 42, the besieged Initiative prison!",
              },
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "The drums of battle thunder in the Negative Zone - building to WAR OF KINGS! Rocket Raccoon and the Guardians face down Blastaar's barbarian horde as Star-Lord fights for his life in 42, the besieged Initiative prison! And if our cosmic misfits fall - Earth is next! Penciler Brad Walker (Action Comics) joins the fun for another episode of the series that IGN.com calls \"right on par with Marvel's very best titles.\"\r<br>Rated T+ ...$2.99\r<br>",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23636',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/23636/guardians_of_the_galaxy_2008_10?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-10/digital-comic/12955?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=12955&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/12955?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2009-02-18T00:00:00-0500',
              },
              {
                type: 'focDate',
                date: '2009-01-29T00:00:00-0500',
              },
              {
                type: 'unlimitedDate',
                date: '2009-07-08T00:00:00-0400',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2011-09-13T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/517ad44aa4e16',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/517ad44aa4e16',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/4bb5d3690f54a',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 9,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23636/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                  name: 'Virtual Calligr',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5033',
                  name: 'Clint Langley',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                  name: 'Wil Quintana',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/497',
                  name: 'John Livesay',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/447',
                  name: 'Victor Olazaba',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                  name: 'Brad Walker',
                  role: 'penciller',
                },
              ],
              returned: 9,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23636/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23636/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/52338',
                  name: '4 of 4 King Blastaar',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/52339',
                  name: '4 of 4 King Blastaar',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23636/events',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                  name: 'War of Kings',
                },
              ],
              returned: 1,
            },
          },
          {
            id: 23792,
            digitalId: 12957,
            title: 'Guardians of the Galaxy (2008) #11',
            issueNumber: 11,
            variantDescription: '',
            description: 'Drax and Quasar journey beyond the veil of life in a desperate quest to find Moondragon. But what is waiting for them on the other side, and will it ever let them return?',
            modified: '2013-04-12T10:40:10-0400',
            isbn: '',
            upc: '5960606410-01111',
            diamondCode: 'JAN092508',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_preview_text',
                language: 'en-us',
                text: 'Drax and Quasar journey beyond the veil of life in a desperate quest to find Moondragon. But what is waiting for them on the other side, and will it ever let them return?',
              },
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "If Captain Marvel is no more, how is he here? With War of Kings about to explode across the galaxy, two of the Guardians face death itself! Drax and Quasar journey beyond the veil of life in a desperate quest to find Moondragon. But what is waiting for them on the other side, and will it ever let them return? It's a double shot of cosmic horror - that plants the seeds for where GUARDIANS OF THE GALAXY is heading next!\r<br>Rated T+ ...$2.99",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23792',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/23792/guardians_of_the_galaxy_2008_11?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-11/digital-comic/12957?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=12957&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/12957?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2009-03-11T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '2009-02-19T00:00:00-0500',
              },
              {
                type: 'unlimitedDate',
                date: '2009-07-08T00:00:00-0400',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2011-09-13T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/517ad59750d3f',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/517ad59750d3f',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/b0/4bb59887b80c0',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 8,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23792/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                  name: 'Virtual Calligr',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/9670',
                  name: 'Wes Craig',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/789',
                  name: 'David Yardin',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/7649',
                  name: 'Impacto Bruno Hang',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                  name: 'Wil Quintana',
                  role: 'colorist',
                },
              ],
              returned: 8,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23792/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23792/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/52792',
                  name: 'Cover #52792',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/52793',
                  name: 'Interior #52793',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23792/events',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                  name: 'War of Kings',
                },
              ],
              returned: 1,
            },
          },
          {
            id: 23793,
            digitalId: 12959,
            title: 'Guardians of the Galaxy (2008) #12',
            issueNumber: 12,
            variantDescription: '',
            description: 'If Captain Marvel is no more, how is he here? With War of Kings about to explode across the galaxy, two of the Guardians face death itself!',
            modified: '2013-04-12T10:40:18-0400',
            isbn: '',
            upc: '5960606410-01211',
            diamondCode: 'JAN092510',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_preview_text',
                language: 'en-us',
                text: 'If Captain Marvel is no more, how is he here? With War of Kings about to explode across the galaxy, two of the Guardians face death itself!',
              },
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "If Captain Marvel is no more, how is he here? With War of Kings about to explode across the galaxy, two of the Guardians face death itself! Drax and Quasar journey beyond the veil of life in a desperate quest to find Moondragon. But what is waiting for them on the other side, and will it ever let them return? It's a double shot of cosmic horror - that plants the seeds for where GUARDIANS OF THE GALAXY is heading next!\r<br>Rated T+ ...$2.99\r<br>",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23793',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/23793/guardians_of_the_galaxy_2008_12?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-12/digital-comic/12959?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=12959&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/12959?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2009-03-25T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '2009-03-05T00:00:00-0500',
              },
              {
                type: 'unlimitedDate',
                date: '2009-07-08T00:00:00-0400',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2011-09-13T00:00:00-0400',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/517ad5a167300',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/517ad5a167300',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/40/4bb53c68d5bcd',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/d0/4bb4f0bacc66e',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4bb4f0b570441',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/60/4bb4f0b03ac19',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/a0/4bb4f0ab5229b',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4bb4f0a634d07',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 7,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23793/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                  name: 'Virtual Calligr',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/9670',
                  name: 'Wes Craig',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                  name: 'Wil Quintana',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/9233',
                  name: 'Paul Renaud',
                  role: 'colorist',
                },
              ],
              returned: 7,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23793/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23793/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/52794',
                  name: 'Cover #52794',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/52795',
                  name: 'Interior #52795',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23793/events',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                  name: 'War of Kings',
                },
              ],
              returned: 1,
            },
          },
          {
            id: 23986,
            digitalId: 13565,
            title: 'Guardians of the Galaxy (2008) #13',
            issueNumber: 13,
            variantDescription: '',
            description: "WAR OF KINGS TIE-IN The guns of the Kree and the Shi'Ar have thundered - and there will hell to pay! Star-Lord's Guardians spring into desperate action in an attempt to stop the planet-shattering battle, but will either side listen?",
            modified: '2013-04-12T10:40:22-0400',
            isbn: '',
            upc: '5960606410-01311',
            diamondCode: 'FEB092568',
            ean: '',
            issn: '',
            format: 'Comic',
            pageCount: 32,
            textObjects: [
              {
                type: 'issue_preview_text',
                language: 'en-us',
                text: "WAR OF KINGS TIE-IN The guns of the Kree and the Shi'Ar have thundered - and there will hell to pay! Star-Lord's Guardians spring into desperate action in an attempt to stop the planet-shattering battle, but will either side listen?",
              },
              {
                type: 'issue_solicit_text',
                language: 'en-us',
                text: "A WAR OF KINGS tie-in! The guns of the Kree and the Shi'Ar have thundered - and there will hell to pay! Star-Lord's Guardians spring into desperate action in an attempt to stop the planet-shattering battle, but will either side listen? If they don't, the walls of the galaxy will disintegrate! It's more mind-blowing cosmic heroics from the book that made CBR.com rave \"if comics were movies, this would be the one people would be talking about all summer!\"\r\nRated T  ...$2.99",
              },
            ],
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23986',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/comics/issue/23986/guardians_of_the_galaxy_2008_13?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'purchase',
                url: 'http://comicstore.marvel.com/Guardians-of-the-Galaxy-13/digital-comic/13565?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'reader',
                url: 'http://marvel.com/digitalcomics/view.htm?iid=13565&utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
              {
                type: 'inAppLink',
                url: 'https://applink.marvel.com/issue/13565?utm_campaign=apiRef&utm_source=96e3274cf3039b0f54dff62968bf9e0c',
              },
            ],
            series: {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
              name: 'Guardians of the Galaxy (2008 - 2010)',
            },
            variants: [],
            collections: [],
            collectedIssues: [],
            dates: [
              {
                type: 'onsaleDate',
                date: '2009-04-22T00:00:00-0400',
              },
              {
                type: 'focDate',
                date: '2009-04-02T00:00:00-0400',
              },
              {
                type: 'unlimitedDate',
                date: '2009-12-30T00:00:00-0500',
              },
              {
                type: 'digitalPurchaseDate',
                date: '2011-11-09T00:00:00-0500',
              },
            ],
            prices: [
              {
                type: 'printPrice',
                price: 2.99,
              },
              {
                type: 'digitalPurchasePrice',
                price: 1.99,
              },
            ],
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/03/517ad59261332',
              extension: 'jpg',
            },
            images: [
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/03/517ad59261332',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4bb527b5ea944',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bb4e68ab3793',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4bb4b9b45404b',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bb4b9af464e4',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/00/4bb4b99ece288',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/b0/4bb4b993a0769',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/90/4bb4b98e5d7a3',
                extension: 'jpg',
              },
              {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/4bb4b9895ea80',
                extension: 'jpg',
              },
            ],
            creators: {
              available: 9,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23986/creators',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/1107',
                  name: 'Dan Abnett',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
                  name: 'Andy Lanning',
                  role: 'writer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
                  name: 'Virtual Calligr',
                  role: 'other',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                  name: 'Vc Joe Caramagna',
                  role: 'letterer',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8504',
                  name: "Frank D'ARMATA",
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/561',
                  name: 'Wil Quintana',
                  role: 'colorist',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/11757',
                  name: 'Salvador Larroca',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/447',
                  name: 'Victor Olazaba',
                  role: 'inker',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/creators/8138',
                  name: 'Brad Walker',
                  role: 'penciller',
                },
              ],
              returned: 9,
            },
            characters: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23986/characters',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
                  name: 'Guardians of the Galaxy',
                },
              ],
              returned: 1,
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23986/stories',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/53201',
                  name: 'Cover #53201',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/53202',
                  name: 'Interior #53202',
                  type: 'interiorStory',
                },
              ],
              returned: 2,
            },
            events: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/comics/23986/events',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
                  name: 'War of Kings',
                },
              ],
              returned: 1,
            },
          },
        ],

      },
    },

  );

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(`http://gateway.marvel.com/v1/public/characters/${heroId}/comics?orderBy=modified&ts=thesoer&apikey=96e3274cf3039b0f54dff62968bf9e0c&hash=29afd7900598bf5909d98cb452365ec2`);
});
