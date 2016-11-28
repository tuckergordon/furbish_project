// Sophie Ardell, Marcus Christiansen, and Tucker Gordon
// CSCI 3665
// Project 2: Kate Furbish Collection
// parsedFurbishData.js

// This script simply holds a JSON-formatted object that is assigned to 
// be the dataset for our project. It is a sorted (alphabetically by scientific name) 
// array of flora objects, where each flora object has the following properties:

//    -volume: the volume in which this flora first appears
//    -page: the pages in the volume in which this flora first appears (this is a string, 
//        and multiple pages will appear comma-delimited)
//    -sciName: the scientific name of the flora
//    -commonName: the common name of the flora
//    -entries: an arraylist where each element contains the town and data of one Furbish's entries
//          for that flora

var dataset = [
  {
    "volume": "12",
    "page": "78",
    "sciName": "Abies balsamea (L) P Mill ",
    "comName": "balsam fir",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "11",
    "page": "49",
    "sciName": "Acalypha virginica L  ",
    "comName": "Virginia three-seeded Mercury",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "East Livermore",
        "years": "1894"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Brunswick",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "3",
    "page": "19",
    "sciName": "Acer pensylvanicum L ",
    "comName": "striped maple",
    "dimensions": "37.5 x 28.0",
    "samples": [
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "3",
    "page": "24",
    "sciName": "Acer rubrum L ",
    "comName": "red maple",
    "dimensions": "25.0 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "3",
    "page": "21",
    "sciName": "Acer saccharinum L ",
    "comName": "silver maple",
    "dimensions": "36.6 x 27.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "3",
    "page": "20",
    "sciName": "Acer spicatum Lam ",
    "comName": "mountain maple",
    "dimensions": "37.5 x 28.0",
    "samples": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "East Livermore",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "7",
    "page": "17",
    "sciName": "Achillea millefolium L ",
    "comName": "common yarrow",
    "dimensions": "37.9 x 26.8",
    "samples": [
      {
        "places": "Aroostook",
        "years": "1880"
      },
      {
        "places": "Aroostook",
        "years": "1881"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Brunswick",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "18",
    "sciName": "Achillea ptarmica L ",
    "comName": "pearl yarrow",
    "dimensions": "37.5 x 27.0",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "12",
    "page": "95",
    "sciName": "Acorus calamus L ",
    "comName": "single-veined sweetflag",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1874"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Avon",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "1",
    "page": "39",
    "sciName": "Actaea pachypoda Ell ",
    "comName": "white baneberry",
    "dimensions": "26.4 x 20.1",
    "samples": []
  },
  {
    "volume": "1",
    "page": "37",
    "sciName": "Actaea rubra (Ait) Willd ",
    "comName": "red baneberry",
    "dimensions": "32.4 x 24.8 ",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Gray",
        "years": "1874"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "57",
    "sciName": "Adlumia fungosa (Ait) Greene ex B S P",
    "comName": "Allegheny-vine",
    "dimensions": "34.2 x 26.0 ",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "5",
    "page": "110",
    "sciName": "Aethusa cynapium L ",
    "comName": "fool's-parsley",
    "dimensions": "38.3 x 27.6",
    "samples": [
      {
        "places": "Portland",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "9",
    "page": "47",
    "sciName": "Agalinis maritima (Raf) Raf ",
    "comName": "saltmarsh agalinis",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Ogunquit",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "9",
    "page": "45",
    "sciName": "Agalinis paupercula (Gray) Britt ",
    "comName": "small-flowered agalinis",
    "dimensions": "37.7 x 27",
    "samples": []
  },
  {
    "volume": "9",
    "page": "46",
    "sciName": "Agalinis purpurea (Gray) Pennell",
    "comName": "purple agalinis",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Winnegance",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "9",
    "page": "48",
    "sciName": "Agalinis tenuifolia (Vahl) Raf ",
    "comName": "slender-leaved agalinis",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "6",
    "page": "21",
    "sciName": "Ageratina altissima (L) King & H E Robins ",
    "comName": "white snakeroot",
    "dimensions": "36.9 x 27.2",
    "samples": [
      {
        "places": "Van Buren",
        "years": "1880"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Long Plantation",
        "years": "1894"
      },
      {
        "places": "Coplin",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "4",
    "page": "65",
    "sciName": "Agrimonia eupatoria L ",
    "comName": "medicinal agrimony",
    "dimensions": "36.7 x 26.1",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1874"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Phillips",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "2",
    "page": "48",
    "sciName": "Agrostemma githago L ",
    "comName": "common corncockle",
    "dimensions": "33.7 x 23.7",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "13",
    "page": "33",
    "sciName": "Alisma subcordatum Raf ",
    "comName": "southern water-plantain",
    "dimensions": "34.3 x 24.3",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1899"
      },
      {
        "places": "South Poland",
        "years": "1904"
      },
      {
        "places": "York",
        "years": "1904"
      },
      {
        "places": "Livermore Falls",
        "years": "1904"
      }
    ]
  },
  {
    "volume": "14",
    "page": "40",
    "sciName": "Allium canadense L ",
    "comName": "meadow garlic",
    "dimensions": "38 x 27.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "39",
    "sciName": "Allium shoenoprasum L ",
    "comName": "wilDChives",
    "dimensions": "37 x 27.5 ",
    "samples": []
  },
  {
    "volume": "14",
    "page": "40a",
    "sciName": "Allium tricoccum Ait",
    "comName": "wild leek",
    "dimensions": "32.5 x 23",
    "samples": [
      {
        "places": "Eagle Island",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "12",
    "page": "37",
    "sciName": "Alnus incana (L) Moench",
    "comName": "speckled alder",
    "dimensions": "31 x 24.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "38",
    "sciName": "Alnus serrulata (Ait) Willd ",
    "comName": "smooth alder ",
    "dimensions": "27.5 x 25.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "12",
    "page": "36",
    "sciName": "Alnus viridis (Vill) Lam & DC ",
    "comName": "green alder",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Ashland",
        "years": "1881"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "10",
    "page": "83",
    "sciName": "Amaranthus albus L ",
    "comName": "tumbleweed amaranth",
    "dimensions": "37 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "10",
    "page": "80",
    "sciName": "Amaranthus cruentus L ",
    "comName": "blood amaranth",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "10",
    "page": "81",
    "sciName": "Amaranthus retroflexus L ",
    "comName": "red-rooted amaranth",
    "dimensions": "39 x 28",
    "samples": [
      {
        "places": "Topsham",
        "years": "1907"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "1a",
    "sciName": "Ambrosia trifida L var trifida",
    "comName": "giant ragweed",
    "dimensions": "38.7 x 28.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "4",
    "page": "99",
    "sciName": "Amelanchier bartramiana Tausch) M Roemer ",
    "comName": "mountain shadbush",
    "dimensions": "29.0 x 17.5",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "4",
    "page": "93",
    "sciName": "Amelanchier canadensis (L) Medik ",
    "comName": "eastern shadbush",
    "dimensions": "34.9 x 26.3",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Fayette Ridge",
        "years": "1878"
      },
      {
        "places": "Fayette Ridge",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Fayette Ridge",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "4",
    "page": "96",
    "sciName": "Amelanchier sanguinea (Pursh) DC ",
    "comName": "round-leaved shadbush",
    "dimensions": "28.9 x 22.7",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "3",
    "page": "68",
    "sciName": "Amphicarpaea bracteata (L) Fern ",
    "comName": "silk-tree",
    "dimensions": "26.8 x 18.5",
    "samples": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "30",
    "sciName": "Anaphalis margaritacea (L) Benth & Hook f ",
    "comName": "pearly everlasting",
    "dimensions": "35.3 x 26.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Readfield",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "10",
    "page": "4",
    "sciName": "Anchusa arvensis (L) Bieb ",
    "comName": "small bugloss",
    "dimensions": "37.5 x 27.3 ",
    "samples": [
      {
        "places": "Mount Desert",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "8",
    "page": "46",
    "sciName": "Andromeda polifolia L ",
    "comName": "bog-rosemary",
    "dimensions": "24.1 x 18.3 ",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "10",
    "sciName": "Anemone americana (DC) H Hara",
    "comName": "blunt-lobed hepatica",
    "dimensions": "22.2 x 20.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1890"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1886"
      },
      {
        "places": "Snow's Falls",
        "years": "1905"
      }
    ]
  },
  {
    "volume": "1",
    "page": "5",
    "sciName": "Anemone cylindrica Gray ",
    "comName": "long-headed windflower",
    "dimensions": "38.2 x 28.2",
    "samples": [
      {
        "places": "South Poland",
        "years": "1896"
      },
      {
        "places": "Chesterville Plains",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "1",
    "page": "4",
    "sciName": "Anemone multifida Poir ",
    "comName": "cut-leaved windflower",
    "dimensions": "37.0 x 26.5",
    "samples": [
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "1",
    "page": "9",
    "sciName": "Anemone nermorosa L ",
    "comName": "European windflower",
    "dimensions": "26.2 x 19.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Topsham",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "1",
    "page": "6",
    "sciName": "Anemone virginiana L ",
    "comName": "tall windflower",
    "dimensions": "38.3 x 28.9",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Chesterville",
        "years": "1896"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Kents Hill",
        "years": "1892"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "5",
    "page": "44",
    "sciName": "Angelica atropurpurea L ",
    "comName": "purple-stemmed Angelica",
    "dimensions": "38.0 x 27.8",
    "samples": [
      {
        "places": "Farmington",
        "years": "1878"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "5",
    "page": "45",
    "sciName": "Angelica lucida L ",
    "comName": "sea coast Angelica",
    "dimensions": "37.1 x 27.6",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Harpswell",
        "years": "1876"
      },
      {
        "places": "West Bath",
        "years": "1892"
      },
      {
        "places": "Isle au Haut",
        "years": "1909"
      },
      {
        "places": "Harpswell",
        "years": "1876"
      },
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Isle au Haut",
        "years": "1909"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "105",
    "sciName": "Antennaria howellii Greene ",
    "comName": "small pussytoes",
    "dimensions": "37.5 x 27.4",
    "samples": [
      {
        "places": "North Berwick",
        "years": "1898"
      },
      {
        "places": "North Berwick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "31a",
    "sciName": "Antennaria neglecta Greene ",
    "comName": "field pussytoes",
    "dimensions": "21.7 x 14.5",
    "samples": []
  },
  {
    "volume": "7",
    "page": "103",
    "sciName": "Antennaria parlinii Fern ",
    "comName": "Parlin's pussytoes",
    "dimensions": "37.3 x 26.8",
    "samples": [
      {
        "places": "North Berwick",
        "years": "1898"
      },
      {
        "places": "North Berwick",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "29",
    "sciName": "Antennaria plantaginifolia (L) Richardson ",
    "comName": "plaintain-leaved pussytoes",
    "dimensions": "37.0 x 27.7",
    "samples": [
      {
        "places": "Gilead",
        "years": "1894"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "76",
    "sciName": "Anthemis arvensis L ",
    "comName": "corn chamomile",
    "dimensions": "29.4 x 24.2",
    "samples": [
      {
        "places": "Orono",
        "years": "1890"
      }
    ]
  },
  {
    "volume": "7",
    "page": "15",
    "sciName": "Anthemis cotula L ",
    "comName": "stinking chamomile",
    "dimensions": "29.6 x 23.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1874"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "16",
    "sciName": "Anthemis cotula L / Anthemis arvensis L ",
    "comName": "stinking chamomile/ corn chamomile",
    "dimensions": "37.6 x 26.8",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "3",
    "page": "67",
    "sciName": "Apios americana Medik ",
    "comName": "common ground-nut",
    "dimensions": "36.5 x 25.7",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "10",
    "page": "38",
    "sciName": "Apocynum androsaemifolium L ",
    "comName": "spreading dogbane",
    "dimensions": "27.5 x 19.7",
    "samples": [
      {
        "places": "Harpswell",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Chesterville",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "10",
    "page": "39",
    "sciName": "Apocynum cannabinum L ",
    "comName": "hemp dogbane",
    "dimensions": "29.7 x 22.5",
    "samples": [
      {
        "places": "Harpswell Island",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Litchfield",
        "years": "1896"
      },
      {
        "places": "Gilead",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "10",
    "page": "37",
    "sciName": "Apocynum x floribundum Greene",
    "comName": "spreading dogbane hybrid ",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Topsham",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "35",
    "sciName": "Aquilegia canadensis L ",
    "comName": "reDColumbine",
    "dimensions": "26.5 x 18.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Topsham",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "West Bath",
        "years": "1885"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Brunswick",
        "years": "1905"
      }
    ]
  },
  {
    "volume": "5",
    "page": "62",
    "sciName": "Aralia hispida Vent ",
    "comName": "bristly sasparilla",
    "dimensions": "37.5 x 26.9",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1897"
      },
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "5",
    "page": "64",
    "sciName": "Aralia nudicaulis L ",
    "comName": "wild sasparilla",
    "dimensions": "37.0 x 27.7",
    "samples": [
      {
        "places": "Topsham",
        "years": "1881"
      },
      {
        "places": "East Livermore",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Fayette",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "5",
    "page": "60",
    "sciName": "Aralia racemosa L ",
    "comName": "American spikenard",
    "dimensions": "37.6 x 28.0 ",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "45",
    "sciName": "Arctium lappa L ",
    "comName": "great burdock",
    "dimensions": "26.7 x 20.1",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Houlton",
        "years": "1881"
      },
      {
        "places": "Houlton",
        "years": "1882"
      },
      {
        "places": "Brunswick",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "8",
    "page": "42",
    "sciName": "Arctostaphylos uva-ursi (L) Spreng ",
    "comName": "red bearberry",
    "dimensions": "24.5 x 20",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "2",
    "page": "49",
    "sciName": "Arenaria serpyllifolia L ",
    "comName": "thyme-leaved sandwort",
    "dimensions": "37.8 x 27.7",
    "samples": [
      {
        "places": "Elliotsville",
        "years": "1895"
      },
      {
        "places": "Bustin's Island",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "13",
    "page": "69",
    "sciName": "Arethusa bulbosa L ",
    "comName": "dragon's-mouth",
    "dimensions": "28 x 18.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Bangor",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Peaks Island",
        "years": "1902"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Exeter",
        "years": "1883"
      }
    ]
  },
  {
    "volume": "12",
    "page": "88",
    "sciName": "Arisaema triphyllum (L) Schott",
    "comName": "Jack-in-the-pulpit",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "77",
    "sciName": "Armoracia rusticana P G Gaertn B Mey & Scherb ",
    "comName": "horse-radish",
    "dimensions": "38.0 x 27.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "4",
    "page": "10",
    "sciName": "Aronia arbutifolia (L) Pers ",
    "comName": "reDChokeberry",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Fayette Ridge",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "7",
    "page": "24",
    "sciName": "Artemisia biennis Willd ",
    "comName": "biennial wormwood",
    "dimensions": "37.2 x 27.5",
    "samples": [
      {
        "places": "Old Orchard Beach",
        "years": "1896"
      },
      {
        "places": "Old Orchard Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "22",
    "sciName": "Artemisia campestris L ",
    "comName": "field wormwood",
    "dimensions": "31.4 x 19.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1887"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "25",
    "sciName": "Artemisia stelleriana Bess ",
    "comName": "beach wormwood",
    "dimensions": "37.9 x 28.2",
    "samples": [
      {
        "places": "Old Orchard Beach",
        "years": "1896"
      },
      {
        "places": "Old Orchard Beach",
        "years": "1898"
      },
      {
        "places": "Fort Popham",
        "years": "1897"
      },
      {
        "places": "Fort Popham",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "7",
    "page": "23",
    "sciName": "Artemisia vulgaris L ",
    "comName": "common wormwood",
    "dimensions": "36.8 x 27.1",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1898"
      },
      {
        "places": "Wells",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "10",
    "page": "55",
    "sciName": "Asarum canadense L ",
    "comName": "Canada wild ginger",
    "dimensions": "29.5 x 22",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "10",
    "page": "43",
    "sciName": "Asclepias exaltata L ",
    "comName": "poke milkweed",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Hiram",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "10",
    "page": "45",
    "sciName": "Asclepias incarnata L ",
    "comName": "swamp milkweed",
    "dimensions": "37.5 x 26.5 ",
    "samples": [
      {
        "places": "Bradley",
        "years": "1880"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "Bradley",
        "years": "1880"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "10",
    "page": "40",
    "sciName": "Asclepias syriaca L ",
    "comName": "common milkweed",
    "dimensions": "31.5 x 25.5 ",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "East Livermore",
        "years": "1898"
      },
      {
        "places": "Hiram",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "3",
    "page": "50",
    "sciName": "Astragalus alpinus L ",
    "comName": "alpine milk-vetch",
    "dimensions": "36.5 x 26.7",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "3",
    "page": "73",
    "sciName": "Astragalus eucosmus B L Robins ",
    "comName": "elegent milk-vetch",
    "dimensions": "38.7 x 28.7",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "3",
    "page": "51",
    "sciName": "Astragalus robbinsii (Oakes) Gray ",
    "comName": "Robbin's milk-vetch",
    "dimensions": "37.4 x 27.7",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "2",
    "page": "37",
    "sciName": "Atocion armeria (L) Raf ",
    "comName": "sweet-William-catchfly",
    "dimensions": "37.3 x 27.6",
    "samples": [
      {
        "places": "Mount Desert",
        "years": "1888"
      }
    ]
  },
  {
    "volume": "10",
    "page": "65",
    "sciName": "Atriplex patula L ",
    "comName": "spearscale orache",
    "dimensions": "36.5 x 25.5",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1891"
      },
      {
        "places": "Sorrento",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Sorrento",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "North Berwick",
        "years": "1898"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "10",
    "page": "68",
    "sciName": "Atriplex prostrata BouchÃ©r ex DC",
    "comName": "hastate-leaved orache",
    "dimensions": "30.3 x 24",
    "samples": [
      {
        "places": "Harpswell",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "9",
    "page": "50",
    "sciName": "Aureolaria pedicularia (L) Raf ",
    "comName": "fern-leaved false foxglove",
    "dimensions": "31.5 x 24",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "49",
    "sciName": "Aureolaria virginica (L) Pennell",
    "comName": "downy false foxglove",
    "dimensions": "37 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "3",
    "page": "35",
    "sciName": "Baptisia tinctoria (L) R Br ex Ait f ",
    "comName": "yellow wild indigo",
    "dimensions": "36.5 x 26.4",
    "samples": [
      {
        "places": "Wells",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "1",
    "page": "79",
    "sciName": "Barbarea stricta Andrz",
    "comName": "upright yellow-rocket",
    "dimensions": "29.1 x 17.4",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "1",
    "page": "78",
    "sciName": "Barbarea vulgaris Ait f",
    "comName": "garden yellow-rocket",
    "dimensions": "30.0 x 20.0",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Castine",
        "years": "1903"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Fairfield",
        "years": "1881"
      },
      {
        "places": "Brunswick",
        "years": "1893"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "10",
    "page": "34",
    "sciName": "Bartonia virginica (L) B S P ",
    "comName": "Virginia screwstem",
    "dimensions": "38.5 x 27.5 ",
    "samples": [
      {
        "places": "Cape Elizabeth",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "5",
    "page": "71",
    "sciName": "Benthamidia florida (L) Spach ",
    "comName": "flowering big-bracted-dogwood",
    "dimensions": "30.5 x 23.1",
    "samples": []
  },
  {
    "volume": "1",
    "page": "41",
    "sciName": "Berberis vulgaris L ",
    "comName": "common barberry",
    "dimensions": "31.1 x 21.7",
    "samples": [
      {
        "places": "Wells",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "1",
    "page": "73",
    "sciName": "Berteroa incana (L) DC ",
    "comName": "hoary false alyssum",
    "dimensions": "37.5 x 28.0",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "12",
    "page": "30",
    "sciName": "Betula alleghaniensis Britt ",
    "comName": "yellow birch",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "29",
    "sciName": "Betula lenta L ",
    "comName": "cherry birch",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Ashland",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "33",
    "sciName": "Betula minor (Tuckerman) Fern ",
    "comName": "dwarf birch",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1893"
      },
      {
        "places": "Strong",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "12",
    "page": "34",
    "sciName": "Betula papyrifera Marsh ",
    "comName": "paper birch",
    "dimensions": "35.5 x 25",
    "samples": [
      {
        "places": "Mt. Katahdin",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "12",
    "page": "31",
    "sciName": "Betula populifolia Marsh ",
    "comName": "gray birch",
    "dimensions": "38.5 x 26.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1895"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "12",
    "page": "35",
    "sciName": "Betula pumila L ",
    "comName": "bog birch",
    "dimensions": "37.5 x 27",
    "samples": []
  },
  {
    "volume": "7",
    "page": "14",
    "sciName": "Bidens beckii Torr ex Spreng",
    "comName": "Beck's water-marigold",
    "dimensions": "39.3 x 27.2",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "13",
    "sciName": "Bidens cernua L ",
    "comName": "nodding beggar-ticks",
    "dimensions": "27.0 x 20.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "12",
    "sciName": "Bidens connata Muhl ex Willd",
    "comName": "purple-stemmed beggar-ticks",
    "dimensions": "37.4 x 27.4",
    "samples": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "11",
    "sciName": "Bidens vulgata Greene / Bidens frondosa L ",
    "comName": "tall beggar-ticks/ Devil's beggar-ticks",
    "dimensions": "37.5 x 27.9",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "1",
    "page": "69",
    "sciName": "Boechera laevigata (Muhl ex Willd) Al-Shehbaz ",
    "comName": "smooth rockcress",
    "dimensions": "38.5 x 28.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "1",
    "page": "72",
    "sciName": "Boechera stricta (Graham) Al-Shehbaz ",
    "comName": "Canada rockcress",
    "dimensions": "37.3 x 27.5",
    "samples": [
      {
        "places": "Ashland",
        "years": "1881"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Oldtown",
        "years": "1880"
      },
      {
        "places": "Oldtown",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "11",
    "page": "61",
    "sciName": "Boehmeria cylindrica (L) Sw ",
    "comName": "small-spiked false nettle",
    "dimensions": "37.5 x 28",
    "samples": [
      {
        "places": "Readfield",
        "years": "1892"
      },
      {
        "places": "Leeds Center",
        "years": "1896"
      },
      {
        "places": "Livermore Falls",
        "years": "1877"
      },
      {
        "places": "Brunswick",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "1",
    "page": "43",
    "sciName": "Brasenia schreberi J F Gmel ",
    "comName": "water-shield",
    "dimensions": "38.0 x 27.9",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1875"
      },
      {
        "places": "Rangeley Village",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1908"
      }
    ]
  },
  {
    "volume": "1",
    "page": "85",
    "sciName": "Brassica nigra (L) WDJ Koch ",
    "comName": "black mustard",
    "dimensions": "37.4 x 27.4",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "10",
    "page": "6",
    "sciName": "Buglossoides arvensis (L) I M Johnson ",
    "comName": "corn-gromwell",
    "dimensions": "39 x 27.5 ",
    "samples": [
      {
        "places": "Portland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "91",
    "sciName": "Cakile edentula (Bigelow) Hook ",
    "comName": "American sea-rocket",
    "dimensions": "37.2 x 27.8 ",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1877"
      },
      {
        "places": "Rockland",
        "years": "1903"
      },
      {
        "places": "Rockland",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "12",
    "page": "91",
    "sciName": "Calla palustris L ",
    "comName": "wilDCalla ",
    "dimensions": "27 x 20",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "5",
    "page": "121",
    "sciName": "Callitriche palustris L ",
    "comName": "vernal water-starwort",
    "dimensions": "25.8 x 16.7",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "13",
    "page": "72",
    "sciName": "Calopogon tuberosus B S P ",
    "comName": "tuberous grass-pink",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Brunswick",
        "years": "1888"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "33",
    "sciName": "Caltha palustris L ",
    "comName": "marsh-marigold",
    "dimensions": "24.6 x 19.7",
    "samples": [
      {
        "places": "Wells",
        "years": "1876"
      },
      {
        "places": "Topsham",
        "years": "1890"
      },
      {
        "places": "Shapleigh",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "13",
    "page": "73",
    "sciName": "Calypso bulbosa (L) Oakes",
    "comName": "fairy-slipper",
    "dimensions": "37.8 x 27.5",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "10",
    "page": "12",
    "sciName": "Calystegia sepium (L) R Br ",
    "comName": "hedge false bindweed",
    "dimensions": "26.3 x 20",
    "samples": []
  },
  {
    "volume": "10",
    "page": "15",
    "sciName": "Calystegia spithamaea (L) Pursh ",
    "comName": "upright false bindweed",
    "dimensions": "26.5 x 20",
    "samples": []
  },
  {
    "volume": "1",
    "page": "74",
    "sciName": "Camelina sativa (L) Crantz ",
    "comName": "large-seeded false flax",
    "dimensions": "37.5 x 28.0",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "8",
    "page": "11",
    "sciName": "Campanula aparinoides Pursh",
    "comName": "march bellflower",
    "dimensions": "38.5 x 27",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Bradley",
        "years": "1891"
      },
      {
        "places": "Leeds",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "8",
    "page": "9",
    "sciName": "Campanula rotundifolia L ",
    "comName": "Scotch bellflower",
    "dimensions": "27.3 x 19",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1891"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "11",
    "page": "54",
    "sciName": "Cannabis sativa L ",
    "comName": "hemp",
    "dimensions": "34 x 26.5",
    "samples": [
      {
        "places": "Farmington",
        "years": "1882"
      },
      {
        "places": "Brunswick",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "1",
    "page": "59",
    "sciName": "Capnoides sempervirens (L) Borkh ",
    "comName": "pink-corydalis",
    "dimensions": "37.4 x 28.1",
    "samples": [
      {
        "places": "Orono",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "86",
    "sciName": "Capsella bursa-pastoris (L) Medik ",
    "comName": "shepherd's purse",
    "dimensions": "37.8 x 23.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "1",
    "page": "63",
    "sciName": "Cardamine bellidifolia L ",
    "comName": "alpine bitter-cress",
    "dimensions": "39.0 x 28.1",
    "samples": [
      {
        "places": "Mt. Katahdin",
        "years": "1900"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "1",
    "page": "60",
    "sciName": "Cardamine diphylla (Michx) Wood",
    "comName": "two-leaved toothwort",
    "dimensions": "38.8 x 28.0",
    "samples": [
      {
        "places": "Gilead",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "1",
    "page": "61",
    "sciName": "Cardamine diphylla (Michx) Wood ",
    "comName": "two-leaved toothwort",
    "dimensions": "37.8 x 27.4",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1879"
      },
      {
        "places": "Chesterville",
        "years": "1879"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Rangeley",
        "years": "1897"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "1",
    "page": "62",
    "sciName": "Cardamine douglassii Britt ",
    "comName": "pink bitter-cress",
    "dimensions": "25.8 x 19.7",
    "samples": [
      {
        "places": "Wells",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "1",
    "page": "64",
    "sciName": "Cardamine hirsuta L ",
    "comName": "hairy bitter-cress",
    "dimensions": "37.7 x 27.0",
    "samples": [
      {
        "places": "Great Diamond Island",
        "years": "1888"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "65",
    "sciName": "Cardamine parviflora L ",
    "comName": "small-flowered bitter-cress",
    "dimensions": "37.5 x 27.2",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Great Diamond Island",
        "years": "1888"
      }
    ]
  },
  {
    "volume": "1",
    "page": "68",
    "sciName": "Cardamine pensylvanica Muhl ex Willd",
    "comName": "Pennsylvanian bitter-cress",
    "dimensions": "38.3 x 28.0",
    "samples": [
      {
        "places": "Ogunquit",
        "years": "1898"
      },
      {
        "places": "Shapleigh",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "7",
    "page": "79",
    "sciName": "Carduus acanthoides L ",
    "comName": "spiny plumeless-thistle",
    "dimensions": "37.6 x 27.3",
    "samples": [
      {
        "places": "Fayette",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "12",
    "page": "25",
    "sciName": "Carpinus caroliniana Walt ",
    "comName": "American hornbeam",
    "dimensions": "38.5 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "5",
    "page": "51",
    "sciName": "Carum carvi L ",
    "comName": "caraway",
    "dimensions": "37.2 x 27.4",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "12",
    "page": "5",
    "sciName": "Carya cordiformis (Wangenh) K Koch",
    "comName": "bitternut hickory",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "North Brunswick",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "12",
    "page": "3",
    "sciName": "Carya tomentosa (Poir in Lam) Nutt ",
    "comName": "mockernut hickory",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1875"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "North Brunswick",
        "years": "1878"
      },
      {
        "places": "North Brunswick",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "12",
    "page": "18",
    "sciName": "Castanea sativa P Mill ",
    "comName": "Spanish chestnut",
    "dimensions": "38.5 x 28",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1878"
      },
      {
        "places": "Cumberland",
        "years": "1875"
      },
      {
        "places": "Rumford",
        "years": "1908"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Falmouth",
        "years": "1806"
      }
    ]
  },
  {
    "volume": "9",
    "page": "52",
    "sciName": "Castilleja septentrionalis Lindl ",
    "comName": "northern painted-cup",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "1",
    "page": "42",
    "sciName": "Caulophyllum thalictroides Michx ",
    "comName": "blue cohosh",
    "dimensions": "38.0 x 27.5",
    "samples": [
      {
        "places": "Fayette",
        "years": "1875"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Rangeley Lakes",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "3",
    "page": "12",
    "sciName": "Celastrus scandens L ",
    "comName": "American bittersweet",
    "dimensions": "33.8 x 24.5",
    "samples": [
      {
        "places": "Farmington",
        "years": "1875"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Orono",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "7",
    "page": "39",
    "sciName": "Centaurea nigra L ",
    "comName": "black knapweed",
    "dimensions": "37.0 x 27.7",
    "samples": [
      {
        "places": "Machias",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "6",
    "page": "11",
    "sciName": "Cephalanthalus occidentalis L ",
    "comName": "common buttonbrush",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Kents Hill",
        "years": "1894"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1897"
      },
      {
        "places": "York",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "2",
    "page": "56",
    "sciName": "Cerastium arvense L",
    "comName": "fielDChickweed",
    "dimensions": "28.9 x 26.4",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "2",
    "page": "62",
    "sciName": "Cerastium arvense L ",
    "comName": "fielDChickweed",
    "dimensions": "37.5 x 28.0",
    "samples": [
      {
        "places": "Cape Elizabeth",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "2",
    "page": "61",
    "sciName": "Cerastium fontanum Baumg ",
    "comName": "mouse-ear chickweed",
    "dimensions": "37.4 x 25.5 ",
    "samples": []
  },
  {
    "volume": "11",
    "page": "52",
    "sciName": "Ceratophyllum demersum L ",
    "comName": "common hornwort",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Readfield",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "45",
    "sciName": "Chamaedaphne calyculataÂ (L) Moench",
    "comName": "leatherleaf",
    "dimensions": "27 x 19",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wayne Pond",
        "years": "1879"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "68",
    "sciName": "Chamaepericlymenum canadense (L) Aschers & Graebn ",
    "comName": "Canada dwarf-dogwood",
    "dimensions": "26.8 x 19.9",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "5",
    "page": "15",
    "sciName": "Chamerion angustifolium (L) Holub",
    "comName": "narrow-leaved fireweed",
    "dimensions": "25.5 x 20.2",
    "samples": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "56",
    "sciName": "Chelidonium majus L ",
    "comName": "greater celandine",
    "dimensions": "37.3 x 27.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "East Livermore",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "9",
    "page": "29",
    "sciName": "Chelone glabra L ",
    "comName": "white turtlehead",
    "dimensions": "28.5 x 16.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "10",
    "page": "59",
    "sciName": "Chenopodium album L ",
    "comName": "white goosefoot",
    "dimensions": "29.5 x 24",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "10",
    "page": "63",
    "sciName": "Chenopodium capitatum (L) Aschers ",
    "comName": "strawberry-blite",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Kingsbury Plantation",
        "years": "1880"
      },
      {
        "places": "Chesterville",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "10",
    "page": "58",
    "sciName": "Chenopodium leptophyllum (Moq) Nutt ex S Wats ",
    "comName": "narrow-leaved goosefoot",
    "dimensions": "38.3 x 27.7",
    "samples": [
      {
        "places": "North Berwick",
        "years": "1896"
      },
      {
        "places": "Wells Beach",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "10",
    "page": "61",
    "sciName": "Chenopodium murale L ",
    "comName": "nettle-leaved goosefoot",
    "dimensions": "29.2 x 24",
    "samples": [
      {
        "places": "Cundy's Harbor",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "10",
    "page": "57",
    "sciName": "Chenopodium polyspermum L ",
    "comName": "many-seeded goosefoot",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "North Berwick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "10",
    "page": "64",
    "sciName": "Chenopodium rubrum L ",
    "comName": "red goosefoot",
    "dimensions": "37.2 x 27",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "8",
    "page": "72",
    "sciName": "Chimaphila umbellata (L) W Bart ",
    "comName": "noble prince's-pine",
    "dimensions": "27 x 19.5 ",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Orono",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "4",
    "page": "106",
    "sciName": "Chrysoplenium americanum Schwein ex Hook",
    "comName": "golden-saxifrage",
    "dimensions": "33.7 x 27.0",
    "samples": [
      {
        "places": "Orono",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "7",
    "page": "49",
    "sciName": "Cichorium intubys L ",
    "comName": "chicory",
    "dimensions": "38.0 x 28.0",
    "samples": [
      {
        "places": "Houlton",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "York",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "5",
    "page": "53",
    "sciName": "Cicuta bulbifera L ",
    "comName": "bulblet-bearing water-hemlock",
    "dimensions": "37.5 x 27.1",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "52",
    "sciName": "Cicuta maculata L ",
    "comName": "spotted water-hemlock",
    "dimensions": "37.6 x 27.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "14",
    "sciName": "Circaea alpina L ",
    "comName": "small enchanter's-nightshade",
    "dimensions": "26.8 x 19.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Caribou",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "5",
    "page": "13",
    "sciName": "Circaea canadensis (L) Hill ",
    "comName": "broad-leaved enchanter's-nightshade",
    "dimensions": "30.5 x 23.9",
    "samples": [
      {
        "places": "Cushing Island",
        "years": "1876"
      },
      {
        "places": "Northport",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "44ab",
    "sciName": "Cirsium arvense (L) Scop ",
    "comName": "creeping thistle",
    "dimensions": "25.9 x 14.7/26.0 x 19.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "7",
    "page": "41",
    "sciName": "Cirsium discolor (Muhl ex Willd) Spreng ",
    "comName": "field thistle",
    "dimensions": "38.0 x 27.5",
    "samples": [
      {
        "places": "Dixfield",
        "years": "1890"
      },
      {
        "places": "Fayette",
        "years": "1894"
      },
      {
        "places": "Dixfield",
        "years": "1890"
      }
    ]
  },
  {
    "volume": "7",
    "page": "42",
    "sciName": "Cirsium muticum Michx ",
    "comName": "swamp thistle",
    "dimensions": "26.5 x 20.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Fayette",
        "years": "1871"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "7",
    "page": "43",
    "sciName": "Cirsium pumilum (Nutt) Spreng ",
    "comName": "marsh thistle",
    "dimensions": "34.0 x 24.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Fayette",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "7",
    "page": "40",
    "sciName": "Cirsium vulgare (Savi) Ten ",
    "comName": "common thistle",
    "dimensions": "25.0 x 20.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Fayette",
        "years": "1875"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1892"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "",
    "page": "1",
    "sciName": "Clematis occidentalis (Hornem) DC ",
    "comName": "purple virgin's-bower",
    "dimensions": "38.1 x 27.1",
    "samples": [
      {
        "places": "Orono",
        "years": "1881"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "1",
    "page": "3",
    "sciName": "Clematis virginiana L ",
    "comName": "Virginia virgin's-bower",
    "dimensions": "38.1 x 29.1",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "8",
    "page": "50",
    "sciName": "Clethra alnifolia L ",
    "comName": "coastal sweet-pepperbush",
    "dimensions": "37.3 x 27.5 ",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "York",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "9",
    "page": "78",
    "sciName": "Clinopodium vulgare L ",
    "comName": "wild basil",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Van Buren",
        "years": "1880"
      },
      {
        "places": "Caribou",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "14",
    "page": "26",
    "sciName": "Clintonia borealis (Ait) Raf",
    "comName": "yellow bluebead-lily",
    "dimensions": "27 x 20",
    "samples": []
  },
  {
    "volume": "13",
    "page": "49",
    "sciName": "Coeloglossum viride (L) Hartman",
    "comName": "long-bracted green orchid",
    "dimensions": "37 x 27.5",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "11",
    "page": "39",
    "sciName": "Comandra umbellata (L) Nutt ",
    "comName": "bastard-toadflax",
    "dimensions": "36.5 x 25.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "57",
    "sciName": "Comarum palustre L ",
    "comName": "marsh-cinquefoil",
    "dimensions": "25.0 x 17.1",
    "samples": [
      {
        "places": "Fayette",
        "years": "1871"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "28",
    "sciName": "Comptonia peregrina (L) Coult ",
    "comName": "sweet-fern",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "5",
    "page": "46",
    "sciName": "Conioselinum chinense (L ) B S P ",
    "comName": "Chinese hemlock-parsley",
    "dimensions": "37.1 x 27.3",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Orono",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "5",
    "page": "111",
    "sciName": "Conioselinum chinense (L) B S P ",
    "comName": "Chinese hemlock-parsley",
    "dimensions": "36.8 x 25.6",
    "samples": []
  },
  {
    "volume": "5",
    "page": "59",
    "sciName": "Conium maculatum L ",
    "comName": "poison-hemlock",
    "dimensions": "37.0 x 27.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Great Diamond Island",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "22",
    "sciName": "Conophilis americana (L) Wallr. f ",
    "comName": "American squaw-root",
    "dimensions": "37 x 27.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "East Parsonsfield",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "10",
    "page": "11",
    "sciName": "Convolvulus arvensis L ",
    "comName": "field bindweed",
    "dimensions": "35.5 x 27",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1894"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "34",
    "sciName": "Coptis trifolia (L) Salisb ",
    "comName": "three-leaved goldthread",
    "dimensions": "37.3 x 27.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Topsham",
        "years": "1870"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "13",
    "page": "81",
    "sciName": "Corallorhiza maculata Raf ",
    "comName": "spotteDCoral-root",
    "dimensions": "27 x 19.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Livermore",
        "years": "1875"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "13",
    "page": "80",
    "sciName": "Corallorhiza odontorhiza Poir ",
    "comName": "fall coral-root",
    "dimensions": "34 x 23",
    "samples": [
      {
        "places": "Livermore",
        "years": "1875"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "13",
    "page": "79",
    "sciName": "Corallorhiza trifida Chatelain",
    "comName": "early coral-root",
    "dimensions": "26.8 x 19.3",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Rangeley",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "11",
    "page": "51",
    "sciName": "Corema conradii (Torr) Torr ex Loud ",
    "comName": "broom crowberry",
    "dimensions": "27 x 24",
    "samples": [
      {
        "places": "Ogunquit",
        "years": "1879"
      },
      {
        "places": "Gun Point Harpswell",
        "years": "1888"
      },
      {
        "places": "Isle au Haut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "12",
    "page": "22",
    "sciName": "Corylus americana Walt ",
    "comName": "American hazlenut ",
    "dimensions": "34.5 x 25",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "23",
    "sciName": "Corylus cornuta Marsh ",
    "comName": "beaked hazlenut ",
    "dimensions": "30.5 x 16.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "4",
    "page": "88",
    "sciName": "Crataegus crus-galli L ",
    "comName": "cockspur hawthorn",
    "dimensions": "26.0 x 18.6",
    "samples": [
      {
        "places": "Mattawamkeag",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "4",
    "page": "85",
    "sciName": "Crataegus macracantha Lodd ex Loud",
    "comName": "scarlet hawthorn",
    "dimensions": "38.0 x 25.8",
    "samples": [
      {
        "places": "Orono",
        "years": "1881"
      },
      {
        "places": "Brunswick",
        "years": "1899"
      },
      {
        "places": "Brunswick",
        "years": "1897"
      },
      {
        "places": "Southport",
        "years": "1891"
      },
      {
        "places": "Mattawamkeag",
        "years": "1881"
      },
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "Hersey",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "4",
    "page": "84",
    "sciName": "Crataegus monogyna Jacq ",
    "comName": "one-seeded hawthorn",
    "dimensions": "38.0 x 27.2 ",
    "samples": [
      {
        "places": "North Lubec",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "4",
    "page": "89",
    "sciName": "Crateagus macrosperma Ashe",
    "comName": "large-seeded hawthorn",
    "dimensions": "37.4 x 26.5",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "1",
    "page": "93",
    "sciName": "Crocanthemum canadense (L) Britt ",
    "comName": "Canada frostweed",
    "dimensions": "33.7 x 26.9",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "5",
    "page": "55",
    "sciName": "Cryptotaenia canadensis (L) DC ",
    "comName": "Canada honewort",
    "dimensions": "38.5 x 28.0",
    "samples": [
      {
        "places": "Skowhegan",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "10",
    "page": "18",
    "sciName": "Cuscuta europaea L ",
    "comName": "greater dodder",
    "dimensions": "37.7 x 27.3 ",
    "samples": [
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "10",
    "page": "17",
    "sciName": "Cuscuta gronovii Willd ex J A Schultes",
    "comName": "common dodder",
    "dimensions": "33.7 x 22",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "10",
    "page": "48",
    "sciName": "Cynanchum louiseae Kartesz & Gandhi",
    "comName": "black swallowwort",
    "dimensions": "38.5 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1906"
      }
    ]
  },
  {
    "volume": "10",
    "page": "10",
    "sciName": "Cynoglossum virginianum L ",
    "comName": "wild hound's tongue",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Chesterville",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "13",
    "page": "86",
    "sciName": "Cypripedium acaule Ait",
    "comName": "pink lady's-slipper",
    "dimensions": "32.5 x 23",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "Patten",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "87",
    "sciName": "Cypripedium acaule Ait ",
    "comName": "pink lady's-slipper",
    "dimensions": "36.5 x 26.5",
    "samples": [
      {
        "places": "Fayette",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "8",
    "page": "1b",
    "sciName": "Cypripedium parviflorum Salisb ",
    "comName": "yellow lady's-slipper ",
    "dimensions": "36 x 26",
    "samples": [
      {
        "places": "Livermore",
        "years": "1878"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Exeter",
        "years": "1880"
      },
      {
        "places": "Livermore",
        "years": "1876"
      },
      {
        "places": "Fayette",
        "years": "1877"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Patten",
        "years": "1880"
      },
      {
        "places": "Orono",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "13",
    "page": "85",
    "sciName": "Cypripedium reginae Walt ",
    "comName": "showy lady's-slipper",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Caribou",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "4",
    "page": "59",
    "sciName": "Dasiphora floribunda Raf ",
    "comName": "shrubby-cinquefoil",
    "dimensions": "38.3 x 27.9",
    "samples": [
      {
        "places": "North Wayne Pond",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "10",
    "page": "25",
    "sciName": "Datura stramonium L ",
    "comName": "thorn-apple",
    "dimensions": "31 x 23.5",
    "samples": []
  },
  {
    "volume": "5",
    "page": "41",
    "sciName": "Daucus carota L ",
    "comName": "wilDCarrot",
    "dimensions": "37.9 x 27.1",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "5",
    "page": "35A",
    "sciName": "Decodon verticillatus (L) Ell ",
    "comName": "swamp loosestrife",
    "dimensions": "38.0 x 27.5",
    "samples": [
      {
        "places": "North Wayne Pond",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "3",
    "page": "58",
    "sciName": "Desmodium canadense (L) DC ",
    "comName": "showy trick-trefoil",
    "dimensions": "26.8 x 16.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Lisbon Falls",
        "years": "1904"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Livermore Falls",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "3",
    "page": "70",
    "sciName": "Desmodium canadense DC ",
    "comName": "showy trick-trefoil",
    "dimensions": "38.2 x 26.5",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "3",
    "page": "57",
    "sciName": "Desmodium paniculatum (L) DC ",
    "comName": "panicled tick-trefoil",
    "dimensions": "37.0 x 27.1",
    "samples": [
      {
        "places": "West Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "2",
    "page": "35",
    "sciName": "Dianthus deltoides L ",
    "comName": "maiden pink",
    "dimensions": "38.0 x 27.3",
    "samples": [
      {
        "places": "Bethel",
        "years": "1897"
      },
      {
        "places": "Brunswick",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "8",
    "page": "58",
    "sciName": "Diapensia lapponica L ",
    "comName": "cushion-plant",
    "dimensions": "38.8 x 25.3",
    "samples": [
      {
        "places": "Saddleback Mountain",
        "years": "1894"
      },
      {
        "places": "Mount Katahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "1",
    "page": "58",
    "sciName": "Dicentra cucullaria (L) Bernh ",
    "comName": "Dutchman's-breeches",
    "dimensions": "37.7 x 27.2",
    "samples": [
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "5",
    "page": "91",
    "sciName": "Diervilla lonicera P Mill ",
    "comName": "bush-honeysuckle",
    "dimensions": "37.1 x 27.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1898"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "11",
    "page": "38",
    "sciName": "Dirca palustris L ",
    "comName": "eastern leatherwood",
    "dimensions": "29 x 26",
    "samples": [
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "6",
    "page": "103",
    "sciName": "Doellingeria umbellata (P Mill) Nees",
    "comName": "tall white-aster",
    "dimensions": "37.5 x 27.6",
    "samples": []
  },
  {
    "volume": "6",
    "page": "62",
    "sciName": "Doellingeria umbellata (P Mill) Nees ",
    "comName": "tall white-aster",
    "dimensions": "37.6 x 27.3",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1875"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "4",
    "page": "52",
    "sciName": "Drymocallis arguta (Pursh) Rydb ",
    "comName": "tall wood-beauty",
    "dimensions": "37.0 x 26.5",
    "samples": [
      {
        "places": "Waterville",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "4",
    "page": "53",
    "sciName": "Drymocallis arguta Rydb ",
    "comName": "tall wood-beauty",
    "dimensions": "34.5 x 23.3",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "10",
    "page": "62",
    "sciName": "Dysphania cristata (F Muell) Mosyakin & Clemants ",
    "comName": "crested glandular-goosefoot",
    "dimensions": "38.5 x 28",
    "samples": [
      {
        "places": "North Berwick",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "7",
    "page": "6",
    "sciName": "Echinacea pallida (Nutt) Nutt ",
    "comName": "pale purple coneflower",
    "dimensions": "38.4 x 26.8",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "5",
    "page": "37",
    "sciName": "Echinocystis labata (Michx) Torr & Gray ",
    "comName": "wilDCucumber",
    "dimensions": "36.7 x 26.7",
    "samples": []
  },
  {
    "volume": "10",
    "page": "1",
    "sciName": "Echium vulgare L ",
    "comName": "common viper's-bugloss",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1891"
      },
      {
        "places": "Farmington",
        "years": "1888"
      },
      {
        "places": "Farmington",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "2",
    "page": "75",
    "sciName": "Elatine americana Pursh ",
    "comName": "American waterwort",
    "dimensions": "37.1 x 27.4",
    "samples": [
      {
        "places": "Mexico",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "13",
    "page": "44",
    "sciName": "Elodea canadensis Michx ",
    "comName": "common waterweed",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Androscoggin Lake",
        "years": "1894"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "11",
    "page": "50",
    "sciName": "Empetrum nigrum L ",
    "comName": "black crowberry",
    "dimensions": "29.5 x 26",
    "samples": [
      {
        "places": "Mount Desert",
        "years": "1891"
      },
      {
        "places": "Isle au Haut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "9",
    "page": "21",
    "sciName": "Epifagus virginiana (L) W Bart",
    "comName": "beech-drops",
    "dimensions": "25 x 20",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "43",
    "sciName": "Epigaea repens L ",
    "comName": "trailing-arbutus",
    "dimensions": "37.5 x 27.5 ",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1894"
      },
      {
        "places": "East Livermore",
        "years": "1906"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Topsham",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "5",
    "page": "20",
    "sciName": "Epilobium cilatum Raf ",
    "comName": "fringed willow-herb",
    "dimensions": "23.8 x 28.4",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "5",
    "page": "21",
    "sciName": "Epilobium coloratum Biehler ",
    "comName": "eastern willow-herb",
    "dimensions": "37.7 x 27.7",
    "samples": [
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "19",
    "sciName": "Epilobium leptophyllum Raf ",
    "comName": "bog willow-herb",
    "dimensions": "33.5 x 28.0 ",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "5",
    "page": "16",
    "sciName": "Epilobium palustre L ",
    "comName": "marsh willow-herb",
    "dimensions": "30.4 x 24.7",
    "samples": [
      {
        "places": "Harpswell",
        "years": "1876"
      },
      {
        "places": "Caribou",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Harpswell",
        "years": "1876"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Harpswell",
        "years": "1876"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "32",
    "sciName": "Erechtites hieraciifolius (L) Raf ",
    "comName": "American burnweed",
    "dimensions": "37.6 x 27.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Caribou",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "6",
    "page": "108",
    "sciName": "Erigeron acris L ",
    "comName": "bitter fleabane",
    "dimensions": "37.0 x 27.0",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "6",
    "page": "59",
    "sciName": "Erigeron annuus (L) Pers ",
    "comName": "annual fleabane",
    "dimensions": "29.7 x 26.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Fayette Ridge",
        "years": "1876"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "6",
    "page": "56",
    "sciName": "Erigeron canadensis L ",
    "comName": "Canada fleabane",
    "dimensions": "37.8 x 28.0",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Lubeck",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "6",
    "page": "50",
    "sciName": "Erigeron hyssopifolius Michx ",
    "comName": "hyssop-leaved fleabane",
    "dimensions": "37.7 x 27.5",
    "samples": [
      {
        "places": "Dover",
        "years": "1891"
      },
      {
        "places": "Dover",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "6",
    "page": "58",
    "sciName": "Erigeron philadelphicus L ",
    "comName": "Philadelphia fleabane",
    "dimensions": "30.8 x 24.4",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "East Livermore",
        "years": "1876"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "6",
    "page": "57",
    "sciName": "Erigeron pulchellus Michx ",
    "comName": "Robin's plaintain fleabane",
    "dimensions": "31.0 x 24.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "6",
    "page": "60",
    "sciName": "Erigeron strigosus Muhl ex Willd",
    "comName": "rough fleabane",
    "dimensions": "31.7 x 24.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "14",
    "page": "71",
    "sciName": "Eriocaulon aquaticum (Hill) Duce",
    "comName": "seven-angled pipewort",
    "dimensions": "27 x 19.5",
    "samples": []
  },
  {
    "volume": "3",
    "page": "5",
    "sciName": "Erodium cicutarium (L) L'HÃ©r ",
    "comName": "red-stemmed stork's-bill",
    "dimensions": "36.4 x 25.7",
    "samples": [
      {
        "places": "East Wilton",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "1",
    "page": "81",
    "sciName": "Erysimum cheiranthoides L ",
    "comName": "wormseed wallflower",
    "dimensions": "36.5 x 26.5",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "14",
    "page": "38",
    "sciName": "Erythronium americanum Ker-Gawl ",
    "comName": "American trout-lily",
    "dimensions": "25.5 x 19",
    "samples": []
  },
  {
    "volume": "6",
    "page": "20",
    "sciName": "Eupatorium perfoliatum L ",
    "comName": "boneset thoroughwort",
    "dimensions": "35.5 x 27.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1889"
      }
    ]
  },
  {
    "volume": "11",
    "page": "42",
    "sciName": "Euphorbia glyptosperma Engelm ",
    "comName": "rib-seeded sandmat",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "Rumford Center",
        "years": "1896"
      },
      {
        "places": "Phillips",
        "years": "1896"
      },
      {
        "places": "Strong",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "11",
    "page": "47",
    "sciName": "Euphorbia helioscopia L ",
    "comName": "sun spurge",
    "dimensions": "36.5 x 27",
    "samples": [
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Cape Small Point",
        "years": "1890"
      }
    ]
  },
  {
    "volume": "11",
    "page": "44",
    "sciName": "Euphorbia maculata L ",
    "comName": "spotted sandmat",
    "dimensions": "36.5 x 27",
    "samples": [
      {
        "places": "North Berwick",
        "years": "1891"
      },
      {
        "places": "Brunswick",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "11",
    "page": "48",
    "sciName": "Euphorbia peplus L ",
    "comName": "petty spurge",
    "dimensions": "37 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "11",
    "page": "41",
    "sciName": "Euphorbia polygonifolia L ",
    "comName": "Seaside sandmat",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "York Beach",
        "years": "1879"
      },
      {
        "places": "Winnegance",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "8",
    "page": "40",
    "sciName": "Euphorbia serpyllifolia Pers ",
    "comName": "matted sandmat",
    "dimensions": "23.2 x 17",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "11",
    "page": "45",
    "sciName": "Euphorbia vermiculata Raf ",
    "comName": "hairy sandmat",
    "dimensions": "39 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1907"
      },
      {
        "places": "Bethel",
        "years": "1908"
      },
      {
        "places": "North Berwick",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "9",
    "page": "53",
    "sciName": "Euphrasia nemorosa (Pers) Wallr ",
    "comName": "common eyebright",
    "dimensions": "37 x 28",
    "samples": [
      {
        "places": "Mount Desert",
        "years": "1888"
      },
      {
        "places": "Mount Desert",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "9",
    "page": "51",
    "sciName": "Euphrasia randii B L Robins ",
    "comName": "Rand's eyebright",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "6",
    "page": "25",
    "sciName": "Eurybia divaricata (L) Nesom",
    "comName": "white wood-aster",
    "dimensions": "37.2 x 26.9",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "6",
    "page": "26",
    "sciName": "Eurybia macrophylla (L) Cass ",
    "comName": "large-leaved wood-aster",
    "dimensions": "38.0 x 27.7",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Hiram",
        "years": "1901"
      },
      {
        "places": "East Livermore",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "6",
    "page": "28",
    "sciName": "Eurybia radula (Ait) Nesom ",
    "comName": "rough wood-aster",
    "dimensions": "37.5 x 28.0",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Aroostook",
        "years": "1882"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "6",
    "page": "89",
    "sciName": "Eurybia radula Nesom ",
    "comName": "rough wood-aster",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Sorrento",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "6",
    "page": "88",
    "sciName": "Euthamia graminifolia (L) Nutt ",
    "comName": "common grass-leaved goldenrod",
    "dimensions": "37.7 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Fayette",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "Gilead"
      },
      {
        "places": "1893",
        "years": "Hiram"
      }
    ]
  },
  {
    "volume": "6",
    "page": "19",
    "sciName": "Eutrochium purpureum (L) E E Lamont var. purpureum ",
    "comName": "purple Joe-Pye weed",
    "dimensions": "31.0 x 26.8",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "12",
    "page": "19",
    "sciName": "Fagus grandifolia Ehrh ",
    "comName": "American beech",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "11",
    "page": "32",
    "sciName": "Fallopia cilinodis (Michx) Holub",
    "comName": "fringed bindweed",
    "dimensions": "37.5 x 25.5",
    "samples": [
      {
        "places": "York",
        "years": "1879"
      },
      {
        "places": "York",
        "years": "1879"
      },
      {
        "places": "Fayette",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "11",
    "page": "31",
    "sciName": "Fallopia convolvulus A Love",
    "comName": "black bindweed",
    "dimensions": "36.5 x 27",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1878"
      },
      {
        "places": "West Bath",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "11",
    "page": "34",
    "sciName": "Fallopia scandens (L) Holub",
    "comName": "climbing bindweed",
    "dimensions": "37 x 26",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Litchfield",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "4",
    "page": "50",
    "sciName": "Fragaria vesca L ",
    "comName": "woodland strawberry",
    "dimensions": "24.0 x 16.6",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1897"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "4",
    "page": "48",
    "sciName": "Fragaria virginiana Duchesne ",
    "comName": "common strawberry",
    "dimensions": "26.7 x 20.2",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "10",
    "page": "49",
    "sciName": "Fraxinus americana L ",
    "comName": "white ash",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "10",
    "page": "53",
    "sciName": "Fraxinus nigra Marsh ",
    "comName": "black ash",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "10",
    "page": "50",
    "sciName": "Fraxinus pennsylvanica Marsh ",
    "comName": "green ash",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1877"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Orono",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "13",
    "page": "46",
    "sciName": "Galearis spectabilis (L) Raf ",
    "comName": "showy orchid",
    "dimensions": "37.5 x 28",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "9",
    "page": "88",
    "sciName": "Galeopsis tetrahit L ",
    "comName": "brittle-stemmed hemp-nettle",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "75",
    "sciName": "Galinsoga parviflora Cav ",
    "comName": "lesser quickweed",
    "dimensions": "37.8 x 27.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1905"
      }
    ]
  },
  {
    "volume": "6",
    "page": "2",
    "sciName": "Galium asprellum Michx ",
    "comName": "rough bedstraw",
    "dimensions": "30.3 x 24.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1892"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "6",
    "page": "10",
    "sciName": "Galium boreale L ",
    "comName": "northern bedstraw",
    "dimensions": "38.9 x 27.5",
    "samples": [
      {
        "places": "Mt. Katahdin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "6",
    "page": "9",
    "sciName": "Galium circaezans Michx ",
    "comName": "forest licorice bedstraw",
    "dimensions": "37.2 x 27.4",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "6",
    "page": "4",
    "sciName": "Galium labradoricum (Wieg) Wieg ",
    "comName": "northern bog bedstraw",
    "dimensions": "37.7 x 27.7",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "6",
    "page": "8",
    "sciName": "Galium lanceolatum Torr ",
    "comName": "lance-leaved licorice bedstraw",
    "dimensions": "38.1 x 27.8 ",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Woodstock",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "6",
    "page": "1",
    "sciName": "Galium mollugo L ",
    "comName": "whorled bedstraw",
    "dimensions": "37.4 x 27.5",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Bustin's Island",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "6",
    "page": "5",
    "sciName": "Galium palustre L ",
    "comName": "marsh bedstraw",
    "dimensions": "37.7 x 26.6",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "6",
    "page": "3",
    "sciName": "Galium trifidum L ",
    "comName": "three-petaled bedstraw",
    "dimensions": "18.0 x 17.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "6",
    "page": "7",
    "sciName": "Galium triflorum Michx ",
    "comName": "fragrant bedstraw",
    "dimensions": "37.2 x 27.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Kents Hill",
        "years": "1892"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "109",
    "sciName": "Gamochaeta purpurea (L) Cabrera ",
    "comName": "purple cudweed",
    "dimensions": "36.9 x 26.8",
    "samples": [
      {
        "places": "North Berwick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "8",
    "page": "41",
    "sciName": "Gaultheria procumbens L ",
    "comName": "eastern spicy-wintergreen",
    "dimensions": "26.5 x 17.7 ",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Fayette Ridge",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Gilead",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "8",
    "page": "13",
    "sciName": "Gaylussacia baccata (Wagenh) K Koch",
    "comName": "black huckleberry",
    "dimensions": "30.5 x 23.5",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "West Bath",
        "years": "1877"
      },
      {
        "places": "West Bath",
        "years": "1885"
      },
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "12",
    "sciName": "Gaylussacia bigeloviana (Fern) Sorrie & Weakley",
    "comName": "dwarf huckleberry",
    "dimensions": "38 x 27.3",
    "samples": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Bar Harbor",
        "years": "1891"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Bangor",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "3",
    "page": "36",
    "sciName": "Genista tinctoria L ",
    "comName": "dyer's greenweed",
    "dimensions": "33.0 x 24.9",
    "samples": [
      {
        "places": "Wells",
        "years": "1877"
      },
      {
        "places": "Kennebunkport",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "10",
    "page": "29",
    "sciName": "Gentiana andrewsii Griseb ",
    "comName": "Andrew's bottle gentian",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1896"
      },
      {
        "places": "South Poland",
        "years": "1896"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "10",
    "page": "30",
    "sciName": "Gentiana linearis Froel ",
    "comName": "narrow-leaved gentian",
    "dimensions": "37.3 x 27.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "10",
    "page": "33",
    "sciName": "Gentianella amarella (L) Boerner",
    "comName": "northern dwarf-gentian",
    "dimensions": "36.4 x 27",
    "samples": [
      {
        "places": "Houlton",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "10",
    "page": "27",
    "sciName": "Gentianopsis crinita (Froel) Ma",
    "comName": "greater fringed-gentian",
    "dimensions": "36.3 x 25.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Freeport",
        "years": "1904"
      },
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "11",
    "page": "40",
    "sciName": "Geocaulon lividum (Richards) Fern ",
    "comName": "false toadflax",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "Franklin",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "3",
    "page": "4",
    "sciName": "Geranium bicknelii Britt ",
    "comName": "northern crane's-bill",
    "dimensions": "37.2 x 27.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1902"
      },
      {
        "places": "Harding",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "3",
    "page": "3",
    "sciName": "Geranium carolinianum L ",
    "comName": "Carolina crane's-bill",
    "dimensions": "33.9 x 24.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "West Bath",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "3",
    "page": "1",
    "sciName": "Geranium maculatum L ",
    "comName": "spotteDCrane's-bill",
    "dimensions": "38.8 x 27.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Castine",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "3",
    "page": "2",
    "sciName": "Geranium robertianum L ",
    "comName": "mountain crane's-bill",
    "dimensions": "37.6 x 27.3",
    "samples": [
      {
        "places": "Squirrel Island",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "45",
    "sciName": "Geum aleppicum Jacq ",
    "comName": "yellow avens",
    "dimensions": "26.5 x 18.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "West Bath",
        "years": "1892"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Fayette",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "4",
    "page": "40",
    "sciName": "Geum canadense Jacq ",
    "comName": "white avens",
    "dimensions": "37.3 x 26.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Harpswell",
        "years": "1876"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "43",
    "sciName": "Geum macrophyllum Willd ",
    "comName": "large-leaved avens",
    "dimensions": "37.5 x 27.3",
    "samples": [
      {
        "places": "Modawaska Township",
        "years": "1881"
      },
      {
        "places": "Brunswick",
        "years": "1904"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "4",
    "page": "47",
    "sciName": "Geum peckii Pursh ",
    "comName": "White Mountain avens",
    "dimensions": "26.8 x 19.5",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "4",
    "page": "46",
    "sciName": "Geum rivale L ",
    "comName": "water avens",
    "dimensions": "26.5 x 17.4",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1871"
      },
      {
        "places": "Orono",
        "years": "1882"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "41",
    "sciName": "Geum virginianum L ",
    "comName": "cream-colored avens",
    "dimensions": "36.1 x 26.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Chesterville Mills",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "9",
    "page": "82",
    "sciName": "Glechoma hederacea L ",
    "comName": "gill-over-the-ground",
    "dimensions": "25 x 19",
    "samples": []
  },
  {
    "volume": "7",
    "page": "28",
    "sciName": "Gnaphalium uliginosum L ",
    "comName": "brown cudfeed",
    "dimensions": "36.5 x 27.8",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Coplin Plantation",
        "years": "1894"
      },
      {
        "places": "Shapleigh",
        "years": "1901"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "13",
    "page": "62",
    "sciName": "Goodyera oblongifolia Raf ",
    "comName": "giant rattlesnake-plantain",
    "dimensions": "38 x 25",
    "samples": [
      {
        "places": "Madawaska",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "61",
    "sciName": "Goodyera pubescens R Br in Ait & Ait",
    "comName": "downy rattlesnake-plantain",
    "dimensions": "38.7 x 27.5",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "13",
    "page": "60",
    "sciName": "Goodyera repens (L) R Br",
    "comName": "dwarf rattlesnake-plantain",
    "dimensions": "27 x 19.5",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1877"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "13",
    "page": "61a",
    "sciName": "Goodyera tesselata Lodd",
    "comName": "checkered rattlesnake-plantain",
    "dimensions": "36.2 x 27.5",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1875"
      },
      {
        "places": "Fayette Ridge",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "9",
    "page": "35",
    "sciName": "Gratiola aurea Pursh",
    "comName": "Golden hedge-hyssop",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "South Poland",
        "years": "1894"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "9",
    "page": "34",
    "sciName": "Gratiola virginiana L ",
    "comName": "round-fruited hedge-hyssop",
    "dimensions": "37 x 27.5",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "2",
    "page": "38",
    "sciName": "Gypsophilia muralis L ",
    "comName": "low baby's-breath",
    "dimensions": "37.0 x 26.5",
    "samples": [
      {
        "places": "Lewiston",
        "years": "1901"
      },
      {
        "places": "South Paris",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "10",
    "page": "26",
    "sciName": "Halenia deflexa (Sm) Griseb ",
    "comName": "American spurred-gentian",
    "dimensions": "30 x 24",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Van Buren",
        "years": "1880"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "5",
    "page": "5",
    "sciName": "Hamamelis viriginiana L ",
    "comName": "American witch-hazel",
    "dimensions": "37.7 x 28.0",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1878"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "9",
    "page": "79",
    "sciName": "Hedeoma pulegioides (L) Pers ",
    "comName": "American false pennyroyal",
    "dimensions": "27 x 20.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "97a",
    "sciName": "Helianthus annuus L ",
    "comName": "common sunflower",
    "dimensions": "34.7 x 24.4",
    "samples": [
      {
        "places": "Auburn",
        "years": "1893"
      },
      {
        "places": "Auburn",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "9",
    "sciName": "Helianthus decapetalus L ",
    "comName": "thin-leaved sunflower",
    "dimensions": "37.8 x 28.1",
    "samples": [
      {
        "places": "Farmington",
        "years": "1882"
      },
      {
        "places": "Farmington",
        "years": "1894"
      },
      {
        "places": "Livermore Falls",
        "years": "1875"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "7",
    "page": "8",
    "sciName": "Helianthus divaricatus L ",
    "comName": "woodland sunflower",
    "dimensions": "37.5 x 26.8",
    "samples": [
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Harpswell Neck",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "10",
    "sciName": "Helianthus giganteus L ",
    "comName": "tall sunflower",
    "dimensions": "38.1 x 27.6",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "100",
    "sciName": "Helianthus petiolaris Nutt ",
    "comName": "prairie sunflower",
    "dimensions": "37.2 x 28.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "7",
    "page": "5",
    "sciName": "Helopsis helianthoides (L) Sweet ",
    "comName": "sunflower-everlasting",
    "dimensions": "37.5 x 27.6",
    "samples": [
      {
        "places": "Woodstock",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "5",
    "page": "42",
    "sciName": "Heracleum maximum Bartr ",
    "comName": "American cow-parsnip",
    "dimensions": "38.0 x 27.7",
    "samples": [
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Orono",
        "years": "1881"
      },
      {
        "places": "Aroostook",
        "years": "1880"
      },
      {
        "places": "Aroostook",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "7",
    "page": "55",
    "sciName": "Hieracium aurantiacum L ",
    "comName": "orange hawkweed",
    "dimensions": "38.0 x 27.6",
    "samples": [
      {
        "places": "Strong",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Diamond Island",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "83",
    "sciName": "Hieracium caespitosum Dumort ",
    "comName": "yellow hawkweed",
    "dimensions": "38.0 x 27.0",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "7",
    "page": "102",
    "sciName": "Hieracium gronovii L ",
    "comName": "beaked hawkweed",
    "dimensions": "36.5 x 27.0",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "7",
    "page": "85",
    "sciName": "Hieracium lachenalii K C Gmel ",
    "comName": "common hawkweed",
    "dimensions": "36.5 x 26.9",
    "samples": [
      {
        "places": "Sangerville ",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "54",
    "sciName": "Hieracium paniculatum L ",
    "comName": "panicled hawkweed",
    "dimensions": "39.0 x 27.8",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "York",
        "years": "1898"
      },
      {
        "places": "Winnegance",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "7",
    "page": "84",
    "sciName": "Hieracium pilosella L ",
    "comName": "mouse-ear hawkweed",
    "dimensions": "37.5 x 27.3",
    "samples": [
      {
        "places": "Dover",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "7",
    "page": "86",
    "sciName": "Hieracium praealtum Vill ex Gochnat",
    "comName": "tall hawkweed",
    "dimensions": "37.7 x 27.6",
    "samples": [
      {
        "places": "West Gardiner",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "7",
    "page": "52",
    "sciName": "Hieracium scabrum Michx ",
    "comName": "rough hawkweed",
    "dimensions": "37.5 x 27.1",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "7",
    "page": "53",
    "sciName": "Hieracium venosum L ",
    "comName": "rattlesnake hawkweed",
    "dimensions": "37.7 x 28.0",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Fayette Ridge",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "5",
    "page": "12",
    "sciName": "Hippuris vulgaris L ",
    "comName": "common mare's-tail",
    "dimensions": "33.2 x 27.5",
    "samples": [
      {
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "2",
    "page": "53",
    "sciName": "Honckenya peploides (L) Ehrh ",
    "comName": "seaside-sandwort",
    "dimensions": "39.0 x 38.0 ",
    "samples": [
      {
        "places": "Machias",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "6",
    "page": "16",
    "sciName": "Houstonia caerulea L ",
    "comName": "little bluet",
    "dimensions": "24.6 x 19.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "6",
    "page": "15",
    "sciName": "Houstonia longifolia, Gaertn ",
    "comName": "long-leaved bluet",
    "dimensions": "26.9 x 19.8",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "6",
    "page": "14",
    "sciName": "Houstonia purpurea L ",
    "comName": "large bluet",
    "dimensions": "37.0 x 26.3",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "1",
    "page": "94",
    "sciName": "Hudsonia ericoides L ",
    "comName": "pine-barren false heather",
    "dimensions": "29.9 x 26.2",
    "samples": [
      {
        "places": "Cape Small Point",
        "years": "1888"
      }
    ]
  },
  {
    "volume": "1",
    "page": "95",
    "sciName": "Hudsonia tomentosa Nutt ",
    "comName": "sand false heather",
    "dimensions": "24.8 x 17.8",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Ogunquit",
        "years": "1898"
      },
      {
        "places": "Drake's Island",
        "years": "1898"
      },
      {
        "places": "Wells",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "11",
    "page": "56",
    "sciName": "Humulus lupulus L ",
    "comName": "common hop",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "5",
    "page": "38",
    "sciName": "Hydrocotyle americana L ",
    "comName": "American marsh-pennywort",
    "dimensions": "26.7 x 20.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "56",
    "sciName": "Hylodesmum glutinosum (L) H Ohashi & R R Mill",
    "comName": "pointed-leaved tick-trefoil",
    "dimensions": "34.6 x 26.0",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Jay",
        "years": "1890"
      }
    ]
  },
  {
    "volume": "3",
    "page": "55",
    "sciName": "Hylodesmum nudiflorum (L) H Ohashi & R R Mill",
    "comName": "naked tick-trefoil",
    "dimensions": "36.9 x 27.0",
    "samples": [
      {
        "places": "Fayette",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "5",
    "page": "3",
    "sciName": "Hylotelephium telephium (L) H Ohba ",
    "comName": "purple orpine",
    "dimensions": "37.7 x 27.7",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Brunswick",
        "years": "1882"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "10",
    "page": "24",
    "sciName": "Hyoscyamus niger L ",
    "comName": "black henbane",
    "dimensions": "26 x 19.5",
    "samples": [
      {
        "places": "Harpswell",
        "years": "1870"
      },
      {
        "places": "Fort Popham",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "2",
    "page": "80",
    "sciName": "Hypericum boreale Bickn ",
    "comName": "northern Saint John's-wort",
    "dimensions": "39.0 x 28.0",
    "samples": [
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Jersey Pond",
        "years": "1892"
      },
      {
        "places": "North Leeds",
        "years": "1894"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "2",
    "page": "82",
    "sciName": "Hypericum canadense L ",
    "comName": "lesser Canadian Saint John's-wort",
    "dimensions": "28.4 x 25.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "2",
    "page": "76",
    "sciName": "Hypericum ellipticum Hook ",
    "comName": "pale Saint John's-wort",
    "dimensions": "35.7 x 26.8 ",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "2",
    "page": "85",
    "sciName": "Hypericum gentianoides B S P ",
    "comName": "orange-grass Saint John's-wort",
    "dimensions": "22.5 x 17.0",
    "samples": [
      {
        "places": "Wells",
        "years": "1874"
      },
      {
        "places": "Fort Popham",
        "years": "1908"
      }
    ]
  },
  {
    "volume": "2",
    "page": "84",
    "sciName": "Hypericum mutilum L ",
    "comName": "dwarf Saint John's-wort",
    "dimensions": "37.4 x 27.8",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "2",
    "page": "78",
    "sciName": "Hypericum perforatum L ",
    "comName": "common Saint John's-wort",
    "dimensions": "37.7 x 27.1",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "2",
    "page": "79",
    "sciName": "Hypericum punctatum Lam ",
    "comName": "spotted Saint John's-wort",
    "dimensions": "38.2 x 27.7",
    "samples": [
      {
        "places": "Litchfield",
        "years": "1896"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "8",
    "page": "75",
    "sciName": "Hypopitys monotropa Crantz ",
    "comName": "yellow pine-sap",
    "dimensions": "24 x 15",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1973"
      },
      {
        "places": "South Poland",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "8",
    "page": "79",
    "sciName": "Ilex mucronata (L) M Powell, Savol, & S Andrews",
    "comName": "mountain holly",
    "dimensions": "37.7 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "10V",
    "sciName": "Ilex verticillata (L) Gray ",
    "comName": "common winterberry",
    "dimensions": "36.6 x 21.7",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1880"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Orono",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "3",
    "page": "9",
    "sciName": "Impatiens capensis Meerb ",
    "comName": "spotted touch-me-not",
    "dimensions": "31.6 x 23.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Bar Harbor",
        "years": "1891"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "3",
    "page": "8",
    "sciName": "Impatiens pallida Nutt ",
    "comName": "pale touch-me-not",
    "dimensions": "37.5 x 27.4",
    "samples": [
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "7",
    "page": "1",
    "sciName": "Inula helenium L ",
    "comName": "horse yellowhead",
    "dimensions": "33.9 x 23.4",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Topsham",
        "years": "1886"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Chesterville",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "6",
    "page": "55",
    "sciName": "Ionactis linariifolia (L) Greene ",
    "comName": "flax-leaved stiff-aster",
    "dimensions": "38.0 x 27.4",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "14",
    "page": "1b",
    "sciName": "Iris hookeri Penny ex D Don",
    "comName": "beach-head iris",
    "dimensions": "37 x 26.5",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "14",
    "page": "1",
    "sciName": "Iris versicolor L ",
    "comName": "blue iris",
    "dimensions": "37.3 x 28",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "13",
    "page": "71",
    "sciName": "Isotria verticillata Raf ",
    "comName": "large whorled pogonia ",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "12",
    "page": "2",
    "sciName": "Juglans cinerea L ",
    "comName": "white walnut",
    "dimensions": "38.5 x 28.5",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "14",
    "page": "60",
    "sciName": "Juncus alpinoarticulatus Chaix ex Vill",
    "comName": "northern green rush",
    "dimensions": "36.5 x 26.5",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "14",
    "page": "59",
    "sciName": "Juncus articulatus L ",
    "comName": "joint-leaved rush",
    "dimensions": "38.3 x 28",
    "samples": []
  },
  {
    "volume": "14",
    "page": "47",
    "sciName": "Juncus balticus Willd",
    "comName": "Baltic rush",
    "dimensions": "32.5 x 26.5",
    "samples": [
      {
        "places": "Saint John's River",
        "years": "1884"
      }
    ]
  },
  {
    "volume": "14",
    "page": "68",
    "sciName": "Juncus brevicaudatus (Engelm ) Fern",
    "comName": "short-tailed rush",
    "dimensions": "38 x 27",
    "samples": []
  },
  {
    "volume": "14",
    "page": "56",
    "sciName": "Juncus brevicaudatus (Engelm) Fern ",
    "comName": "short-tailed rush",
    "dimensions": "37 x 28",
    "samples": []
  },
  {
    "volume": "14",
    "page": "51",
    "sciName": "Juncus bufonius L ",
    "comName": "toad rush",
    "dimensions": "38 x 27.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "67",
    "sciName": "Juncus canadensis J Gay ex Laharpe",
    "comName": "Canada rush",
    "dimensions": "37.5 x 27.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "44",
    "sciName": "Juncus effusus L ",
    "comName": "common soft rush",
    "dimensions": "38 x 27.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "46",
    "sciName": "Juncus filiformis L ",
    "comName": "thread rush",
    "dimensions": "29.5 x 25",
    "samples": [
      {
        "places": "Saint John's River",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "14",
    "page": "52",
    "sciName": "Juncus gerardii Loisel ",
    "comName": "saltmarsh rush",
    "dimensions": "37.5 x 27.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "50",
    "sciName": "Juncus marginatus Rostk ",
    "comName": "grass-leaved rush",
    "dimensions": "37.5 x 27.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "61",
    "sciName": "Juncus militaris Bigelow",
    "comName": "bayonet rush",
    "dimensions": "38 x 27.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "63",
    "sciName": "Juncus nodosus L ",
    "comName": "knotted rush",
    "dimensions": "30 x 23.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "57",
    "sciName": "Juncus pelocarpus E Mey ",
    "comName": "brown-fruited rush",
    "dimensions": "37 x 28",
    "samples": [
      {
        "places": "Middle Range Pond",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "14",
    "page": "54",
    "sciName": "Juncus secundus Beauv ex Poir",
    "comName": "lopsided rush",
    "dimensions": "27.5 x 18.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "48",
    "sciName": "Juncus stygius L ",
    "comName": "moor rush",
    "dimensions": "41.5 x 29",
    "samples": []
  },
  {
    "volume": "14",
    "page": "53",
    "sciName": "Juncus tenuis Willd ",
    "comName": "path rush",
    "dimensions": "29.5 x 27.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "49",
    "sciName": "Juncus trifidus L ",
    "comName": "highland rush",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "Saddleback Mountain",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "14",
    "page": "55",
    "sciName": "Juncus vaseyi Engelm ",
    "comName": "Vasey's rush",
    "dimensions": "38 x 28",
    "samples": []
  },
  {
    "volume": "12",
    "page": "82",
    "sciName": "Juniperus communis L ",
    "comName": "common juniper ",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "12",
    "page": "84",
    "sciName": "Juniperus horizontalis Moench",
    "comName": "creeping juniper",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Roque Island",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "12",
    "page": "83",
    "sciName": "Juniperus virginiana L ",
    "comName": "eastern reDCedar",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Harpswell",
        "years": "1877"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "8",
    "page": "52",
    "sciName": "Kalmia angustifolia L ",
    "comName": "sheep American-laurel",
    "dimensions": "26.8 x 20.5 ",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "East Livermore",
        "years": "1880"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1880"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "8",
    "page": "51",
    "sciName": "Kalmia latifolia L ",
    "comName": "mountain American-laurel",
    "dimensions": "37.5 x 27.5 ",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Baldwin",
        "years": "1900"
      },
      {
        "places": "Harpswell",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "8",
    "page": "53",
    "sciName": "Kalmia polifolia Wangenh ",
    "comName": "bog American-laurel",
    "dimensions": "37.7 x 27.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "8",
    "page": "55",
    "sciName": "Kalmia procumbens L ",
    "comName": "alpine-azalea",
    "dimensions": "35.3 x 25",
    "samples": [
      {
        "places": "Mount Katahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "7",
    "page": "50",
    "sciName": "Krigia virginica (L) Willd ",
    "comName": "Virginia dwarf-dandelion",
    "dimensions": "32.2 x 22.2",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "68",
    "sciName": "Lactuca biennis (Moench) Fern ",
    "comName": "tall blue lettuce",
    "dimensions": "37.5 x 26.8",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Chesterville Plains",
        "years": "1896"
      },
      {
        "places": "Fayette",
        "years": "1871"
      },
      {
        "places": "Brunswick",
        "years": "1904"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Brunswick",
        "years": "1872"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "88",
    "sciName": "Lactuca biennis (Moench) Fernald",
    "comName": "tall blue lettuce",
    "dimensions": "27.1 x 18.9",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "7",
    "page": "67",
    "sciName": "Lactuca canadensis L ",
    "comName": "tall lettuce",
    "dimensions": "27.2 x 20.0 ",
    "samples": [
      {
        "places": "Fayette",
        "years": "1871"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Chesterville Plains",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "7",
    "page": "69",
    "sciName": "Lactuca hirsuta Muhl ex Nutt ",
    "comName": "tall hairy lettuce",
    "dimensions": "38.0 x 27.6",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "9",
    "page": "92",
    "sciName": "Lamium amplexicaule L ",
    "comName": "common henbit",
    "dimensions": "37.5 x 28",
    "samples": [
      {
        "places": "Gardiner",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "11",
    "page": "59",
    "sciName": "Laportea canadensis (L) Weddell",
    "comName": "Canada wood-nettle",
    "dimensions": "27.5 x 21.5",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1876"
      },
      {
        "places": "Livermore Falls",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "12",
    "page": "80",
    "sciName": "Larix laricina (Du Roi) K Koch",
    "comName": "American larch",
    "dimensions": "29.5 x 25.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "65",
    "sciName": "Lathyrus japonicus Willd ",
    "comName": "beach vetchling",
    "dimensions": "33.5 x 26.5",
    "samples": [
      {
        "places": "Great Diamond Island",
        "years": "1888"
      },
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "66",
    "sciName": "Lathyrus palustris L ",
    "comName": "marsh vetchling",
    "dimensions": "35.3 x 26.0",
    "samples": [
      {
        "places": "Drake's Island",
        "years": "1897"
      },
      {
        "places": "Great Diamond Island",
        "years": "1880"
      },
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Harpswell Neck",
        "years": "1871"
      },
      {
        "places": "Drake's Island",
        "years": "1897"
      },
      {
        "places": "Great Diamond Island",
        "years": "1888"
      }
    ]
  },
  {
    "volume": "3",
    "page": "65V",
    "sciName": "Lathyrus pratensis L ",
    "comName": "meadow vetchling",
    "dimensions": "37.2 x 27.3",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "1",
    "page": "97",
    "sciName": "Lechea intermedia Leggett ex Britt",
    "comName": "round-fruited pinweed",
    "dimensions": "35.1 x 26.2 ",
    "samples": [
      {
        "places": "Leeds Center",
        "years": "1895"
      },
      {
        "places": "Topsham",
        "years": "1877"
      },
      {
        "places": "Chesterville",
        "years": "1877"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Topsham",
        "years": "1877"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "7",
    "page": "82",
    "sciName": "Leontodon hispidus L ",
    "comName": "bristly hawkbit",
    "dimensions": "37.8 x 27.4",
    "samples": [
      {
        "places": "South Poland",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "90a",
    "sciName": "Leonurus cardiaca L ",
    "comName": "motherwort",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "89",
    "sciName": "Lepidicum virginicum L ",
    "comName": "poor-man's pepperweed",
    "dimensions": "37.4 x 26.9",
    "samples": [
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "1",
    "page": "90",
    "sciName": "Lepidium virginicum L ",
    "comName": "poor-man's pepperweed",
    "dimensions": "33.7 x 26.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1890"
      },
      {
        "places": "Wells Beach",
        "years": "1897"
      },
      {
        "places": "Brunswick",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "3",
    "page": "62",
    "sciName": "Lespedeza capitata Michx ",
    "comName": "round-headed bush-clover",
    "dimensions": "30.9 x 23.0",
    "samples": [
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Brunswick",
        "years": "1904"
      }
    ]
  },
  {
    "volume": "3",
    "page": "60",
    "sciName": "Lespedeza frutescens (L) Hornem ",
    "comName": "violet bush-clover",
    "dimensions": "36.6 x 26.8",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "3",
    "page": "61",
    "sciName": "Lespedeza hirta (L ) Hornem",
    "comName": "hairy bush-clover",
    "dimensions": "31.0 x 23.9",
    "samples": [
      {
        "places": "Wells",
        "years": "1877"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Brunswick",
        "years": "1904"
      }
    ]
  },
  {
    "volume": "3",
    "page": "59",
    "sciName": "Lespedeza procumbens Michx ",
    "comName": "trailing bush-clover",
    "dimensions": "31.0 x 23.7",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "19",
    "sciName": "Leucantheum vulgare Lam ",
    "comName": "ox-eye daisy",
    "dimensions": "37.2 x 26.4",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Brunswick",
        "years": "1908"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "6",
    "page": "18",
    "sciName": "Liatris novae-angliae (Lunell) Shinners ",
    "comName": "northern blazing star",
    "dimensions": "37.3 x 28.0",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "5",
    "page": "47",
    "sciName": "Ligusticum scoticum L ",
    "comName": "Scotch wild lovage",
    "dimensions": "37.8 x 27.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      },
      {
        "places": "Isle au Haut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "14",
    "page": "36",
    "sciName": "Lilium canadense L ",
    "comName": "Canada lily",
    "dimensions": "49 x 30.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "35",
    "sciName": "Lilium philadelphicum L ",
    "comName": "wood lily",
    "dimensions": "32 x 23.5",
    "samples": []
  },
  {
    "volume": "9",
    "page": "1",
    "sciName": "Limonium carolinianum (Walt) Britt",
    "comName": "Carolina sea-lavender",
    "dimensions": "34.5 x 24",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "27",
    "sciName": "Linaria vulgaris P Mill ",
    "comName": "butter-and-eggs toadflax",
    "dimensions": "34 x 24",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "11",
    "page": "37",
    "sciName": "Lindera benzoin (L) Blume",
    "comName": "norththern spicebush",
    "dimensions": "29.5 x 24",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1874"
      },
      {
        "places": "Wells",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "9",
    "page": "36",
    "sciName": "Lindernia dubia (L) Pennell",
    "comName": "yellow-seeded false pimpernel",
    "dimensions": "24 x 17.5",
    "samples": [
      {
        "places": "Topsham",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Scarborough Beach",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "5",
    "page": "82",
    "sciName": "Linnaea borealis L",
    "comName": "American twinflower",
    "dimensions": "26.9 x 20.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Rangeley Lakes",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "2",
    "page": "90",
    "sciName": "Linum usitatissimum L ",
    "comName": "cultivated flax",
    "dimensions": "36.1 x 26.9",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Orono",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1905"
      }
    ]
  },
  {
    "volume": "2",
    "page": "90v",
    "sciName": "Linum virginianum L ",
    "comName": "woodland yellow flax",
    "dimensions": "33.5 x 23.6",
    "samples": []
  },
  {
    "volume": "13",
    "page": "77",
    "sciName": "Liparis liliifolia L C Rich",
    "comName": "lily-leaved wide-lipped orchid",
    "dimensions": "33.5 x 26",
    "samples": []
  },
  {
    "volume": "13",
    "page": "78",
    "sciName": "Liparis loeselii (L) L C Rich ",
    "comName": "Loese's wide-lipped orchid",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Cumberland",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "91",
    "sciName": "Littorella americana Fern ",
    "comName": "American shoreweed",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "Eddington",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "8",
    "page": "1",
    "sciName": "Lobelia cardinalis L ",
    "comName": "red lobelia",
    "dimensions": "28.5 x 18",
    "samples": [
      {
        "places": "Topsham",
        "years": "1870"
      },
      {
        "places": "East Wilton",
        "years": "1896"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "Jul 1870"
      },
      {
        "places": "Rangeley",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "8",
    "page": "7",
    "sciName": "Lobelia dortmanna L ",
    "comName": "water lobelia",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1869"
      },
      {
        "places": "Fayette Ridge",
        "years": "1871"
      },
      {
        "places": "Fayette Ridge",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Fayette Ridge",
        "years": "1871"
      },
      {
        "places": "Wilton",
        "years": "1871"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Coplin Plantation",
        "years": "1894"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "8",
    "page": "5",
    "sciName": "Lobelia inflata L ",
    "comName": "bladder-pod lobelia",
    "dimensions": "29 x 23.7",
    "samples": [
      {
        "places": "Wells",
        "years": "1880"
      },
      {
        "places": "Saint Francis",
        "years": "1880"
      },
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Wells",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "8",
    "page": "4",
    "sciName": "Lobelia kalmii L ",
    "comName": "brook lobelia",
    "dimensions": "36.2 x 22.7",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "8",
    "page": "2",
    "sciName": "Lobelia siphilitica L ",
    "comName": "great lobelia",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "8",
    "page": "3",
    "sciName": "Lobelia spicata Lam ",
    "comName": "pale-spiked lobelia",
    "dimensions": "36 x 26",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Northport",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "90",
    "sciName": "Lonicera oblongifolia (Goldie) Hook ",
    "comName": "swamp honeysuckle",
    "dimensions": "37.8 x 34.8",
    "samples": [
      {
        "places": "Presque Isle",
        "years": "1880"
      },
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "5",
    "page": "83",
    "sciName": "Lonicera sempervirens L ",
    "comName": "trumpet honeysuckle",
    "dimensions": "36.3 x 27.0",
    "samples": []
  },
  {
    "volume": "5",
    "page": "86",
    "sciName": "Lonicera villosa (Michx) J A Schultes ",
    "comName": "mountain honeysuckle",
    "dimensions": "37.9 x 27.7",
    "samples": [
      {
        "places": "Harpswell Island",
        "years": "1895"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Great Diamond Island",
        "years": "1888"
      },
      {
        "places": "Fayette Ridge",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "5",
    "page": "31",
    "sciName": "Ludwigia palustris (L) Ell ",
    "comName": "common water-primrose",
    "dimensions": "37.5 x 26.8",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "14",
    "page": "41",
    "sciName": "Luzula acuminata Raf",
    "comName": "hairy wood rush",
    "dimensions": "30.5 x 23.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "43",
    "sciName": "Luzula campestris (L) DC",
    "comName": "field wood rush",
    "dimensions": "37 x 27.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "42",
    "sciName": "Luzula parviflora (Ehrh) Desv",
    "comName": "small-flowered wood rush",
    "dimensions": "37.5 x 28",
    "samples": []
  },
  {
    "volume": "2",
    "page": "48VA",
    "sciName": "Lychnis flos-cuculi L ",
    "comName": "ragged robin lychnis",
    "dimensions": "37.5 x 27.9",
    "samples": [
      {
        "places": "Wells",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "9",
    "page": "74",
    "sciName": "Lycopus americanus Muhl Ex W Bart ",
    "comName": "American water-horehound",
    "dimensions": "37.5 x 28",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Northport",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "73",
    "sciName": "Lycopus europaeus L ",
    "comName": "European water-horehound",
    "dimensions": "35.5 x 25",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Bath",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "9",
    "page": "72",
    "sciName": "Lycopus virginicus L ",
    "comName": "Virginia water-horehound",
    "dimensions": "33 x 27",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "8",
    "page": "47",
    "sciName": "Lyonia ligustrina (L) DC ",
    "comName": "maleberry",
    "dimensions": "37.4 x 26.5 ",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "West Baldwin",
        "years": "1897"
      },
      {
        "places": "Shapleigh",
        "years": "1901"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "12",
    "sciName": "Lysimachia arvensis (L) U Manns & A Anderb ",
    "comName": "scarlet pimpernel",
    "dimensions": "27 x 14",
    "samples": [
      {
        "places": "Fort Cliffs",
        "years": "1874"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Strong",
        "years": "1894"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "9",
    "page": "4",
    "sciName": "Lysimachia borealis (Raf) U Manns & A Anderb ",
    "comName": "starflower",
    "dimensions": "26.5 x 20",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Wells",
        "years": "1998"
      }
    ]
  },
  {
    "volume": "9",
    "page": "9",
    "sciName": "Lysimachia ciliata L ",
    "comName": "fringed yellow-loosestrife",
    "dimensions": "26 x 19",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Livermore",
        "years": "1871"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "9",
    "page": "10",
    "sciName": "Lysimachia hybrida Michx ",
    "comName": "lowland yellow-loosestrife",
    "dimensions": "37 x 26",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Damo Thickets",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "9",
    "page": "11",
    "sciName": "Lysimachia maritima (L) Galasso, Banfi, & Soldano",
    "comName": "sea-milkwort",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "Great Diamond Island",
        "years": "1888"
      },
      {
        "places": "West Bath",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "9",
    "page": "7",
    "sciName": "Lysimachia quadriflora L ",
    "comName": "four-flowered yellow-loosestrife",
    "dimensions": "26.5 x 20.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "9",
    "page": "6",
    "sciName": "Lysimachia terrestris (L) B S P ",
    "comName": "swamp yellow-loosestrife",
    "dimensions": "26.5 x 20",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "5",
    "sciName": "Lysimachia thyrsiflora L ",
    "comName": "tufted yellow-loosestrife",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "5",
    "page": "33",
    "sciName": "Lythrum hyssopifolia L ",
    "comName": "hyssop-leaved loosestrife",
    "dimensions": "26.0 x 20.0",
    "samples": [
      {
        "places": "Wells",
        "years": "1874"
      },
      {
        "places": "Cape Porpoise",
        "years": "1901"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "14",
    "page": "28",
    "sciName": "Maianthemum racemosum (L) Link",
    "comName": "feathery false Solomon's seal",
    "dimensions": "37.5 x 27.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "30",
    "sciName": "Maianthemum stellatum (L) Link",
    "comName": "star-like false Solomon's seal ",
    "dimensions": "26.5 x 20.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "31",
    "sciName": "Maianthemum trifolium (L) Sloboda",
    "comName": "three-leaved false Solomon's seal",
    "dimensions": "27 x 20.5",
    "samples": []
  },
  {
    "volume": "13",
    "page": "75",
    "sciName": "Malaxis monophyllos Sw ",
    "comName": "white adder's-mouth",
    "dimensions": "28 x 19",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Van Buren",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "13",
    "page": "76",
    "sciName": "Malaxis unifolia Michx ",
    "comName": "green adder's-mouth",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Greene",
        "years": "1876"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Van Buren",
        "years": "1880"
      },
      {
        "places": "Greenvale",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "2",
    "page": "88",
    "sciName": "Malva rotundifula L ",
    "comName": "low mallow",
    "dimensions": "22.4 x 15.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "West Bath",
        "years": "1892"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "20",
    "sciName": "Matricaria discoidea DC ",
    "comName": "rayless chamomille",
    "dimensions": "37.5 x 27.6",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Roque Bluffs",
        "years": "1902"
      },
      {
        "places": "Brunswick",
        "years": "1907"
      },
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "14",
    "page": "14",
    "sciName": "Medeola virginiana L ",
    "comName": "Indian cucumber root",
    "dimensions": "26.5 x 19",
    "samples": []
  },
  {
    "volume": "3",
    "page": "46",
    "sciName": "Medicago lupulina L ",
    "comName": "black medick",
    "dimensions": "34.3 x 27.0",
    "samples": [
      {
        "places": "York Beach",
        "years": "1879"
      },
      {
        "places": "Scarborough",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "47",
    "sciName": "Medicago polymorpha L ",
    "comName": "toothed medick",
    "dimensions": "38.4 x 27.2",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "North Berwick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "45",
    "sciName": "Medicago sativa L ",
    "comName": "purple medick",
    "dimensions": "29.5 x 23.5 ",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "9",
    "page": "58",
    "sciName": "Melampyrum lineare Desr ",
    "comName": "American cow-wheat",
    "dimensions": "38 x 26.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Chesterville",
        "years": "1896"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "3",
    "page": "44",
    "sciName": "Melilotus alba Medik ",
    "comName": "white sweet-clover",
    "dimensions": "37.5 x 26.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "3",
    "page": "43",
    "sciName": "Melilotus officinalis (L) Lam ",
    "comName": "yellow sweet-clover",
    "dimensions": "37.1 x 27.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1891"
      },
      {
        "places": "Bangor",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "9",
    "page": "68",
    "sciName": "Mentha arvensis L ",
    "comName": "ginger mint",
    "dimensions": "27.5 x 21",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Orono",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "9",
    "page": "67",
    "sciName": "Mentha canadensis L ",
    "comName": "American wild mint",
    "dimensions": "38.5 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1882"
      },
      {
        "places": "Caribou",
        "years": "1882"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Chebeague",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "9",
    "page": "65",
    "sciName": "Mentha x piperita L ",
    "comName": "water mint hybrid ",
    "dimensions": "27 x 20",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Bethel",
        "years": "1897"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "10",
    "page": "35",
    "sciName": "Menyanthes trifoliata L ",
    "comName": "buck-bean",
    "dimensions": "32 x 24",
    "samples": [
      {
        "places": "Fayette",
        "years": "1876"
      },
      {
        "places": "Wayne",
        "years": "1876"
      },
      {
        "places": "York Beach",
        "years": "1898"
      },
      {
        "places": "Orono",
        "years": "1879"
      },
      {
        "places": "Winnegance",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "10",
    "page": "7",
    "sciName": "Mertensia maritima (L) S F Gray",
    "comName": "seaside bluebelles",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "York Beach",
        "years": "1878"
      },
      {
        "places": "East Machias",
        "years": "1902"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Dix Island",
        "years": "1892"
      },
      {
        "places": "Cutler",
        "years": "1892"
      },
      {
        "places": "Machias",
        "years": "1892"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "4",
    "page": "101",
    "sciName": "Michranthes virginiensis (Michx) Small ",
    "comName": "early small-flowered saxifrage",
    "dimensions": "28.8 x 17.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "East Livermore",
        "years": "1874"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "102",
    "sciName": "Michranths pensylvanica (L) Haw ",
    "comName": "swamp small-flowered saxifrage",
    "dimensions": "33.0 x 24.0",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "33",
    "sciName": "Mimulus ringens L ",
    "comName": "Allegheny monkey-flower",
    "dimensions": "26.5 x 20.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Coplin Plantation",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "2",
    "page": "50",
    "sciName": "Minuartia groenlandica (Retz) Ostenf ",
    "comName": "mountain sandplant",
    "dimensions": "38.0 x 27.4",
    "samples": [
      {
        "places": "Mount Desert",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "6",
    "page": "13",
    "sciName": "Mitchella repens L ",
    "comName": "partridge-berry",
    "dimensions": "37.6 x 24.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "4",
    "page": "105",
    "sciName": "Mitella diphylla L ",
    "comName": "two leaved bishop's-cap",
    "dimensions": "32.7 x 23.8 ",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "4",
    "page": "104",
    "sciName": "Mitella nuda L ",
    "comName": "naked bishop's-cap",
    "dimensions": "22.8 x 14.0",
    "samples": [
      {
        "places": "Aroostook",
        "years": "1880"
      },
      {
        "places": "Dover",
        "years": "1897"
      },
      {
        "places": "Aroostook",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "2",
    "page": "51",
    "sciName": "Moehringia laterifloria (L) Fenzl ",
    "comName": "blunt-leaved grove-sandwort",
    "dimensions": "27.7 x 23.1",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Mount Desert",
        "years": "1891"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "8",
    "page": "1a",
    "sciName": "Mollugo verticillata L",
    "comName": "green carpetweed",
    "dimensions": "29.5 x 23.3",
    "samples": []
  },
  {
    "volume": "9",
    "page": "80",
    "sciName": "Monarda didyma L ",
    "comName": "scarlet bee-balm",
    "dimensions": "26.5 x 20",
    "samples": [
      {
        "places": "Fayette",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "8",
    "page": "71",
    "sciName": "Moneses uniflora (L) Gray",
    "comName": "one-flowered shinleaf",
    "dimensions": "24.2 x 18",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "73",
    "sciName": "Monotropa uniflora L ",
    "comName": "one-flowered Indian-pipe",
    "dimensions": "18.3 x 21",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1869"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "12",
    "page": "27",
    "sciName": "Morella caroliniensis (P Mill) Small",
    "comName": "small bayberry",
    "dimensions": "34 x 23",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "West Bath",
        "years": "1874"
      }
    ]
  },
  {
    "volume": "10",
    "page": "9",
    "sciName": "Myosotis arvensis (L) Hill",
    "comName": "field forgot-me-not",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Greenvale",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "12",
    "page": "26",
    "sciName": "Myrica gale L ",
    "comName": "sweetgale ",
    "dimensions": "30.5 x 24.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1874"
      },
      {
        "places": "Brunswick",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "5",
    "page": "119",
    "sciName": "Myriophyllum alterniflorum DC ",
    "comName": "alternate-flowered water-milfoil",
    "dimensions": "36.7 x 27.9",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "5",
    "page": "7",
    "sciName": "Myriophyllum farwellii Morong ",
    "comName": "Farwell's water-milfoil",
    "dimensions": "38.1 x 27.1",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Torsey Pond - Readfield",
        "years": "1892"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "5",
    "page": "8",
    "sciName": "Myriophyllum tenellum Bigelow ",
    "comName": "slender water-milfoil",
    "dimensions": "25.6 x 19.1",
    "samples": [
      {
        "places": "Fayette",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Chemo Pond",
        "years": "1880"
      },
      {
        "places": "Greenvale",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "5",
    "page": "6",
    "sciName": "Myriophyllum verticillatum L ",
    "comName": "whorled water-milfoil",
    "dimensions": "38.1 x 28.0",
    "samples": [
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Readfield",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "7",
    "page": "60",
    "sciName": "Nabalus altissimus (L) Hook ",
    "comName": "tall rattlesnake-root",
    "dimensions": "37.4 x 27.7",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Northport",
        "years": "1891"
      },
      {
        "places": "Chesterville",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "7",
    "page": "62",
    "sciName": "Nabalus boottii DC ",
    "comName": "Boott's rattlesnake-root",
    "dimensions": "35.0 x 25.2",
    "samples": [
      {
        "places": "Mt. Katahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "7",
    "page": "63",
    "sciName": "Nabalus racemosus (Michx) Hook ",
    "comName": "glaucous rattlesnake-root",
    "dimensions": "37.4 x 26.7",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Caribou",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "7",
    "page": "58",
    "sciName": "Nabalus trifoliolatus Cass ",
    "comName": "three-leaved rattlesnake-root",
    "dimensions": "38.0 x 27.8",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1887"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Northport",
        "years": "1891"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "1",
    "page": "67",
    "sciName": "Nasturium officinale Ait f ",
    "comName": "two-rowed water cress",
    "dimensions": "37.7 x 27.3",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Shapleigh",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "1",
    "page": "110",
    "sciName": "Nasturtium officinale Ait f",
    "comName": "two-rowed water cress",
    "dimensions": "30.0 x 24.0",
    "samples": [
      {
        "places": "Biddeford",
        "years": "1888"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "13",
    "page": "67",
    "sciName": "Neottia convallarioides Rich ",
    "comName": "broad-leaved twayblade",
    "dimensions": "38 x 27.2",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "13",
    "page": "66",
    "sciName": "Neottia cordata Rich ",
    "comName": "heart-leaved twayblade",
    "dimensions": "27.3 x 22",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Chesterville",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "9",
    "page": "81",
    "sciName": "Nepeta cataria L ",
    "comName": "catnip",
    "dimensions": "27 x 19.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "1",
    "page": "46",
    "sciName": "Nuphar advena (Ait) Ait f ",
    "comName": "immigrant pond-lily",
    "dimensions": "38.2 x 28.2 ",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Bradley",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "West Farmington",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "1",
    "page": "50",
    "sciName": "Nuphar microphylla (Pers) Fern ",
    "comName": "small-leaved pond-lily",
    "dimensions": "37.1 x 26.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Farmington",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "9",
    "page": "26",
    "sciName": "Nuttallanthus canadensis (L) D A Sutton",
    "comName": "oldfield-toadflax",
    "dimensions": "27 x 20",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Old Orchard Beach",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "2",
    "page": "89v",
    "sciName": "Nuttallanthus canadensis D A Sutton",
    "comName": "oldfield-toadflax",
    "dimensions": "38.7 x 27.2",
    "samples": []
  },
  {
    "volume": "1",
    "page": "44",
    "sciName": "Nymphaea odorata Ait ",
    "comName": "white water-lily",
    "dimensions": "34.7 x 27.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1882"
      },
      {
        "places": "Rangeley Region",
        "years": "1882"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "York",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "York Beach",
        "years": "1898"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "10",
    "page": "36",
    "sciName": "Nymphoides cordata Fern ",
    "comName": "little floating heart",
    "dimensions": "26.5 x 19.5",
    "samples": [
      {
        "places": "Bowdoin",
        "years": "1871"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "5",
    "page": "81",
    "sciName": "Nyssa sylvatica Marsh ",
    "comName": "black tupelo ",
    "dimensions": "27.2 x 24.6",
    "samples": []
  },
  {
    "volume": "6",
    "page": "51",
    "sciName": "Oclemena acuminata (Michx) Nesom ",
    "comName": "sharp-toothed nodding-aster",
    "dimensions": "37.9 x 27.5",
    "samples": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Lubec",
        "years": "1902"
      },
      {
        "places": "Van Buren",
        "years": "1880"
      },
      {
        "places": "Van Buren",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "6",
    "page": "53",
    "sciName": "Oclemena nemoralis (Ait) Greene ",
    "comName": "bog nodding-aster",
    "dimensions": "37.5 x 27.6",
    "samples": [
      {
        "places": "Fayette",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "6",
    "page": "54",
    "sciName": "Oclemena x blakei (Porter) Nesom",
    "comName": "Blake's aster",
    "dimensions": "38.0 x 27.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "9",
    "page": "55",
    "sciName": "Odontites vernus (Bellardi) Dumort ",
    "comName": "red false bartsia",
    "dimensions": "34 x 24",
    "samples": [
      {
        "places": "Harpswell",
        "years": "1878"
      },
      {
        "places": "Boothbay",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "5",
    "page": "22",
    "sciName": "Oenothera biennis L ",
    "comName": "common evening-primrose",
    "dimensions": "26.7 x 20.4",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Wells",
        "years": "1875"
      },
      {
        "places": "York",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "5",
    "page": "23",
    "sciName": "Oenothera oakesiana (Gray) J W Robbins ",
    "comName": "Oake's evening-primrose",
    "dimensions": "37.8 x 27.4",
    "samples": [
      {
        "places": "Castine",
        "years": "1902"
      },
      {
        "places": "Brunswick",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "5",
    "page": "25",
    "sciName": "Oenothera perennis L ",
    "comName": "little evening-primrose",
    "dimensions": "27.8 x 27.0",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "East Livermore",
        "years": "1888"
      },
      {
        "places": "East Livermore",
        "years": "1888"
      }
    ]
  },
  {
    "volume": "7",
    "page": "108",
    "sciName": "Omalotheca sylvatica Schultz-Bip & F W Schultz ",
    "comName": "woodland arctic cudweed",
    "dimensions": "38.3 x 27.8 ",
    "samples": [
      {
        "places": "Aroostook County",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "8",
    "page": "67",
    "sciName": "Orithilia seconda (L) House",
    "comName": "one-sided shinleaf",
    "dimensions": "26.8 x 18.6 ",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "8",
    "page": "68",
    "sciName": "Orithilia seconda House",
    "comName": "one-sided shinleaf",
    "dimensions": "23.5 x 14.5",
    "samples": []
  },
  {
    "volume": "9",
    "page": "23",
    "sciName": "Orobanche uniflora L ",
    "comName": "one-flowered broom-rape",
    "dimensions": "27 x 20",
    "samples": [
      {
        "places": "Waterville",
        "years": "1871"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Brunswick",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "5",
    "page": "58",
    "sciName": "Osmorhiza claytonii (Michx ) C B Clarke",
    "comName": "bland sweet-cicely",
    "dimensions": "37.7 x 27.3",
    "samples": [
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "Portage Lake",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "5",
    "page": "56",
    "sciName": "Osmorhiza longistylis (Torr) DC ",
    "comName": "long-styled sweet cicely",
    "dimensions": "37.7 x 26.5",
    "samples": [
      {
        "places": "Portage Lake",
        "years": "1881"
      },
      {
        "places": "Northport",
        "years": "1891"
      },
      {
        "places": "Patten",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "12",
    "page": "24",
    "sciName": "Ostrya virginiana (P Mill) K Koch",
    "comName": "hop-hornbeam",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Mt. Percival",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "3",
    "page": "6",
    "sciName": "Oxalis corniculata L ",
    "comName": "creeping yellow wood sorrel",
    "dimensions": "37.8 x 27.8",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Brunswick",
        "years": "1896"
      },
      {
        "places": "Great Diamond Island",
        "years": "1896"
      },
      {
        "places": "Brunswick",
        "years": "1898"
      },
      {
        "places": "Great Diamond Island",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "53",
    "sciName": "Oxytropis campestris (L) DC ",
    "comName": "Saint John River oxytrope",
    "dimensions": "37.7 x 26.5",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "7",
    "page": "34",
    "sciName": "Packera aurea (L) A & D Love ",
    "comName": "golden groundsel",
    "dimensions": "26.9 x 19.7",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1871"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Waterville",
        "years": "1871"
      },
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "36",
    "sciName": "Packera schweinitziana (Nutt) W A Weber & A Love ",
    "comName": "New England groundsel",
    "dimensions": "38.0 x 27.7",
    "samples": [
      {
        "places": "Machias",
        "years": "1902"
      },
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Machias",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "5",
    "page": "66",
    "sciName": "Panax quinquefolius L ",
    "comName": "American ginseng",
    "dimensions": "38.0 x 27.2",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "5",
    "page": "67",
    "sciName": "Panax trifolius L ",
    "comName": "dwarf ginseng",
    "dimensions": "33.9 x 24.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Brunswick",
        "years": "1890"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "3",
    "page": "18",
    "sciName": "Parthenocissus quinquefoli (L) Planch",
    "comName": "Virginia creeper",
    "dimensions": "28.9 x 23.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Fayette",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "5",
    "page": "43",
    "sciName": "Pastinaca sativa L ",
    "comName": "wild parsnip",
    "dimensions": "29.0 x 25.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "9",
    "page": "56",
    "sciName": "Pedicularis canadensis L ",
    "comName": "forest lousewort",
    "dimensions": "27 x 20.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "9",
    "page": "57",
    "sciName": "Pedicularis furbishiae S Wats ",
    "comName": "Furbish's lousewort",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Van Buren",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "12",
    "page": "90",
    "sciName": "Peltandra virginica (L) Raf ex Schott",
    "comName": "green arrow-arum",
    "dimensions": "37.5 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "9",
    "page": "31",
    "sciName": "Penstemon hirsutus (L) Willd ",
    "comName": "northeastern beardtongue",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "9",
    "page": "32",
    "sciName": "Penstemon laevigatus Ait",
    "comName": "eastern smooth beardtongue",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "New Sharon ",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "9",
    "page": "30",
    "sciName": "Penstemon tubiflorus Nutt ",
    "comName": "tube beardtongue",
    "dimensions": "37 x 27.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "5",
    "page": "1a",
    "sciName": "Penthorum sedoides L ",
    "comName": "ditch-stonecrop",
    "dimensions": "37.3 x 27.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "11",
    "page": "22",
    "sciName": "Persicaria amphibia (L) S F Gray",
    "comName": "water smartweed",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Greenvale",
        "years": "1891"
      },
      {
        "places": "Bradley",
        "years": "1880"
      },
      {
        "places": "Fayette",
        "years": "1871"
      },
      {
        "places": "Pushaw Pond",
        "years": "1880"
      },
      {
        "places": "Greenville",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "11",
    "page": "29",
    "sciName": "Persicaria arifolia (L) Haroldson",
    "comName": "halberd-leaved tearthumb",
    "dimensions": "30 x 25",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Readfield",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "11",
    "page": "30",
    "sciName": "Persicaria arifolia Haroldson",
    "comName": "halberd-leaved tearthumb",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Kents Hill",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "11",
    "page": "24",
    "sciName": "Persicaria careyi (Olney) Greene",
    "comName": "Carey's smartweed",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "York",
        "years": "1879"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "11",
    "page": "27",
    "sciName": "Persicaria hydropiperoides (Michx) Small",
    "comName": "false water-pepper smartweed",
    "dimensions": "37 x 26.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Baldwin",
        "years": "1900"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "11",
    "page": "17",
    "sciName": "Persicaria lapathifolia (L) S F Gray ",
    "comName": "dock-leaved smartweed",
    "dimensions": "38.5 x 27",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Fort Fairfield",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "11",
    "page": "20",
    "sciName": "Persicaria pensylvanica (L) G Maza",
    "comName": "Pennsylvania smartweed",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Cumberland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "6",
    "page": "22",
    "sciName": "Petasites frigidus (L) Fries ",
    "comName": "northern sweet-coltsfoot",
    "dimensions": "37.9 x 27.9",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Presque Isle",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "9",
    "page": "61",
    "sciName": "Phryma leptostachya L ",
    "comName": "American lop-seed",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Skowhegan",
        "years": "1902"
      },
      {
        "places": "Farmington",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "10",
    "page": "23",
    "sciName": "Physalis heterophylla Nees ",
    "comName": "clammy ground-cherry",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1879"
      },
      {
        "places": "Wayne",
        "years": "1879"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Litchfield",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "10",
    "page": "56",
    "sciName": "Phytolacca americana L ",
    "comName": "American pokeweed",
    "dimensions": "36.5 x 26",
    "samples": [
      {
        "places": "South Poland",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "12",
    "page": "75",
    "sciName": "Picea glauca (Moench) Voss",
    "comName": "white spruce",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "12",
    "page": "74",
    "sciName": "Picea mariana (P Mill) B S P ",
    "comName": "black spruce",
    "dimensions": "38.5 x 27.5",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "12",
    "page": "72",
    "sciName": "Picea rubens Sarg ",
    "comName": "red spruce",
    "dimensions": "37.5 x 26",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "11",
    "page": "60",
    "sciName": "Pilea pumila (L) Gray",
    "comName": "Canada clearweed",
    "dimensions": "39.5 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1895"
      },
      {
        "places": "Brunswick",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "12",
    "page": "68",
    "sciName": "Pinus banksiana Lamb ",
    "comName": "jack pine",
    "dimensions": "38.5 x 28",
    "samples": [
      {
        "places": "North Maine",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "12",
    "page": "70",
    "sciName": "Pinus resinosa Ait ",
    "comName": "red pine",
    "dimensions": "37.5 x 28.5",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1877"
      },
      {
        "places": "Chesterville",
        "years": "1878"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "Mt. Day",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "67",
    "sciName": "Pinus rigida P Mill ",
    "comName": "pitch pine",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "12",
    "page": "71",
    "sciName": "Pinus strobus L ",
    "comName": "eastern white pine",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "86",
    "sciName": "Plantago lanceolata L ",
    "comName": "English plantain",
    "dimensions": "28.5 x 23",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1883"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1874"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "80",
    "sciName": "Plantago major L ",
    "comName": "common plantain",
    "dimensions": "27.5 x 19.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Sorrento",
        "years": "1902"
      },
      {
        "places": "York",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "8",
    "page": "87",
    "sciName": "Plantago maritima L ",
    "comName": "seaside plaintain",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Sorrento",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "8",
    "page": "92",
    "sciName": "Plantago patagonica Jacq ",
    "comName": "Pursh's plantain",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Winnegance",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "8",
    "page": "85",
    "sciName": "Plantago rugelli Dcne ",
    "comName": "Rugel's plantain",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "West Bath",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "East Livermore",
        "years": "1894"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "8",
    "page": "83",
    "sciName": "Plantago virginca L ",
    "comName": "pale-seeded plantain",
    "dimensions": "38 x 25.5",
    "samples": [
      {
        "places": "York-Cliffs",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "13",
    "page": "55",
    "sciName": "Platanthera blephariglottis (Willd) Lindl ",
    "comName": "white fringed bog-orchid",
    "dimensions": "27 x 19.8",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1876"
      },
      {
        "places": "Brunswick",
        "years": "1904"
      },
      {
        "places": "Bangor",
        "years": "1881"
      },
      {
        "places": "Bangor",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "13",
    "page": "47",
    "sciName": "Platanthera clavellata (Michx) Leur",
    "comName": "little club-spur bog-orchid",
    "dimensions": "30.5 x 25.5",
    "samples": [
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "13",
    "page": "51",
    "sciName": "Platanthera dilatata (Pursh) Lindl ex Beck",
    "comName": "white northern bog-orchid",
    "dimensions": "37.5 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Farmington",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "13",
    "page": "48",
    "sciName": "Platanthera flava (L) Lindl",
    "comName": "northern tubercled bog-orchid",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "13",
    "page": "59",
    "sciName": "Platanthera grandiflora (Bigelow) Lindl ",
    "comName": "greater purple fringed bog-orchid",
    "dimensions": "34 x 24",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "13",
    "page": "82",
    "sciName": "Platanthera grandiflora Lindl ",
    "comName": "greater purple fringed bog-orchid",
    "dimensions": "33.3 x 25.5",
    "samples": []
  },
  {
    "volume": "13",
    "page": "53",
    "sciName": "Platanthera hookeri (Torr ex Gray) Lindl ",
    "comName": "hooker's bog-orchid",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Presque Isle",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "50",
    "sciName": "Platanthera huronensis (Nutt) Lindl",
    "comName": "Lake Huron green bog-orchid",
    "dimensions": "37.8 x 26.6",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Livermore Falls",
        "years": "1877"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "57",
    "sciName": "Platanthera lacera (Michx) G Don",
    "comName": "green fringed bog-orchid",
    "dimensions": "31 x 23.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1905"
      }
    ]
  },
  {
    "volume": "13",
    "page": "52",
    "sciName": "Platanthera obtusata (Banks ex Pursh) Lindl ",
    "comName": "blunt-leaved bog-orchid",
    "dimensions": "37.5 x 27.7",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1882"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Readfield",
        "years": "1896"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "13",
    "page": "54",
    "sciName": "Platanthera orbiculata (Pursh) Lindl ",
    "comName": "round-leaved bog-orchid",
    "dimensions": "34 x 23",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1886"
      },
      {
        "places": "Aroostook",
        "years": "1880"
      },
      {
        "places": "Aroostook",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "13",
    "page": "58",
    "sciName": "Platanthera psycodes (L) Lindl ",
    "comName": "lesser purple fringed bog-orchid",
    "dimensions": "38 x 27.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "12",
    "page": "1",
    "sciName": "Platanus occidentalis L ",
    "comName": "American sycamore",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Auburn",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "3",
    "page": "33",
    "sciName": "Polygala cruciata L ",
    "comName": "drum-heads milkwort",
    "dimensions": "37.0 x 26.2",
    "samples": [
      {
        "places": "Wells",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "3",
    "page": "30",
    "sciName": "Polygala paucifolia Willd ",
    "comName": "fringed milkwort",
    "dimensions": "37.2 x 27.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "3",
    "page": "31",
    "sciName": "Polygala polygama Walt ",
    "comName": "racemed milkwort",
    "dimensions": "26.6 x 18.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1900"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "North Berwick",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "3",
    "page": "32",
    "sciName": "Polygala sanguinea L ",
    "comName": "bloody milkwort",
    "dimensions": "37.5 x 26.9",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1887"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "3",
    "page": "34",
    "sciName": "Polygala verticillata L ",
    "comName": "whorled milkwort",
    "dimensions": "36.3 x 27.1",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "14",
    "page": "33",
    "sciName": "Polygonatum biflorum (Walt) Ell ",
    "comName": "King Solomon's-seal",
    "dimensions": "26.5 x 19",
    "samples": []
  },
  {
    "volume": "11",
    "page": "35",
    "sciName": "Polygonum articulatum L",
    "comName": "coastal jointed knotweed",
    "dimensions": "27.5 x 18.7",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "11",
    "page": "13",
    "sciName": "Polygonum aviculare L ",
    "comName": "dooryard knotweed",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "11",
    "page": "15",
    "sciName": "Polygonum erectum L ",
    "comName": "upright knotweed",
    "dimensions": "37 x 26",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "11",
    "page": "12",
    "sciName": "Polygonum glaucum Nutt ",
    "comName": "seaside knotweed",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1897"
      },
      {
        "places": "Wells Beach",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "11",
    "page": "16",
    "sciName": "Polygonum ramosissimum Michx ",
    "comName": "yellow-flowered knotweed",
    "dimensions": "37 x 26.5",
    "samples": [
      {
        "places": "North Berwick",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "11",
    "page": "14",
    "sciName": "Polygonum tenue Michx",
    "comName": "Slender knotweed",
    "dimensions": "27.5 x 19",
    "samples": [
      {
        "places": "Wells",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "14",
    "page": "69",
    "sciName": "Pontederia cordata L ",
    "comName": "pickerelweed",
    "dimensions": "34 x 22.5",
    "samples": []
  },
  {
    "volume": "12",
    "page": "66",
    "sciName": "Populus balsamifera L ",
    "comName": "balsam poplar",
    "dimensions": "37.5 x 28",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Brunswick",
        "years": "1885"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Aroostook",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "12",
    "page": "65",
    "sciName": "Populus grandidentata Michx ",
    "comName": "big-toothed poplar",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Chesterville Ridge",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Hiram",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "12",
    "page": "63",
    "sciName": "Populus tremuloides Michx ",
    "comName": "quaking poplar",
    "dimensions": "34.5 x 25.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1874"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Hiram",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "2",
    "page": "73",
    "sciName": "Portulaca oleracea L ",
    "comName": "common purslane",
    "dimensions": "37.6 x 27.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Brunswick",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "13",
    "page": "29",
    "sciName": "Potamogeton alpinus Balbis",
    "comName": "reddish pondweed",
    "dimensions": "32.5 x 26",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "19",
    "sciName": "Potamogeton amplifolius Tuckerman",
    "comName": "big-leaved pondweed",
    "dimensions": "36.5 x 26.5",
    "samples": [
      {
        "places": "Portage Lake",
        "years": "1881"
      },
      {
        "places": "Houlton",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "13",
    "page": "27",
    "sciName": "Potamogeton confervoides Reichenb ",
    "comName": "alga-like pondweed",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Round Pond",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "13",
    "page": "25",
    "sciName": "Potamogeton epihydrus Raf ",
    "comName": "ribbon-leaved pondweed",
    "dimensions": "36 x 27.5",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "13",
    "page": "15",
    "sciName": "Potamogeton gramineus L ",
    "comName": "grassy pondweed",
    "dimensions": "37 x 27.5",
    "samples": [
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "Litchfield",
        "years": "1896"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "14",
    "sciName": "Potamogeton natans L ",
    "comName": "floating pondweed",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Topsham",
        "years": "1874"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Portage Lake",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "93",
    "sciName": "Potamogeton obtusfolius Mert & Koch",
    "comName": "blunt-leaved pondweed",
    "dimensions": "",
    "samples": []
  },
  {
    "volume": "13",
    "page": "22",
    "sciName": "Potamogeton perfoliatus L ",
    "comName": "clasping-leaved pondweed",
    "dimensions": "37 x 28",
    "samples": [
      {
        "places": "Portage Lake",
        "years": "1881"
      },
      {
        "places": "Rangeley Lakes",
        "years": "1894"
      },
      {
        "places": "Androscoggin Lake",
        "years": "1895"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Winnegance",
        "years": "1911"
      }
    ]
  },
  {
    "volume": "13",
    "page": "26",
    "sciName": "Potamogeton pusillus L ",
    "comName": "small pondweed",
    "dimensions": "36.5 x 27",
    "samples": [
      {
        "places": "Bridgewater",
        "years": "1881"
      },
      {
        "places": "Houlton",
        "years": "1881"
      },
      {
        "places": "Orono",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "28",
    "sciName": "Potamogeton robbinsii Oakes",
    "comName": "robbins' pondweed",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Readfield",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "13",
    "page": "17",
    "sciName": "Potamogeton spirillus Tuckerman",
    "comName": "northern snail-seed pondweed",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "13",
    "page": "24",
    "sciName": "Potamogeton zosteriformis Fern ",
    "comName": "flat-stem pondweed",
    "dimensions": "37 x 27.3",
    "samples": [
      {
        "places": "Saint Francis",
        "years": "1880"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Livermore Falls",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "4",
    "page": "56",
    "sciName": "Potentilla argentea L ",
    "comName": "silver-leaveDCinquefoil",
    "dimensions": "33.2 x 24.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1890"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "4",
    "page": "60",
    "sciName": "Potentilla canadensis L ",
    "comName": "dwarf cinquefoil",
    "dimensions": "30.2 x 23.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Topsham",
        "years": "1871"
      },
      {
        "places": "East Livermore",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1892"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "4",
    "page": "55",
    "sciName": "Potentilla litoralis Rydb ",
    "comName": "coast cinquefoil",
    "dimensions": "30.3 x 23.5",
    "samples": [
      {
        "places": "Cushing Island",
        "years": "1876"
      },
      {
        "places": "Castine",
        "years": "1890"
      },
      {
        "places": "York Beach",
        "years": "1881"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "4",
    "page": "54",
    "sciName": "Potentilla norvegica L ",
    "comName": "Norwegian cinquefoil",
    "dimensions": "26.9 x 18.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "4",
    "page": "58",
    "sciName": "Potentilla recta L ",
    "comName": "sulphur cinquefoil",
    "dimensions": "38.0 x 27.3",
    "samples": [
      {
        "places": "Lewiston",
        "years": "1901"
      },
      {
        "places": "West Paris",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "9",
    "page": "2",
    "sciName": "Primula laurentiana Fern ",
    "comName": "bird's-eye primrose",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Houlton",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "9",
    "page": "3",
    "sciName": "Primula mistassinica Michx ",
    "comName": "Lake Mistassini primrose",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "5",
    "page": "9",
    "sciName": "Proserpinaca palustris L ",
    "comName": "marsh mermaid-weed",
    "dimensions": "37.7 x 27.1",
    "samples": [
      {
        "places": "Wells",
        "years": "1874"
      },
      {
        "places": "Chesterville",
        "years": "1878"
      },
      {
        "places": "Readfield",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "5",
    "page": "10",
    "sciName": "Proserpinaca pectinata Lam ",
    "comName": "comb-leaved mermaid-weed",
    "dimensions": "26.6 x 20.0",
    "samples": [
      {
        "places": "Wells",
        "years": "1877"
      },
      {
        "places": "Leeds Center",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "9",
    "page": "83",
    "sciName": "Prunella vulgaris L ",
    "comName": "common selfheal",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1881"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "4",
    "page": "2",
    "sciName": "Prunus americana Marsh ",
    "comName": "American plum",
    "dimensions": "37.5 x 27.6",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "6",
    "sciName": "Prunus avium (L) L ",
    "comName": "sweet cherry",
    "dimensions": "37.5 x 27.3",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "3",
    "sciName": "Prunus maritima Marsh ",
    "comName": "beach plum",
    "dimensions": "35.0 x 27.0",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Wells Beach",
        "years": "1897"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      },
      {
        "places": "Drake's Island",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "4",
    "page": "1",
    "sciName": "Prunus nigra Ait ",
    "comName": "Canada plum",
    "dimensions": "36.6 x 26.3",
    "samples": [
      {
        "places": "Orono",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "4",
    "page": "9",
    "sciName": "Prunus pensylvanica L ",
    "comName": "pin cherry",
    "dimensions": "30.3 x 19.6",
    "samples": [
      {
        "places": "Orono",
        "years": "1881"
      },
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "7",
    "sciName": "Prunus pumila L ",
    "comName": "dwarf sand plum",
    "dimensions": "36.3 x 26.7",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Ashland",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "4",
    "page": "19",
    "sciName": "Prunus serotina Ehrh ",
    "comName": "black cherry",
    "dimensions": "37.5 x 26.9",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "11",
    "sciName": "Prunus susquehanae hort ex Willd ",
    "comName": "Appalachian sand plum",
    "dimensions": "37.4 x 26.7",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "4",
    "page": "12",
    "sciName": "Prunus susquehanae hort. ex Willd ",
    "comName": "Appalachian sand plum",
    "dimensions": "38.3 x 27.4",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "4",
    "page": "15",
    "sciName": "Prunus virginiana L ",
    "comName": "choke cherry",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Harpswell",
        "years": "1884"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Harpswell",
        "years": "1884"
      },
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Saint Francis",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "7",
    "page": "26",
    "sciName": "Pseudognaphalium macounii (Greene) Kartesz ",
    "comName": "Macoun's rabbit-tobacco",
    "dimensions": "37.5 x 28.0",
    "samples": [
      {
        "places": "Auburn",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "9",
    "page": "76",
    "sciName": "Pycnanthemum tenuifolium Schrad ",
    "comName": "narrow-leaved mountain-mint",
    "dimensions": "35.5 x 27",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "75",
    "sciName": "Pycnanthenum virginianum (L) T Dur & B D Jackson ex B L Robins & Fern ",
    "comName": "Virginia mountain-mint",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Madison",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Fayette Ridge",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "8",
    "page": "64",
    "sciName": "Pyrola Elliptica Nutt ",
    "comName": "elliptic-leaved shinleaf",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1881"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "8",
    "page": "61",
    "sciName": "Pyrola asarifolia Michx ",
    "comName": "pink shinleaf",
    "dimensions": "37.5 x 28",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Patten",
        "years": "1880"
      },
      {
        "places": "Aroostook",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "8",
    "page": "65",
    "sciName": "Pyrola chlorantha Sw ",
    "comName": "green-flowered shinleaf",
    "dimensions": "30 x 23.5",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "8",
    "page": "63",
    "sciName": "Pyrola elliptica Nutt ",
    "comName": "elliptic-leaved shinleaf",
    "dimensions": "37 x 26.5",
    "samples": [
      {
        "places": "Gilead",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "8",
    "page": "70",
    "sciName": "Pyrola minor L ",
    "comName": "little shinleaf",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "6",
    "sciName": "Quercus alba L ",
    "comName": "eastern white oak",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "Wells",
        "years": "1877"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "Mt. Agamenticus",
        "years": "1877"
      },
      {
        "places": "Mt. Agamenticus",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "12",
    "page": "8",
    "sciName": "Quercus bicolor Willd ",
    "comName": "swamp white oak",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Wells",
        "years": "1877"
      },
      {
        "places": "Wells",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "12",
    "page": "12",
    "sciName": "Quercus coccinea Muenchh ",
    "comName": "scarlet oak",
    "dimensions": "38.5 x 28",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "South Poland",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "12",
    "page": "11",
    "sciName": "Quercus ilicifolia Wangenh ",
    "comName": "scrub oak",
    "dimensions": "38.5 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Topsham",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Hiram",
        "years": "1900"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "12",
    "page": "10",
    "sciName": "Quercus muehlenbergii Engelm",
    "comName": "yellow chestnut oak",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "York",
        "years": "1876"
      },
      {
        "places": "York",
        "years": "1879"
      },
      {
        "places": "York",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "12",
    "page": "9",
    "sciName": "Quercus prinoides Willd ",
    "comName": "dwarf chestnut ",
    "dimensions": "38.5 x 27.5",
    "samples": [
      {
        "places": "York",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "12",
    "page": "13",
    "sciName": "Quercus rubra L ",
    "comName": "northern red oak",
    "dimensions": "38.5 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "1",
    "page": "20",
    "sciName": "Rannuculus ambigens S Wats ",
    "comName": "water-plantain crowfoot",
    "dimensions": "38.2 x 27.9",
    "samples": [
      {
        "places": "North Berwick",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "1",
    "page": "23",
    "sciName": "Ranunculus abortivus L ",
    "comName": "kidney-leaveDCrowfoot",
    "dimensions": "38.0 x 27.5",
    "samples": [
      {
        "places": "York Beach",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "York Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "32",
    "sciName": "Ranunculus acris L ",
    "comName": "tall crowfoot",
    "dimensions": "38.8 x 28.0",
    "samples": []
  },
  {
    "volume": "1",
    "page": "17",
    "sciName": "Ranunculus aquatilis L ",
    "comName": "white water crowfoot",
    "dimensions": "37.0 x 27.5",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "1",
    "page": "30",
    "sciName": "Ranunculus bulbosus L ",
    "comName": "bulbous crowfoot",
    "dimensions": "32.3 x 20.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "Brewer",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "1",
    "page": "27",
    "sciName": "Ranunculus caricetorum Greene ",
    "comName": "swamp crowfoot",
    "dimensions": "38.0 x 27.8",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Brewer",
        "years": "1880"
      },
      {
        "places": "Great Diamond Island",
        "years": "1888"
      }
    ]
  },
  {
    "volume": "1",
    "page": "18",
    "sciName": "Ranunculus cymbalaria Pursh",
    "comName": "seaside crowfoot",
    "dimensions": "27.4 x 19.5",
    "samples": [
      {
        "places": "Harpswell Neck",
        "years": "1871"
      },
      {
        "places": "Brunswick",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "22",
    "sciName": "Ranunculus flammulla L ",
    "comName": "creeping crowfoot",
    "dimensions": "31.5 x 23.9",
    "samples": [
      {
        "places": "Chesterville Ridge",
        "years": "1875"
      },
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Chesterville Ridge",
        "years": "1875"
      },
      {
        "places": "Fayette Ridge",
        "years": "1875"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "1",
    "page": "29",
    "sciName": "Ranunculus pensylvanicus L f ",
    "comName": "bristly crowfoot",
    "dimensions": "38.0 x 27.6",
    "samples": [
      {
        "places": "Van Buren",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "1",
    "page": "26",
    "sciName": "Ranunculus recurvatus Poir ",
    "comName": "hookeDCrowfoot",
    "dimensions": "27.0 x 21.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Brunswick",
        "years": "1879"
      },
      {
        "places": "Brunswick",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "1",
    "page": "31",
    "sciName": "Ranunculus repens L ",
    "comName": "spot-leaveDCrowfoot",
    "dimensions": "36.3 x 27.1",
    "samples": [
      {
        "places": "Great Diamond Island",
        "years": "1888"
      },
      {
        "places": "Fairfield",
        "years": "1901"
      },
      {
        "places": "Rockland",
        "years": "1904"
      },
      {
        "places": "Cutler",
        "years": "1903"
      },
      {
        "places": "Brunswick",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "1",
    "page": "25",
    "sciName": "Ranunculus sceleratus L ",
    "comName": "curseDCrowfoot",
    "dimensions": "26.5 x 19.5",
    "samples": [
      {
        "places": "Harpswell Neck",
        "years": "1871"
      },
      {
        "places": "Lisbon Falls",
        "years": "1904"
      }
    ]
  },
  {
    "volume": "1",
    "page": "92",
    "sciName": "Raphanus raphanistrum L ",
    "comName": "wild radish",
    "dimensions": "37.7 x 26.9",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "87",
    "sciName": "Raphanus sativus L ",
    "comName": "cultivated radish",
    "dimensions": "38.2 x 27.1",
    "samples": [
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "3",
    "page": "13",
    "sciName": "Rhamnus anifolia L'HÃ©r ",
    "comName": "alder-leaved buckthorn",
    "dimensions": "36.9 x 26.0",
    "samples": [
      {
        "places": "Wells",
        "years": "1876"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Mayos Pond",
        "years": "1897"
      },
      {
        "places": "Patten",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "5",
    "page": "32",
    "sciName": "Rhexia virginica L ",
    "comName": "Virginia meadow-beauty",
    "dimensions": "39.1 x 27.7",
    "samples": [
      {
        "places": "Bradley",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "9",
    "page": "54",
    "sciName": "Rhinanthus minor L ",
    "comName": "little yellow-rattle",
    "dimensions": "37 x 28",
    "samples": [
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Northport",
        "years": "1891"
      },
      {
        "places": "Isle au Haut",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "5",
    "page": "4",
    "sciName": "Rhodiola rosea L ",
    "comName": "roseroot",
    "dimensions": "38.0 x 27.3",
    "samples": [
      {
        "places": "The Island",
        "years": "Cutler\"\"The Island\" Cutler\"\"he Islan\"\"\"he Island\" Cutler\"\"The Island\" Cutler\"\"\"e Island\" Cutler\"\"The Island\"\" Island\" Cutler\"\"Th\"\"Island\" Cut\"\"slan\""
      },
      {
        "places": "1902",
        "years": "Roque Bluffs"
      },
      {
        "places": "1902",
        "years": "Monhegan"
      }
    ]
  },
  {
    "volume": "8",
    "page": "59",
    "sciName": "Rhododendron canadense (L) Torr ",
    "comName": "rhodora",
    "dimensions": "37.5 x 27.5",
    "samples": []
  },
  {
    "volume": "8",
    "page": "60",
    "sciName": "Rhododendron groenlandicum (Oeder) Kron & Judd",
    "comName": "Labrador-tea",
    "dimensions": "26.5 x 20",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "8",
    "page": "57",
    "sciName": "Rhododendron lapponicum (L) Wahlenb ",
    "comName": "Lapland rosebay",
    "dimensions": "35.7 x 25.2 ",
    "samples": [
      {
        "places": "Mount Katahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "8",
    "page": "56",
    "sciName": "Rhododendron maximum L ",
    "comName": "great rosebay",
    "dimensions": "36 x 27 ",
    "samples": [
      {
        "places": "Standish",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "8",
    "page": "54",
    "sciName": "Rhododendron viscosum (L) Torr ",
    "comName": "clammy azalea",
    "dimensions": "27 x 23 ",
    "samples": [
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Isle au Haut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "3",
    "page": "27",
    "sciName": "Rhus copallinum L ",
    "comName": "winged sumac",
    "dimensions": "38.8 x 27.6",
    "samples": [
      {
        "places": "Shapleigh",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "3",
    "page": "26",
    "sciName": "Rhus glabra L ",
    "comName": "smooth sumac",
    "dimensions": "37.5 x 27.0",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "Farmington",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "3",
    "page": "25",
    "sciName": "Rhus hirta (L) Sudworth ",
    "comName": "staghorn sumac",
    "dimensions": "38.4 x 27.4",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "113",
    "sciName": "Ribes americanum P Mill ",
    "comName": "eastern black currant",
    "dimensions": "27.0 x 24.2",
    "samples": [
      {
        "places": "Patten",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "4",
    "page": "115",
    "sciName": "Ribes aureum Pursh ",
    "comName": "golden currant",
    "dimensions": "37.0 x 27.0",
    "samples": [
      {
        "places": "Patten",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "4",
    "page": "108",
    "sciName": "Ribes cynosbati L ",
    "comName": "eastern prickly gooseberry",
    "dimensions": "34.0 x 24.4",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "4",
    "page": "112",
    "sciName": "Ribes glandulosum Grauer ",
    "comName": "skunk-currant",
    "dimensions": "30.5 x 24.1",
    "samples": [
      {
        "places": "Cushing Island",
        "years": "1876"
      },
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "4",
    "page": "109",
    "sciName": "Ribes hirtellum Michx ",
    "comName": "hairy-stemmed gooseberry",
    "dimensions": "27.9 x 18.7",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Chebeague Island",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "4",
    "page": "110",
    "sciName": "Ribes lacustre (Pers) Poir ",
    "comName": "bristly swamp currant",
    "dimensions": "32.3 x 27.1",
    "samples": [
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "Hersey",
        "years": "1881"
      },
      {
        "places": "New Sweden",
        "years": "1881"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "New Sweden",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "4",
    "page": "114",
    "sciName": "Ribes rubrum L ",
    "comName": "garden reDCurrant",
    "dimensions": "37.5 x 26.8",
    "samples": [
      {
        "places": "Presque Isle",
        "years": "1880"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "3",
    "page": "49",
    "sciName": "Robinia hispida L ",
    "comName": "bristly locust",
    "dimensions": "37.0 x 26.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "3",
    "page": "48",
    "sciName": "Robinia pseudoacacia L ",
    "comName": "black locust",
    "dimensions": "37.2 x 27.4",
    "samples": [
      {
        "places": "Fayette",
        "years": "1877"
      },
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "76",
    "sciName": "Rorippa palustris (L) Bess ",
    "comName": "common yellow-cress",
    "dimensions": "37.0 x 26.0",
    "samples": [
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Shapleigh",
        "years": "1901"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "1",
    "page": "75",
    "sciName": "Rorippa sylvestris (L) Bess ",
    "comName": "creeping yellow-cress",
    "dimensions": "38.0 x 28.0",
    "samples": [
      {
        "places": "Moosehead Lake",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "4",
    "page": "61",
    "sciName": "Rosa acicularis Lindl ",
    "comName": "bristly rose",
    "dimensions": "26.5 x 20.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "West Baldwin",
        "years": "1878"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Foster's Point",
        "years": "1900"
      },
      {
        "places": "Foster's Point",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "4",
    "page": "67",
    "sciName": "Rosa blanda Ait ",
    "comName": "smooth rose",
    "dimensions": "37.8 x 27.3",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Dover",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "4",
    "page": "68",
    "sciName": "Rosa carolina L ",
    "comName": "Carolina rose",
    "dimensions": "38.1 x 27.4",
    "samples": [
      {
        "places": "West Bath",
        "years": "1899"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "West Bath",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "4",
    "page": "72",
    "sciName": "Rosa carolina L ssp carolina ",
    "comName": "Carolina rose",
    "dimensions": "38.0 x 27.4",
    "samples": [
      {
        "places": "West Bath",
        "years": "1891"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "4",
    "page": "73",
    "sciName": "Rosa nitida Willd ",
    "comName": "shining rose",
    "dimensions": "38.0 x 27.2 ",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Ashland",
        "years": "1881"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "4",
    "page": "75",
    "sciName": "Rosa rubiginosa L ",
    "comName": "sweet-briar rose",
    "dimensions": "27.5 x 18.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Freeport",
        "years": "1908"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Freeport",
        "years": "1907"
      },
      {
        "places": "Harpswell",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "4",
    "page": "70",
    "sciName": "Rosa virginiana P Mill ",
    "comName": "Virginia rose",
    "dimensions": "37.4 x 26.8",
    "samples": [
      {
        "places": "Mt. Howard",
        "years": "1902"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "4",
    "page": "31",
    "sciName": "Rubus allegheniensis Porter ",
    "comName": "common blackberry",
    "dimensions": "27.2 x 22.1",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "East Livermore",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "4",
    "page": "37",
    "sciName": "Rubus canadensis L ",
    "comName": "smooth blackberry",
    "dimensions": "37.5 x 27.4",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "4",
    "page": "25",
    "sciName": "Rubus chamaemorus L ",
    "comName": "baked-apple-berry",
    "dimensions": "38.0 x 27.4",
    "samples": [
      {
        "places": "Machias",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "4",
    "page": "39",
    "sciName": "Rubus dalibarda L ",
    "comName": "dewdrop",
    "dimensions": "26.3 x 19.4",
    "samples": [
      {
        "places": "Topsham",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "4",
    "page": "32",
    "sciName": "Rubus flagellaris Willd ",
    "comName": "northern blackberry",
    "dimensions": "38.2 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "4",
    "page": "36",
    "sciName": "Rubus frondosus Bigelow ",
    "comName": "leafy-flowered blackberry",
    "dimensions": "37.1 x 26.8",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "35",
    "sciName": "Rubus hispidus L ",
    "comName": "bristly blackberry",
    "dimensions": "36.6 x 26.8",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1888"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "28",
    "sciName": "Rubus idaeus L ",
    "comName": "red raspberry",
    "dimensions": "28.6 x 20.1",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "East Livermore",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "30",
    "sciName": "Rubus occidentalis L ",
    "comName": "black raspberry",
    "dimensions": "30.5 x 23.6",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "York County",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "4",
    "page": "24",
    "sciName": "Rubus odoratus L ",
    "comName": "flowering raspberry",
    "dimensions": "26.5 x 20.0",
    "samples": [
      {
        "places": "Great Diamond Island",
        "years": "1888"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "4",
    "page": "29",
    "sciName": "Rubus pensilvanicus Poir ",
    "comName": "Pennsylvania blackberry",
    "dimensions": "38.5 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1884"
      }
    ]
  },
  {
    "volume": "4",
    "page": "26",
    "sciName": "Rubus pubescens Raf ",
    "comName": "dwarf raspberry",
    "dimensions": "26.5 x 19.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "West Baldwin",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "38",
    "sciName": "Rubus setosus Bigelow ",
    "comName": "setose blackberry",
    "dimensions": "36.7 x 26.7",
    "samples": [
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "7",
    "page": "7",
    "sciName": "Rudbeckia hirta L ",
    "comName": "black-eyeDConeflower",
    "dimensions": "34.0 x 24.7",
    "samples": [
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "East Livermore",
        "years": "1894"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1874"
      }
    ]
  },
  {
    "volume": "11",
    "page": "11",
    "sciName": "Rumex acetosella L ",
    "comName": "common dock ",
    "dimensions": "36.5 x 26.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "11",
    "page": "1",
    "sciName": "Rumex britannica L ",
    "comName": "greater water dock ",
    "dimensions": "35.5 26",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Sorrento",
        "years": "1891"
      },
      {
        "places": "North Lubec",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "11",
    "page": "4",
    "sciName": "Rumex crispus L ",
    "comName": "curly dock ",
    "dimensions": "27 x 19",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "11",
    "page": "10",
    "sciName": "Rumex maritimus L ",
    "comName": "golden dock",
    "dimensions": "39 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "11",
    "page": "5",
    "sciName": "Rumex obtusifolius L ",
    "comName": "bitter dock",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "11",
    "page": "8",
    "sciName": "Rumex occidentalis S Wats ",
    "comName": "western dock ",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "11",
    "page": "3",
    "sciName": "Rumex pallidus Bigelow",
    "comName": "seabeach dock",
    "dimensions": "37 x 27.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "13",
    "page": "13",
    "sciName": "Ruppia maritima L ",
    "comName": "beaked ditch-grass",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Harpswell",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1891"
      },
      {
        "places": "Winnegance",
        "years": "1911"
      }
    ]
  },
  {
    "volume": "2",
    "page": "66",
    "sciName": "Sagina nodosa Fenzl ",
    "comName": "knotted pearlwort",
    "dimensions": "37.3 x 27.1",
    "samples": [
      {
        "places": "Bar Harbor",
        "years": "1891"
      },
      {
        "places": "Cape Porpoise",
        "years": "1901"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Gray",
        "years": "1908"
      },
      {
        "places": "Brunswick",
        "years": "1885"
      },
      {
        "places": "Mount Desert",
        "years": "1891"
      },
      {
        "places": "Cape Porpoise",
        "years": "1891"
      },
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "2",
    "page": "63",
    "sciName": "Sagina procumbens L ",
    "comName": "bird's-eye pearlwort",
    "dimensions": "23.0 x 14.4",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Squirrel Island",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "13",
    "page": "43",
    "sciName": "Sagittaria cuneta Sheldon",
    "comName": "northern arrowhead",
    "dimensions": "35.5 x 27.3",
    "samples": [
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "37",
    "sciName": "Sagittaria graminea Michx ",
    "comName": "grass-leaved arrowhead",
    "dimensions": "38 x 26.5",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "13",
    "page": "34",
    "sciName": "Sagittaria latifolia Willd ",
    "comName": "common arrowhead",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Mapleton",
        "years": "1882"
      },
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "13",
    "page": "41",
    "sciName": "Sagittaria montevidensis Cham & Schlecht",
    "comName": "spongy-leaved arrowhead",
    "dimensions": "37 x 26.5",
    "samples": [
      {
        "places": "West Bath",
        "years": "1907"
      },
      {
        "places": "West Bath",
        "years": "1911"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "13",
    "page": "42a",
    "sciName": "Sagittaria montevidensis Cham & Schlect",
    "comName": "spongy-leaved arrowhead",
    "dimensions": "36.5 x 27",
    "samples": [
      {
        "places": "Rangeley Village",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "10",
    "page": "70",
    "sciName": "Salicornia maritima Wolff & Jefferies",
    "comName": "sea glasswort",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1899"
      },
      {
        "places": "Sorrento",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Pemaquid",
        "years": "1889"
      },
      {
        "places": "Lubec",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "12",
    "page": "54",
    "sciName": "Salix alba L ",
    "comName": "white willow",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "12",
    "page": "60",
    "sciName": "Salix argyrocarpa Anderss ",
    "comName": "labrador willow",
    "dimensions": "38 x 28",
    "samples": []
  },
  {
    "volume": "12",
    "page": "39",
    "sciName": "Salix bebbiana Sarg ",
    "comName": "long-beaked willow",
    "dimensions": "37.5 x 28",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1892"
      },
      {
        "places": "Brunswick",
        "years": "1893"
      },
      {
        "places": "Orono",
        "years": "1893"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Hiram",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "12",
    "page": "41",
    "sciName": "Salix discolor Muhl ",
    "comName": "pussy willow",
    "dimensions": "38.5 x 28.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "12",
    "page": "47",
    "sciName": "Salix eriocephala Michx ",
    "comName": "heart-leaved willow",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Shad Island",
        "years": "1888"
      }
    ]
  },
  {
    "volume": "12",
    "page": "55",
    "sciName": "Salix exigua Nutt ",
    "comName": "sandbar willow",
    "dimensions": "38.5 x 28.2",
    "samples": [
      {
        "places": "Poland",
        "years": "1895"
      },
      {
        "places": "Middle Range Pond",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "61",
    "sciName": "Salix herbacea L ",
    "comName": "snow-bed willow",
    "dimensions": "38 x 28.5",
    "samples": []
  },
  {
    "volume": "12",
    "page": "40",
    "sciName": "Salix humilis Marsh ",
    "comName": "prairie willow",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "50",
    "sciName": "Salix lucida Muhl ",
    "comName": "shining willow",
    "dimensions": "31 x 23.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "64",
    "sciName": "Salix myricoides Muhl ",
    "comName": "bayberry willow",
    "dimensions": "37 x 27.5",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "12",
    "page": "52",
    "sciName": "Salix nigra Marsh ",
    "comName": "black willow",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Poland",
        "years": "1893"
      },
      {
        "places": "Poland",
        "years": "1895"
      },
      {
        "places": "Middle Range Pond",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "12",
    "page": "56",
    "sciName": "Salix pedicellaris Pursh",
    "comName": "bog willow",
    "dimensions": "38 x 27.5",
    "samples": []
  },
  {
    "volume": "12",
    "page": "58",
    "sciName": "Salix pyrifolia Anderss ",
    "comName": "balsam willow",
    "dimensions": "37 x 27.5",
    "samples": [
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Hiram",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "12",
    "page": "44",
    "sciName": "Salix sericea Marsh ",
    "comName": "silky willow",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "12",
    "page": "59",
    "sciName": "Salix uva-ursi Pursh",
    "comName": "bearberry willow",
    "dimensions": "38 x 28",
    "samples": []
  },
  {
    "volume": "12",
    "page": "46",
    "sciName": "Salix viminalis L ",
    "comName": "osier willow",
    "dimensions": "38.5 x 28",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1878"
      },
      {
        "places": "Harpswell",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "12",
    "page": "45",
    "sciName": "Salix x fragilis L ",
    "comName": "white willow [hybrid] ",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "East Livermore",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "10",
    "page": "78",
    "sciName": "Salsola kali L ",
    "comName": "saltwort",
    "dimensions": "37.3 x 28",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "5",
    "page": "93",
    "sciName": "Sambucus nigra L ",
    "comName": "black elderberry",
    "dimensions": "37.4 x 27.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Poland",
        "years": "1885"
      }
    ]
  },
  {
    "volume": "5",
    "page": "95",
    "sciName": "Sambucus racemosa L ",
    "comName": "red elderberry",
    "dimensions": "37.5 x 27.1",
    "samples": [
      {
        "places": "Northport",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1882"
      },
      {
        "places": "Rangeley",
        "years": "1898"
      },
      {
        "places": "Northport",
        "years": "1892"
      },
      {
        "places": "Shapleigh",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "9",
    "page": "13",
    "sciName": "Samolus valerandi L ",
    "comName": "seaside brookweed",
    "dimensions": "38.5 x 27.5",
    "samples": [
      {
        "places": "Winnegance",
        "years": "1899"
      },
      {
        "places": "Winnegance",
        "years": "1899"
      },
      {
        "places": "Winnegance",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "1",
    "page": "55",
    "sciName": "Sanguinaria canadensis L ",
    "comName": "blood-root",
    "dimensions": "31.6 x 24.9",
    "samples": [
      {
        "places": "Topsham",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1871"
      },
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "5",
    "page": "39",
    "sciName": "Sanicula marilandica L ",
    "comName": "Maryland sanicle",
    "dimensions": "33.7 x 23.8",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "2",
    "page": "40",
    "sciName": "Saponaria officinalis L ",
    "comName": "common soapwort",
    "dimensions": "37.5 x 27.6",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "1",
    "page": "51",
    "sciName": "Sarracenia purpurea L ",
    "comName": "purple pitcherplant",
    "dimensions": "38.9 x 24.8",
    "samples": [
      {
        "places": "Fayette",
        "years": "1871"
      },
      {
        "places": "Rangeley Region",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Fayette",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "11",
    "page": "36",
    "sciName": "Sassafras albidum (Nutt) Nees",
    "comName": "sassafras ",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Wells",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Wells",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "13",
    "page": "32",
    "sciName": "Scheuchzeria palustris L ",
    "comName": "pod-grass",
    "dimensions": "37.5 x 27.3",
    "samples": [
      {
        "places": "Bangor",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "7",
    "page": "48",
    "sciName": "Scorzoneroides autumnalis (L) Moench ",
    "comName": "fall-dandelion",
    "dimensions": "38.0 x 27.7",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Brunswick",
        "years": "1908"
      }
    ]
  },
  {
    "volume": "9",
    "page": "28",
    "sciName": "Scrophularia nodosa L ",
    "comName": "woodland figwort",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1900"
      },
      {
        "places": "Drake's Island",
        "years": "1897"
      },
      {
        "places": "Castine",
        "years": "1903"
      },
      {
        "places": "South Poland",
        "years": "1891"
      },
      {
        "places": "Orono",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "9",
    "page": "84",
    "sciName": "Scutellaria galericulata L ",
    "comName": "hooded skullcap",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "York Beach",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Harpswell",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "9",
    "page": "86",
    "sciName": "Scutellaria lateriflora L ",
    "comName": "mad dog skullcap",
    "dimensions": "30 x 25",
    "samples": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Squirrel Island",
        "years": "1887"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "87",
    "sciName": "Scutellaria parvula Michx ",
    "comName": "little skullcap",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "Dover",
        "years": "1896"
      },
      {
        "places": "North Berwick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "5",
    "page": "2",
    "sciName": "Sedum acre L ",
    "comName": "moss stonecrop",
    "dimensions": "37.8 x 27.6",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Camden",
        "years": "1902"
      },
      {
        "places": "Rockport",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "7",
    "page": "93",
    "sciName": "Senecio sylvaticus L ",
    "comName": "woodland ragwort",
    "dimensions": "37.5 x 27.3",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "North Lubec",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "7",
    "page": "33",
    "sciName": "Senecio vulgaris L ",
    "comName": "common ragwort",
    "dimensions": "38.1 x 27.0",
    "samples": [
      {
        "places": "Harpswell Neck",
        "years": "1870"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Harpswell Neck",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "5",
    "page": "36",
    "sciName": "Sicyos angulatus L ",
    "comName": "one-seeded burr-cucumber",
    "dimensions": "27.0 x 20.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "2",
    "page": "44",
    "sciName": "Silene antirrhina L ",
    "comName": "sleepy campion",
    "dimensions": "35.2 x 26.2 ",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "2",
    "page": "46",
    "sciName": "Silene dichotoma Ehrh ",
    "comName": "forkeDCampion",
    "dimensions": "37.0 x 26.9",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1894"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "2",
    "page": "47",
    "sciName": "Silene latifolia Poir ",
    "comName": "white campion",
    "dimensions": "37.5 x 27.0",
    "samples": [
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Sabattus",
        "years": "1901"
      },
      {
        "places": "East Livermore",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "2",
    "page": "41",
    "sciName": "Silene nivea (Nutt) Muhl ex Otth ",
    "comName": "snowy campion",
    "dimensions": "38.2 x 27.2",
    "samples": [
      {
        "places": "Orono",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "2",
    "page": "45",
    "sciName": "Silene noctiflora L ",
    "comName": "night-flowering campion",
    "dimensions": "37.7 x 26.8",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Gilead",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "2",
    "page": "43",
    "sciName": "Silene stellata (L) Ait f",
    "comName": "starry campion",
    "dimensions": "38.0 x 22.0",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "2",
    "page": "42",
    "sciName": "Silene stellata Ait ",
    "comName": "starry campion",
    "dimensions": "37.4 x 26.9",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1895"
      },
      {
        "places": "Brunswick",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "1",
    "page": "113",
    "sciName": "Sinapis arvensis L ",
    "comName": "corn charlock",
    "dimensions": "37.9 x 28.1",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "1",
    "page": "84",
    "sciName": "Sisymbrium altissimum L ",
    "comName": "tumbling hedge-mustard",
    "dimensions": "36.6 x 26.9",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1894"
      },
      {
        "places": "Brunswick",
        "years": "1905"
      }
    ]
  },
  {
    "volume": "1",
    "page": "82",
    "sciName": "Sisymbrium officinale (L) Scop ",
    "comName": "common hedge-mustard",
    "dimensions": "29.2 x 23.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "5",
    "page": "54",
    "sciName": "Sium suave Walt ",
    "comName": "water-parsnip",
    "dimensions": "37.9 x 26.9",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "14",
    "page": "4",
    "sciName": "Smilax herbacea L ",
    "comName": "carrion-flower",
    "dimensions": "37 x 27.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "2",
    "sciName": "Smilax rotundifolia L ",
    "comName": "common greenbrier",
    "dimensions": "36.5 x 25.5",
    "samples": []
  },
  {
    "volume": "10",
    "page": "20",
    "sciName": "Solanum dulcamara L ",
    "comName": "climbing nightshade",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Strong",
        "years": "1892"
      },
      {
        "places": "Brunswick",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "10",
    "page": "21",
    "sciName": "Solanum nigrum L ",
    "comName": "European nightshade",
    "dimensions": "27 x 20",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Pemaquid",
        "years": "1889"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Pemaquid",
        "years": "1889"
      }
    ]
  },
  {
    "volume": "10",
    "page": "19",
    "sciName": "Solanum rostratum Dunal",
    "comName": "horned nightshade",
    "dimensions": "36 x 27.5",
    "samples": [
      {
        "places": "Gardiner",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "6",
    "page": "80",
    "sciName": "Solidago arguta Ait ",
    "comName": "forest goldenrod",
    "dimensions": "37.2 x 27.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "6",
    "page": "64",
    "sciName": "Solidago bicolor L ",
    "comName": "white goldenrod",
    "dimensions": "37.5 x 26.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Van Buren",
        "years": "1880"
      },
      {
        "places": "Strong",
        "years": "1881"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Van Buren",
        "years": "1880"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "6",
    "page": "67",
    "sciName": "Solidago caesia L ",
    "comName": "axillary goldenrod",
    "dimensions": "38.0 x 27.9",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "6",
    "page": "85",
    "sciName": "Solidago canadensis L ",
    "comName": "Canada goldenrod",
    "dimensions": "38.0 x 27.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "6",
    "page": "66",
    "sciName": "Solidago flexicaulis L ",
    "comName": "zig-zag goldenrod",
    "dimensions": "38.0 x 27.5",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "6",
    "page": "86",
    "sciName": "Solidago gigantea Ait ",
    "comName": "smooth goldenrod",
    "dimensions": "37.8 x 28.0",
    "samples": [
      {
        "places": "South Poland",
        "years": "1892"
      },
      {
        "places": "Coplin Platform",
        "years": "1894"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Fayette",
        "years": "1877"
      },
      {
        "places": "Coplin Plantation",
        "years": "1894"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Hiram",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "6",
    "page": "70",
    "sciName": "Solidago leiocarpa DC ",
    "comName": "Cutler's goldenrod",
    "dimensions": "39.0 x 28.0",
    "samples": [
      {
        "places": "Mt. Katahdin",
        "years": "1900"
      },
      {
        "places": "Mt. Katahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "6",
    "page": "73",
    "sciName": "Solidago macrophylla Pursh ",
    "comName": "large-leaved goldenrod",
    "dimensions": "37.3 x 26.8",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Rangeley Region",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "6",
    "page": "83",
    "sciName": "Solidago nemoralis Ait ",
    "comName": "gray goldenrod",
    "dimensions": "38.0 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Bar Harbor",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "6",
    "page": "79",
    "sciName": "Solidago patula Muhl ex Willd",
    "comName": "rough-leaved goldenrod",
    "dimensions": "37.7 x 27.7",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "6",
    "page": "68",
    "sciName": "Solidago puberula Nutt ",
    "comName": "downy goldenrod",
    "dimensions": "38.0 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Livermore",
        "years": "1877"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Livermore Falls",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "6",
    "page": "81",
    "sciName": "Solidago rugosa P Mill ",
    "comName": "common wrinkle-leaved goldenrod",
    "dimensions": "37.5 x 37.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "6",
    "page": "75",
    "sciName": "Solidago sempervirens L ",
    "comName": "seaside goldenrod",
    "dimensions": "38.0 x 27.6",
    "samples": [
      {
        "places": "South Freeport",
        "years": "1905"
      },
      {
        "places": "West Bath",
        "years": "1874"
      },
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "WellsBeach ",
        "years": "1879"
      },
      {
        "places": "Winnegance",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "6",
    "page": "63",
    "sciName": "Solidago squarrosa Muhl ",
    "comName": "squarrose goldenrod",
    "dimensions": "37.7 x 27.5",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "6",
    "page": "69",
    "sciName": "Solidago uliginosa Nutt ",
    "comName": "bog goldenrod",
    "dimensions": "37.2 x 26.9",
    "samples": [
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Brunswick",
        "years": "1890"
      },
      {
        "places": "Sorrento",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "6",
    "page": "82",
    "sciName": "Solidago ulmifolia Muhl ex Willd",
    "comName": "elm-leaved goldenrod",
    "dimensions": "38.0 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "7",
    "page": "74",
    "sciName": "Sonchus arvensis L ",
    "comName": "field sow-thistle",
    "dimensions": "37.5 x 27.0",
    "samples": [
      {
        "places": "Houlton",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "7",
    "page": "73",
    "sciName": "Sonchus asper (L) Hill ",
    "comName": "spiny-leaved sow-thistle",
    "dimensions": "37.5 x 27.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "71",
    "sciName": "Sonchus oleraceus L ",
    "comName": "common sow-thistle",
    "dimensions": "37.5 x 27.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "4",
    "page": "80",
    "sciName": "Sorbus americana Marsh ",
    "comName": "American mountain-ash",
    "dimensions": "35.5 x 26.4",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Isle au Haut",
        "years": "1909"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "4",
    "page": "116",
    "sciName": "Sorbus aucuparia L ",
    "comName": "European mountain ash",
    "dimensions": "37.2 x 27.0",
    "samples": []
  },
  {
    "volume": "13",
    "page": "6",
    "sciName": "Sparganium americanum Nutt ",
    "comName": "American bur-reed",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Livermore",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "13",
    "page": "9",
    "sciName": "Sparganium angustifolium Michx",
    "comName": "narrow-leaved bur-reed",
    "dimensions": "37.5 x 27.5",
    "samples": []
  },
  {
    "volume": "13",
    "page": "7",
    "sciName": "Sparganium emersum Rehmann",
    "comName": "simple-stemmed bur-reed",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "5",
    "sciName": "Sparganium eurycarpum Engelm ex Gray",
    "comName": "great bur-reed",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "West Baldwin",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "13",
    "page": "8",
    "sciName": "Sparganium fluctuans (Morong) B L Robins ",
    "comName": "floating bur-reed",
    "dimensions": "38.5 x 28",
    "samples": [
      {
        "places": "Readfield",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "13",
    "page": "10",
    "sciName": "Sparganium natans L ",
    "comName": "arctic bur-reed",
    "dimensions": "38.3 x 27.5 ",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Kents Hill",
        "years": "1892"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "2",
    "page": "72",
    "sciName": "Spergula arvensis L ",
    "comName": "corn spurry",
    "dimensions": "37.3 x 27.4",
    "samples": [
      {
        "places": "Topsham",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "2",
    "page": "71",
    "sciName": "Spergularia canadensis Griseb ",
    "comName": "Canada sand-spurry",
    "dimensions": "34.0 x 23.8",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "2",
    "page": "69",
    "sciName": "Spergularia marina Griseb ",
    "comName": "saltmarsh sand-spurry",
    "dimensions": "23.5 x 17.0",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Wells",
        "years": "1881"
      },
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "2",
    "page": "68",
    "sciName": "Spergularia rubra (L) J & K Presl ",
    "comName": "red sand-spurry",
    "dimensions": "18.2 x 17.4",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "4",
    "page": "22",
    "sciName": "Spiraea alba Du Roi ",
    "comName": "white meadowsweet",
    "dimensions": "37.5 x 27.1",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Rangeley",
        "years": "1892"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "4",
    "page": "23",
    "sciName": "Spiraea tomentosa L ",
    "comName": "rosy meadowsweet",
    "dimensions": "38.5 x 26.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "13",
    "page": "64",
    "sciName": "Spiranthes cernua (L) L C Rich ",
    "comName": "nodding ladies'-tresses",
    "dimensions": "23.7 x 19",
    "samples": [
      {
        "places": "Topsham",
        "years": "1870"
      },
      {
        "places": "Winnegance",
        "years": "1911"
      }
    ]
  },
  {
    "volume": "13",
    "page": "65",
    "sciName": "Spiranthes lacera Raf ",
    "comName": "slender ladies'-tresses",
    "dimensions": "27.5 x 18",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "13",
    "page": "90",
    "sciName": "Spiranthes lucida (H H Eat) Ames",
    "comName": "shining ladies'-tresses",
    "dimensions": "37 x 27",
    "samples": []
  },
  {
    "volume": "13",
    "page": "63",
    "sciName": "Spiranthes romanzoffiana Cham",
    "comName": "hooded ladies'-tresses",
    "dimensions": "37.5 x 27.5",
    "samples": []
  },
  {
    "volume": "13",
    "page": "1",
    "sciName": "Spirodela polyrrhiza (L) Schleid ",
    "comName": "common duck-meal",
    "dimensions": "38 x 26.5",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "9",
    "page": "89",
    "sciName": "Stachys palustris L ",
    "comName": "marsh hedge-nettle",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "East Livermore",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "2",
    "page": "57",
    "sciName": "Stellaria alsine Grimm ",
    "comName": "bog stitchwort",
    "dimensions": "37.6 x 27.0",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Bustin's Island",
        "years": "1909"
      },
      {
        "places": "Old Orchard Beach",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "2",
    "page": "59",
    "sciName": "Stellaria borealis Bigelow ",
    "comName": "boreal stitchwort",
    "dimensions": "29.9 x 24.1",
    "samples": [
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Brunswick",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "2",
    "page": "55",
    "sciName": "Stellaria graminea L ",
    "comName": "grass-leaved stitchwort",
    "dimensions": "37.7 x 28.1",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "2",
    "page": "60",
    "sciName": "Stellaria humifusa Rottb ",
    "comName": "saltmarsh stitchwort",
    "dimensions": "38.3 x 27.5",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "2",
    "page": "54",
    "sciName": "Stellaria media (L) Vill ",
    "comName": "common stitchwort",
    "dimensions": "38.5 x 27.9",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1908"
      }
    ]
  },
  {
    "volume": "14",
    "page": "21",
    "sciName": "Streptopus amplexifolius (L) DC ",
    "comName": "clasping-leaved twistedstalk",
    "dimensions": "26.5 x 20.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "23",
    "sciName": "Streptopus lanceolatus (Ait) Reveal",
    "comName": "lance-leaved twistedstalk",
    "dimensions": "25.5 x 20",
    "samples": []
  },
  {
    "volume": "10",
    "page": "76",
    "sciName": "Suaeda calceoliformis (Hook) Moq ",
    "comName": "American sea-blite ",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "10",
    "page": "77",
    "sciName": "Suaeda linearis (Ell) Moq ",
    "comName": "annual sea-blite",
    "dimensions": "37 x 27.5 ",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Sorrento",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "10",
    "page": "74",
    "sciName": "Suaeda maritima (L) Dumort",
    "comName": "herbaceaous sea-blite",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1901"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      },
      {
        "places": "Sorrento",
        "years": "1891"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      },
      {
        "places": "Harpswell",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "5",
    "page": "79",
    "sciName": "Swida alternifolia (L f) Small ",
    "comName": "alternate-leaved dogwood",
    "dimensions": "30.0 x 24.1",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "5",
    "page": "78",
    "sciName": "Swida racemosa (Lam) Moldenke ",
    "comName": "gray dogwood",
    "dimensions": "31.0 x 24.4",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "5",
    "page": "72",
    "sciName": "Swida rugosa (Lam ) Rydb ",
    "comName": "round-leaved dogwood",
    "dimensions": "39.0 x 27.2",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Chesterville Ridge",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "5",
    "page": "113",
    "sciName": "Swida rugosa (Lam) Rydb ",
    "comName": "round-leaved dogwood",
    "dimensions": "37.3 x 26.8",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Chesterville Ridge",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "5",
    "page": "74",
    "sciName": "Swida sericea (L) Holub ",
    "comName": "red-osier dogwood",
    "dimensions": "30.5 x 24.9",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Lewiston Falls",
        "years": "1878"
      },
      {
        "places": "Livermore Falls",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "6",
    "page": "34",
    "sciName": "Symphyotrichum ciliolatum (Lindl) A & D Love",
    "comName": "Lindley's American aster",
    "dimensions": "38.9 x 27.1",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1881"
      },
      {
        "places": "West Bath",
        "years": "1891"
      },
      {
        "places": "Brunswick",
        "years": "1894"
      },
      {
        "places": "Greenvale",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "6",
    "page": "32",
    "sciName": "Symphyotrichum dumosum (L) Nesom",
    "comName": "bushy American-aster",
    "dimensions": "37.5 x 27.6",
    "samples": [
      {
        "places": "Wells",
        "years": "1876"
      },
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "East Livermore",
        "years": "1877"
      },
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "6",
    "page": "35",
    "sciName": "Symphyotrichum ericoides (L) Nesom ",
    "comName": "heath American-aster",
    "dimensions": "37.5 x 26.4",
    "samples": [
      {
        "places": "Farmington",
        "years": "1894"
      },
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Litchfield",
        "years": "1896"
      },
      {
        "places": "Mattawamkeag",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "6",
    "page": "40",
    "sciName": "Symphyotrichum lanceolatum (Willd) Nesom ",
    "comName": "lance-leaved American-aster",
    "dimensions": "37.8 x 27.4",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Bradley",
        "years": "1880"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Livermore Falls",
        "years": "1877"
      },
      {
        "places": "Orono",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "6",
    "page": "39",
    "sciName": "Symphyotrichum lateriflorum (L) A & D Love",
    "comName": "calico American-aster",
    "dimensions": "37.6 x 27.5",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1877"
      },
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Livermore Falls",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "6",
    "page": "49",
    "sciName": "Symphyotrichum novae-angliae (L) Nesom ",
    "comName": "New England American-aster",
    "dimensions": "37.2 x 26.1",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "6",
    "page": "43",
    "sciName": "Symphyotrichum novae-belgii (L) Nesom ",
    "comName": "New York American-aster",
    "dimensions": "36.5 x 26.2",
    "samples": [
      {
        "places": "Sorrento",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "6",
    "page": "42",
    "sciName": "Symphyotrichum novi-belgii (L) Nesom",
    "comName": "New York American-aster",
    "dimensions": "37.0 x 27.5",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1877"
      },
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "6",
    "page": "46",
    "sciName": "Symphyotrichum novi-belgii (L) Nesom ",
    "comName": "New York American-aster",
    "dimensions": "29.9 x 26.1",
    "samples": [
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "6",
    "page": "30",
    "sciName": "Symphyotrichum patens (Ait) Nesom ",
    "comName": "late purple American-aster",
    "dimensions": "36.5 x 26.5",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1877"
      },
      {
        "places": "WellsBeach ",
        "years": "1879"
      },
      {
        "places": "East Livermore",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "6",
    "page": "100",
    "sciName": "Symphyotrichum puniceum (L) A & D Love",
    "comName": "purple-stemmed American-aster",
    "dimensions": "37.0 x 27.3",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "6",
    "page": "47",
    "sciName": "Symphyotrichum puniceum (L) A & D Love var. puniceum",
    "comName": "purple-stemmed American-aster",
    "dimensions": "37.1 x 27.9",
    "samples": [
      {
        "places": "Wells",
        "years": "1877"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Van Buren",
        "years": "1880"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "6",
    "page": "102",
    "sciName": "Symphyotrichum puniceum (L) A & Love ",
    "comName": "purple-stemmed American-aster",
    "dimensions": "33.7 x 27.4",
    "samples": [
      {
        "places": "Van Buren",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "6",
    "page": "105",
    "sciName": "Symphyotrichum tenuifolium (L) Nesom",
    "comName": "perennial saltmarsh American-aster",
    "dimensions": "37.0 x 23.5",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Caribou",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "6",
    "page": "37",
    "sciName": "Symphyotrichum tradescantii (L) Nesom ",
    "comName": "Tradescant's American-aster",
    "dimensions": "37.5 x 27.8",
    "samples": [
      {
        "places": "Livermore Falls",
        "years": "1878"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Orono",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "6",
    "page": "31",
    "sciName": "Symphyotrichum undulatum (L) Nesom ",
    "comName": "wavy-leaved American-aster",
    "dimensions": "38.0 x 27.6",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1879"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "10",
    "page": "5",
    "sciName": "Symphytum officinale L ",
    "comName": "common comfrey",
    "dimensions": "27 x 19.5",
    "samples": [
      {
        "places": "Greenvale",
        "years": "1894"
      },
      {
        "places": "Fayette",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "12",
    "page": "93",
    "sciName": "Symplocarpus foetidus (L) Salisb ex Nutt ",
    "comName": "skunk-cabbage",
    "dimensions": "33 x 24",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Livermore",
        "years": "1871"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "21",
    "sciName": "Tanacetum bipinnatum (L) Schultz-Bip ",
    "comName": "eastern tansy",
    "dimensions": "37.8 x 26.4",
    "samples": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "7",
    "page": "65",
    "sciName": "Taraxacum officinale G H Weber ex Wiggers",
    "comName": "common dandelion",
    "dimensions": "37.9 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "12",
    "page": "85",
    "sciName": "Taxus canadensis Marsh ",
    "comName": "American yew",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Saddleback Mountain",
        "years": "1894"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "9",
    "page": "63",
    "sciName": "Teucrium canadense L ",
    "comName": "American germander",
    "dimensions": "30.5 x 23.5",
    "samples": [
      {
        "places": "Cundy's Harbor",
        "years": "1878"
      },
      {
        "places": "Squirrel Island",
        "years": "1878"
      },
      {
        "places": "Sorrento",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Fort Popham",
        "years": "1907"
      },
      {
        "places": "Chebeague",
        "years": "1902"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "1",
    "page": "14",
    "sciName": "Thalictrum doicium L ",
    "comName": "early meadow-rue",
    "dimensions": "39.8 x 28.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "13",
    "sciName": "Thalictrum pubescens Pursh ",
    "comName": "tall meadow-rue",
    "dimensions": "38.7 x 28.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Moosehead Lake",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Brunswick",
        "years": "1874"
      },
      {
        "places": "Moosehead Lake",
        "years": "1895"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Livermore Falls",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "1",
    "page": "88",
    "sciName": "Thlaspi arvense L ",
    "comName": "field penny-cress",
    "dimensions": "37.3 x 25.1",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Brunswick",
        "years": "1907"
      },
      {
        "places": "Brunswick",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "12",
    "page": "81",
    "sciName": "Thuja occidentalis L ",
    "comName": "northern white-cedar",
    "dimensions": "38 x 28.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "103",
    "sciName": "Tiarella cordifolia L ",
    "comName": "foam flower",
    "dimensions": "26.3 x 18.9",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "2",
    "page": "89",
    "sciName": "Tilia americana L ",
    "comName": "American linden",
    "dimensions": "36.9 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1874"
      },
      {
        "places": "East Livermore",
        "years": "1896"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "29",
    "sciName": "Toxicodendron radicans (L) Kuntze ",
    "comName": "poison-ivy",
    "dimensions": "25.6 x 20.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "3",
    "page": "28",
    "sciName": "Toxicodendron vernix (L) Kuntze",
    "comName": "poison-sumac",
    "dimensions": "37.8 x 26.7",
    "samples": [
      {
        "places": "Chesterville",
        "years": "1877"
      },
      {
        "places": "Fayette",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1893"
      },
      {
        "places": "Chesterville Ridge",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "7",
    "page": "80",
    "sciName": "Tragopogon pratensis L ",
    "comName": "meadow goat's beard",
    "dimensions": "37.1 x 26.0",
    "samples": [
      {
        "places": "Machias",
        "years": "1903"
      },
      {
        "places": "Portland",
        "years": "1898"
      },
      {
        "places": "Castine",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "2",
    "page": "86",
    "sciName": "Triadenum virginicum Raf ",
    "comName": "Virginia marsh-Saint John's-wort",
    "dimensions": "37.6 x 27.4",
    "samples": [
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "Fayette Ridge",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "14",
    "page": "17",
    "sciName": "Triantha glutinosa (Michx) Baker",
    "comName": "sticky false asphodel",
    "dimensions": "30.5 x 24",
    "samples": []
  },
  {
    "volume": "9",
    "page": "64",
    "sciName": "Trichostema dichotomum L ",
    "comName": "forked bluecurls",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Scarborough",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "3",
    "page": "37",
    "sciName": "Trifolium arvense L ",
    "comName": "rabbit-foot clover",
    "dimensions": "27.9 x 18.0 ",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "3",
    "page": "42",
    "sciName": "Trifolium campestre Schreb ",
    "comName": "pinnate hop clover",
    "dimensions": "27.0 x 18.2",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Rockland",
        "years": "1903"
      },
      {
        "places": "Isle au Haut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "3",
    "page": "41",
    "sciName": "Trifolium hybridum L ",
    "comName": "alsike clover",
    "dimensions": "36.2 x 26.2",
    "samples": [
      {
        "places": "Mount Desert",
        "years": "1888"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "3",
    "page": "39",
    "sciName": "Trifolium medium L ",
    "comName": "zigzag clover",
    "dimensions": "36.2 x 27.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "3",
    "page": "38",
    "sciName": "Trifolium pratense L ",
    "comName": "reDClover",
    "dimensions": "36.1 x 26.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "3",
    "page": "40",
    "sciName": "Trifolium repens L ",
    "comName": "white clover",
    "dimensions": "37.2 x 27.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "13",
    "page": "31",
    "sciName": "Triglochin maritima L ",
    "comName": "saltmarsh arrow-grass",
    "dimensions": "36.5 x 15.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1887"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "13",
    "page": "30",
    "sciName": "Triglochin palustre L ",
    "comName": "marsh arrow-grass",
    "dimensions": "38 x 26",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "14",
    "page": "11",
    "sciName": "Trillium cernuum L ",
    "comName": "nodding wakerobin",
    "dimensions": "36.5 x 26.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "6",
    "sciName": "Trillium erectum L ",
    "comName": "red wakerobin",
    "dimensions": "26 x 20.5",
    "samples": []
  },
  {
    "volume": "14",
    "page": "12",
    "sciName": "Trillium undulatum Willd ",
    "comName": "painted wakerobin",
    "dimensions": "26.2 x 19.5",
    "samples": []
  },
  {
    "volume": "5",
    "page": "92",
    "sciName": "Triosteum aurantiacum Bickn ",
    "comName": "orange-fruited horse-gentian",
    "dimensions": "37.7 x 27.5",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Drake's Island",
        "years": "1905"
      }
    ]
  },
  {
    "volume": "12",
    "page": "77",
    "sciName": "Tsuga canadensis (L) Carr ",
    "comName": "eastern hemlock",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "76",
    "sciName": "Tsunga canadensis Carr",
    "comName": "eastern hemlock",
    "dimensions": "38.3 x 28.3",
    "samples": []
  },
  {
    "volume": "1",
    "page": "70",
    "sciName": "Turritis glabra L ",
    "comName": "tower-mustard",
    "dimensions": "37.8 x 28.0",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Ashland",
        "years": "1881"
      },
      {
        "places": "Wells Beach",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "6",
    "page": "23",
    "sciName": "Tussilago farfara L ",
    "comName": "coltsfoot",
    "dimensions": "36.5 x 26.3",
    "samples": [
      {
        "places": "Bath",
        "years": "1911"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "13",
    "page": "4",
    "sciName": "Typha angustifolia L ",
    "comName": "narrow-leaveDCat-tail",
    "dimensions": "38 x 27.3",
    "samples": [
      {
        "places": "Chesterville",
        "years": "1878"
      },
      {
        "places": "West Farmington",
        "years": "1878"
      },
      {
        "places": "Drake's Island",
        "years": "1898"
      },
      {
        "places": "Drake's Island",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "13",
    "page": "2",
    "sciName": "Typha latifolia L ",
    "comName": "broad-leaveDCat-tail",
    "dimensions": "38 x 26",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "11",
    "page": "53",
    "sciName": "Ulmus americana L ",
    "comName": "American elm",
    "dimensions": "29 x 22",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "11",
    "page": "57",
    "sciName": "Urtica dioica L ",
    "comName": "stinging nettle",
    "dimensions": "38.5 x 28.5",
    "samples": [
      {
        "places": "Topsham",
        "years": "1892"
      },
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      },
      {
        "places": "Orono",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "9",
    "page": "20",
    "sciName": "Utricularia cornuta Michx ",
    "comName": "horned bladderwort",
    "dimensions": "35 x 27",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Orono",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "9",
    "page": "15",
    "sciName": "Utricularia inflata Walt ",
    "comName": "swollen bladderwort",
    "dimensions": "37.5 x 26",
    "samples": [
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Wayne",
        "years": "1896"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "9",
    "page": "17",
    "sciName": "Utricularia intermedia Hayne",
    "comName": "flat-leaved bladderwort",
    "dimensions": "38 x 28",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Bradley",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "19",
    "sciName": "Utricularia resupinata B D Greene ex Bigelow",
    "comName": "resupinate bladderwort",
    "dimensions": "29 x 27",
    "samples": [
      {
        "places": "Fayette Ridge",
        "years": "1877"
      },
      {
        "places": "Isle au Haut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "9",
    "page": "16",
    "sciName": "Utricularia vulgaris L ",
    "comName": "greater bladderwort",
    "dimensions": "37.5 x 26",
    "samples": [
      {
        "places": "Livermore",
        "years": "1878"
      },
      {
        "places": "Bradley",
        "years": "1891"
      },
      {
        "places": "East Livermore",
        "years": "1893"
      },
      {
        "places": "Wilton",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "14",
    "page": "18",
    "sciName": "Uvularia grandiflora J E Sm ",
    "comName": "large-flowered bellwort",
    "dimensions": "29 x 20",
    "samples": []
  },
  {
    "volume": "14",
    "page": "20",
    "sciName": "Uvularia sessifolia L ",
    "comName": "sessile-leaved bellwort",
    "dimensions": "33.5 x 22.5",
    "samples": []
  },
  {
    "volume": "2",
    "page": "43VB",
    "sciName": "Vaccaria hispanica Rauschert ",
    "comName": "cowcockle",
    "dimensions": "39.8 x 27.8",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "8",
    "page": "23",
    "sciName": "Vaccinium cespitosum Michx ",
    "comName": "dwarf blueberry",
    "dimensions": "27.5 x 18.5",
    "samples": [
      {
        "places": "Phillips",
        "years": "1894"
      },
      {
        "places": "Phillips",
        "years": "1894"
      },
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Strong",
        "years": "1881"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Phillips",
        "years": "1882"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Saint Francis",
        "years": "1881"
      },
      {
        "places": "Mt. Agamenticus",
        "years": "1879"
      },
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Phillips",
        "years": "1882"
      },
      {
        "places": "Phillips",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "8",
    "page": "34",
    "sciName": "Vaccinium corymbosom L ",
    "comName": "highbush blueberry",
    "dimensions": "30 x 23.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "South Poland",
        "years": "1899"
      },
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "17",
    "sciName": "Vaccinium macrocarpon Ait ",
    "comName": "Large cranberry",
    "dimensions": "38.3 x 27",
    "samples": [
      {
        "places": "South Poland",
        "years": "1892"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "8",
    "page": "31",
    "sciName": "Vaccinium myrtilloides Michx.",
    "comName": "velvet-leaved bluberry",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Ashland",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Chesterville",
        "years": "1896"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "8",
    "page": "16",
    "sciName": "Vaccinium oxycoccos L ",
    "comName": "Small cranberry",
    "dimensions": "30 x 23.5",
    "samples": [
      {
        "places": "Bangor",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Readfield",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "8",
    "page": "33",
    "sciName": "Vaccinium pallidum Ait ",
    "comName": "hillside blueberry",
    "dimensions": "38 x 27.7",
    "samples": [
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "8",
    "page": "21",
    "sciName": "Vaccinium uliginosum L ",
    "comName": "Alpine blueberry",
    "dimensions": "37 x 27",
    "samples": [
      {
        "places": "Fort Kent",
        "years": "1881"
      },
      {
        "places": "Mount Katahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "8",
    "page": "19",
    "sciName": "Vaccinium vitis-idaea L ",
    "comName": "Mountain cranberry",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Mount Desert",
        "years": "1881"
      },
      {
        "places": "Mount Abraham",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1883"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Mount Kineo",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "13",
    "page": "45",
    "sciName": "Vallisneria americana Michx ",
    "comName": "tape-grass",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Waterville",
        "years": "1898"
      },
      {
        "places": "East Eddington",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "71v",
    "sciName": "Veratrum viride Ait",
    "comName": "American false hellebore",
    "dimensions": "35.5 x 27.2",
    "samples": []
  },
  {
    "volume": "9",
    "page": "25",
    "sciName": "Verbascum blattaria L ",
    "comName": "moth mullein",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Auburn",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "9",
    "page": "24",
    "sciName": "Verbascum thapsus L ",
    "comName": "common mullein",
    "dimensions": "34.5 x 24",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "59",
    "sciName": "Verbena hastata L ",
    "comName": "blue vervain",
    "dimensions": "37 x 25.5",
    "samples": []
  },
  {
    "volume": "9",
    "page": "60",
    "sciName": "Verbena urticifolia L ",
    "comName": "white vervain",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "9",
    "page": "43",
    "sciName": "Veronica agrestis L ",
    "comName": "green field speedwell",
    "dimensions": "33.5 x 23.5",
    "samples": []
  },
  {
    "volume": "9",
    "page": "38",
    "sciName": "Veronica americana Schwein ex Benth ",
    "comName": "American speedwell",
    "dimensions": "30.3 x 23.5",
    "samples": [
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "East Livermore",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "9",
    "page": "39",
    "sciName": "Veronica chamaedrys L ",
    "comName": "germander speedwell",
    "dimensions": "38.5 x 27.5",
    "samples": []
  },
  {
    "volume": "9",
    "page": "40",
    "sciName": "Veronica officinalis L ",
    "comName": "common speedwell",
    "dimensions": "38 x 27",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Houlton",
        "years": "1881"
      },
      {
        "places": "Winnegance",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "9",
    "page": "42",
    "sciName": "Veronica peregrina L ",
    "comName": "purslane speedwell",
    "dimensions": "37.5 x 27",
    "samples": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "9",
    "page": "44",
    "sciName": "Veronica persica Poir ",
    "comName": "bird's-eye speedwell",
    "dimensions": "37.5 x 27.5",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "Lisbon Falls",
        "years": "1906"
      }
    ]
  },
  {
    "volume": "9",
    "page": "37",
    "sciName": "Veronica scutellata L ",
    "comName": "narrow-leaved speedwell",
    "dimensions": "26.5 x 20.5",
    "samples": [
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "East Livermore",
        "years": "1894"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "9",
    "page": "41",
    "sciName": "Veronica serpyllifolia L ",
    "comName": "thyme-leaved speedwell",
    "dimensions": "30 x 24",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Moosehead Lake",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "5",
    "page": "103",
    "sciName": "Viburnum acerifolium L ",
    "comName": "maple-leaved viburnum",
    "dimensions": "30.8 x 25.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1872"
      },
      {
        "places": "Fayette",
        "years": "1876"
      },
      {
        "places": "Kents Hill",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "101",
    "sciName": "Viburnum dentatum L ",
    "comName": "smooth arrowwood",
    "dimensions": "28.7 x 23.9",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "5",
    "page": "105",
    "sciName": "Viburnum edule (Michx) Raf ",
    "comName": "squashberry",
    "dimensions": "38.1 x 27.4",
    "samples": []
  },
  {
    "volume": "5",
    "page": "107",
    "sciName": "Viburnum lantanoides Michx ",
    "comName": "hobblebush",
    "dimensions": "34.0 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Fayette",
        "years": "1879"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Avon",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "5",
    "page": "97",
    "sciName": "Viburnum lentago L ",
    "comName": "nannyberry",
    "dimensions": "30.5 x 24.1",
    "samples": [
      {
        "places": "Fayette",
        "years": "1877"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "5",
    "page": "99",
    "sciName": "Viburnum nudum L ",
    "comName": "withe-rod",
    "dimensions": "30.0 x 24.3",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Caribou",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "5",
    "page": "106",
    "sciName": "Viburnum opulus L ",
    "comName": "highbush-cranberry",
    "dimensions": "29.4 x 25.6",
    "samples": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "3",
    "page": "64",
    "sciName": "Vicia cracca L ",
    "comName": "bird vetch",
    "dimensions": "26.5 x 17.0",
    "samples": [
      {
        "places": "South Portland ",
        "years": "1895"
      },
      {
        "places": "Dover",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "3",
    "page": "63",
    "sciName": "Vicia sativa L ",
    "comName": "common vetch",
    "dimensions": "34.0 x 25.3",
    "samples": [
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "3",
    "page": "63V",
    "sciName": "Vicia tetrasperma (L) Schreb ",
    "comName": "four-seeded vetch",
    "dimensions": "26.0 x 20.3",
    "samples": []
  },
  {
    "volume": "2",
    "page": "33",
    "sciName": "Viola adunca Sm ",
    "comName": "hook-spurred violet",
    "dimensions": "37.7 x 27.4",
    "samples": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      },
      {
        "places": "Brunswick",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "2",
    "page": "13",
    "sciName": "Viola blanda Willd ",
    "comName": "sweet white violet",
    "dimensions": "38.2 x 27.9",
    "samples": [
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "South Poland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "2",
    "page": "1",
    "sciName": "Viola cucullata Ait ",
    "comName": "blue marsh violet",
    "dimensions": "18.7 x 13.7",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Caribou",
        "years": "1881"
      },
      {
        "places": "Brunswick",
        "years": "1901"
      },
      {
        "places": "Orono",
        "years": "1892"
      },
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "Winnegance",
        "years": "1907"
      },
      {
        "places": "Marshfield",
        "years": "1902"
      },
      {
        "places": "Isle au Haut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "2",
    "page": "29",
    "sciName": "Viola labradorica Schrank ",
    "comName": "American dog violet",
    "dimensions": "37.4 x 27.6",
    "samples": [
      {
        "places": "Shapleigh",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "2",
    "page": "23",
    "sciName": "Viola lanceolota L ",
    "comName": "lance-leaved violet",
    "dimensions": "23.3 x 19.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Fort Kent",
        "years": "1880"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "West Baldwin",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "2",
    "page": "19",
    "sciName": "Viola pallens (Banks ex DC) Brainerd ",
    "comName": "smooth white violet",
    "dimensions": "19.1 x 14.2",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Orono",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "2",
    "page": "14",
    "sciName": "Viola primulifolia L ",
    "comName": "primrose-leaved violet",
    "dimensions": "29.3 x 21.4",
    "samples": [
      {
        "places": "East Livermore",
        "years": "1878"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "2",
    "page": "26",
    "sciName": "Viola pubescens var scabriuscula Torr & Gray ",
    "comName": "yellow forest violet",
    "dimensions": "37.2 x 27.3",
    "samples": [
      {
        "places": "Topsham",
        "years": "1870"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Gardiner",
        "years": "1896"
      },
      {
        "places": "Gray",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "2",
    "page": "22",
    "sciName": "Viola renifolia Gray ",
    "comName": "kidney-leaved violet",
    "dimensions": "36.6 x 27.3",
    "samples": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "2",
    "page": "24",
    "sciName": "Viola rotundifolia Michx ",
    "comName": "round-leaved violet",
    "dimensions": "37.8 x 27.0",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1873"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      },
      {
        "places": "Presque Isle",
        "years": "1880"
      },
      {
        "places": "Presque Isle",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "2",
    "page": "8",
    "sciName": "Viola sagittata Ait ",
    "comName": "arrowhead violet",
    "dimensions": "37.8 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "West Bath",
        "years": "1902"
      },
      {
        "places": "South Poland",
        "years": "1893"
      },
      {
        "places": "West Baldwin",
        "years": "1897"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "2",
    "page": "18",
    "sciName": "Viola selkirkii Pursh ",
    "comName": "great-spurred violet",
    "dimensions": "25.2 x 19.2",
    "samples": [
      {
        "places": "Fayette",
        "years": "1880"
      },
      {
        "places": "Patten",
        "years": "1880"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Avon",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "2",
    "page": "9",
    "sciName": "Viola sororia Willd ",
    "comName": "woolly blue violet",
    "dimensions": "37.5 x 27.7",
    "samples": [
      {
        "places": "Gray",
        "years": "1908"
      },
      {
        "places": "West Bath",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "3",
    "page": "14",
    "sciName": "Vitis labrusca L ",
    "comName": "fox grape",
    "dimensions": "37.2 x 26.7",
    "samples": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "3",
    "page": "16V",
    "sciName": "Vitis riparia Michx ",
    "comName": "river grape",
    "dimensions": "37.4 x 25.7",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "South Poland",
        "years": "1895"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Bethel",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "3",
    "page": "15",
    "sciName": "Vitis vulpina L ",
    "comName": "frost grape",
    "dimensions": "37.2 x 26.3",
    "samples": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Farmington",
        "years": "1878"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "Farmington",
        "years": "1878"
      },
      {
        "places": "Livermore Falls",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "7",
    "page": "2",
    "sciName": "Xanthium strumarium L ",
    "comName": "rough cocklebur",
    "dimensions": "37.9 x 26.3",
    "samples": [
      {
        "places": "Wells Beach",
        "years": "1879"
      },
      {
        "places": "Gardiner",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "14",
    "page": "70",
    "sciName": "Xyris smalliana Nash",
    "comName": "Small's yellow-eyed-grass",
    "dimensions": "38.5 x 28",
    "samples": []
  },
  {
    "volume": "5",
    "page": "48",
    "sciName": "Ziza aurea (L) WDJ Koch ",
    "comName": "common golden Alexanders",
    "dimensions": "37.5 x 26.5",
    "samples": [
      {
        "places": "Waterville",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "5",
    "page": "118",
    "sciName": "Zizia aurea (L) W D J Koch ",
    "comName": "common golden Alexanders",
    "dimensions": "27.1 x 19.6",
    "samples": [
      {
        "places": "Waterville",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "13",
    "page": "12",
    "sciName": "Zostera marina L ",
    "comName": "eel-grass",
    "dimensions": "38 x 27.5",
    "samples": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Brunswick",
        "years": "1895"
      }
    ]
  }
]