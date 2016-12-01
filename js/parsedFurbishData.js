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
    "volume": "3",
    "page": "13",
    "sciName": "Rhamnus anifolia L'HÃ©r",
    "comName": "Alder-leaved Buckthorn",
    "entries": [
      {
        "places": "Wells",
        "years": "1876"
      },
      {
        "places": "FortFairfield",
        "years": "1880"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "MayosPond",
        "years": "1897"
      },
      {
        "places": "Patten",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "27",
    "sciName": "Potamogeton confervoides Reichenb",
    "comName": "Alga-like Pondweed",
    "entries": [
      {
        "places": "RoundPond",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "9",
    "page": "33",
    "sciName": "Mimulus ringens L",
    "comName": "Allegheny Monkey-flower",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "CoplinPlantation",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "1",
    "page": "57",
    "sciName": "Adlumia fungosa (Ait) Greene ex B S P",
    "comName": "Allegheny-vine",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "1",
    "page": "63, 103",
    "sciName": "Cardamine bellidifolia L",
    "comName": "Alpine Bitter-cress",
    "entries": [
      {
        "places": "MtKatahdin",
        "years": "1900"
      },
      {
        "places": "West Baldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "8",
    "page": "21, 39",
    "sciName": "Vaccinium uliginosum L",
    "comName": "Alpine Blueberry",
    "entries": [
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "Mount Katahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "3",
    "page": "50",
    "sciName": "Astragalus alpinus L",
    "comName": "Alpine Milk-vetch",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1880"
      },
      {
        "places": "FortKent",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "8",
    "page": "55",
    "sciName": "Kalmia procumbens L",
    "comName": "Alpine-azalea",
    "entries": [
      {
        "places": "MountKatahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "3",
    "page": "41",
    "sciName": "Trifolium hybridum L",
    "comName": "Alsike Clover",
    "entries": [
      {
        "places": "MountDesert",
        "years": "1888"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "119",
    "sciName": "Myriophyllum alterniflorum DC",
    "comName": "Alternate-flowered Water-milfoil",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "FortFairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "5",
    "page": "79, 80, 115",
    "sciName": "Swida alternifolia (L f) Small",
    "comName": "Alternate-leaved Dogwood",
    "entries": [
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
    "volume": "12",
    "page": "19, 20",
    "sciName": "Fagus grandifolia Ehrh",
    "comName": "American Beech",
    "entries": [
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
    "volume": "3",
    "page": "12",
    "sciName": "Celastrus scandens L",
    "comName": "American Bittersweet",
    "entries": [
      {
        "places": "Farmington",
        "years": "1875"
      },
      {
        "places": "SouthPoland",
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
    "volume": "13",
    "page": "6",
    "sciName": "Sparganium americanum Nutt",
    "comName": "American Bur-reed",
    "entries": [
      {
        "places": "SouthPoland",
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
    "volume": "7",
    "page": "32",
    "sciName": "Erechtites hieraciifolius (L) Raf",
    "comName": "American Burnweed",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Caribou",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "5",
    "page": "42, 112",
    "sciName": "Heracleum maximum Bartr",
    "comName": "American Cow-parsnip",
    "entries": [
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
    "volume": "9",
    "page": "58",
    "sciName": "Melampyrum lineare Desr",
    "comName": "American Cow-wheat",
    "entries": [
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
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "2",
    "page": "29",
    "sciName": "Viola labradorica Schrank",
    "comName": "American Dog Violet",
    "entries": [
      {
        "places": "Shapleigh",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "11",
    "page": "53",
    "sciName": "Ulmus americana L",
    "comName": "American Elm",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "71v",
    "sciName": "Veratrum viride Ait",
    "comName": "American False Hellebore",
    "entries": []
  },
  {
    "volume": "9",
    "page": "79",
    "sciName": "Hedeoma pulegioides (L) Pers",
    "comName": "American False Pennyroyal",
    "entries": [
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "63, 70",
    "sciName": "Teucrium canadense L",
    "comName": "American Germander",
    "entries": [
      {
        "places": "CundysHarbor",
        "years": "1878"
      },
      {
        "places": "SquirrelIsland",
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
        "places": "FortPopham",
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
    "volume": "5",
    "page": "66",
    "sciName": "Panax quinquefolius L",
    "comName": "American Ginseng",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "12",
    "page": "22",
    "sciName": "Corylus americana Walt",
    "comName": "American Hazlenut",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "25",
    "sciName": "Carpinus caroliniana Walt",
    "comName": "American Hornbeam",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
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
    "page": "80",
    "sciName": "Larix laricina (Du Roi) K Koch",
    "comName": "American Larch",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "2",
    "page": "89",
    "sciName": "Tilia americana L",
    "comName": "American Linden",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1874"
      },
      {
        "places": "EastLivermore",
        "years": "1896"
      },
      {
        "places": "SouthPoland",
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
    "page": "61, 62",
    "sciName": "Phryma leptostachya L",
    "comName": "American Lop-seed",
    "entries": [
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
    "volume": "5",
    "page": "38",
    "sciName": "Hydrocotyle americana L",
    "comName": "American Marsh-pennywort",
    "entries": [
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
    "volume": "4",
    "page": "80, 81",
    "sciName": "Sorbus americana Marsh",
    "comName": "American Mountain-ash",
    "entries": [
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "IsleauHaut",
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
    "page": "2",
    "sciName": "Prunus americana Marsh",
    "comName": "American Plum",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "10",
    "page": "56",
    "sciName": "Phytolacca americana L",
    "comName": "American Pokeweed",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "10",
    "page": "76",
    "sciName": "Suaeda calceoliformis (Hook) Moq",
    "comName": "American Sea-blite",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "91",
    "sciName": "Cakile edentula (Bigelow) Hook",
    "comName": "American Sea-rocket",
    "entries": [
      {
        "places": "WellsBeach",
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
    "volume": "8",
    "page": "91",
    "sciName": "Littorella americana Fern",
    "comName": "American Shoreweed",
    "entries": [
      {
        "places": "Eddington",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "9",
    "page": "38",
    "sciName": "Veronica americana Schwein ex Benth",
    "comName": "American Speedwell",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1880"
      },
      {
        "places": "EastLivermore",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "5",
    "page": "60, 61",
    "sciName": "Aralia racemosa L",
    "comName": "American Spikenard",
    "entries": [
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
    "volume": "10",
    "page": "26",
    "sciName": "Halenia deflexa (Sm) Griseb",
    "comName": "American Spurred-gentian",
    "entries": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "FortKent",
        "years": "1880"
      },
      {
        "places": "VanBuren",
        "years": "1880"
      },
      {
        "places": "FortFairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "9",
    "page": "22",
    "sciName": "Conophilis americana (L) Wallr. f",
    "comName": "American Squaw-root",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "EastParsonsfield",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "12",
    "page": "1",
    "sciName": "Platanus occidentalis L",
    "comName": "American Sycamore",
    "entries": [
      {
        "places": "Auburn",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "14",
    "page": "38",
    "sciName": "Erythronium americanum Ker-Gawl",
    "comName": "American Trout-lily",
    "entries": []
  },
  {
    "volume": "5",
    "page": "82",
    "sciName": "Linnaea borealis L",
    "comName": "American Twinflower",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "RangeleyLakes",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "9",
    "page": "74",
    "sciName": "Lycopus americanus Muhl Ex W Bart",
    "comName": "American Water-horehound",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "2",
    "page": "75",
    "sciName": "Elatine americana Pursh",
    "comName": "American Waterwort",
    "entries": [
      {
        "places": "Mexico",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "9",
    "page": "67, 71, 91",
    "sciName": "Mentha canadensis L",
    "comName": "American Wild Mint",
    "entries": [
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
    "volume": "5",
    "page": "5",
    "sciName": "Hamamelis viriginiana L",
    "comName": "American Witch-hazel",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1878"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "12",
    "page": "85, 86",
    "sciName": "Taxus canadensis Marsh",
    "comName": "American Yew",
    "entries": [
      {
        "places": "SaddlebackMountain",
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
    "volume": "10",
    "page": "29",
    "sciName": "Gentiana andrewsii Griseb",
    "comName": "Andrew's Bottle Gentian",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1896"
      },
      {
        "places": "SouthPoland",
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
    "volume": "6",
    "page": "59",
    "sciName": "Erigeron annuus (L) Pers",
    "comName": "Annual Fleabane",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "FayetteRidge",
        "years": "1876"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "10",
    "page": "77",
    "sciName": "Suaeda linearis (Ell) Moq",
    "comName": "Annual Sea-blite",
    "entries": [
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
    "volume": "4",
    "page": "11",
    "sciName": "Prunus susquehanae hort ex Willd",
    "comName": "Appalachian Sand Plum",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "4",
    "page": "12",
    "sciName": "Prunus susquehanae hort. ex Willd",
    "comName": "Appalachian Sand Plum",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "13",
    "page": "10, 11",
    "sciName": "Sparganium natans L",
    "comName": "Arctic Bur-reed",
    "entries": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "KentsHill",
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
    "page": "8, 10, 15, 17",
    "sciName": "Viola sagittata Ait",
    "comName": "Arrowhead Violet",
    "entries": [
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
    "volume": "6",
    "page": "67",
    "sciName": "Solidago caesia L",
    "comName": "Axillary Goldenrod",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "4",
    "page": "25",
    "sciName": "Rubus chamaemorus L",
    "comName": "Baked-apple-berry",
    "entries": [
      {
        "places": "Machias",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "12",
    "page": "78",
    "sciName": "Abies balsamea (L) P Mill",
    "comName": "Balsam Fir",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "12",
    "page": "66",
    "sciName": "Populus balsamifera L",
    "comName": "Balsam Poplar",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1877"
      },
      {
        "places": "Brunswick",
        "years": "1885"
      },
      {
        "places": "SouthPoland",
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
    "page": "58",
    "sciName": "Salix pyrifolia Anderss",
    "comName": "Balsam Willow",
    "entries": [
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Hiram",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "14",
    "page": "47",
    "sciName": "Juncus balticus Willd",
    "comName": "Baltic Rush",
    "entries": [
      {
        "places": "SaintJohnsRiver",
        "years": "1884"
      }
    ]
  },
  {
    "volume": "11",
    "page": "39",
    "sciName": "Comandra umbellata (L) Nutt",
    "comName": "Bastard-toadflax",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "64",
    "sciName": "Salix myricoides Muhl",
    "comName": "Bayberry Willow",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "14",
    "page": "61",
    "sciName": "Juncus militaris Bigelow",
    "comName": "Bayonet Rush",
    "entries": []
  },
  {
    "volume": "4",
    "page": "3, 5",
    "sciName": "Prunus maritima Marsh",
    "comName": "Beach Plum",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1879"
      },
      {
        "places": "WellsBeach",
        "years": "1897"
      },
      {
        "places": "WellsBeach",
        "years": "1898"
      },
      {
        "places": "Drake's Island",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "3",
    "page": "65, 71",
    "sciName": "Lathyrus japonicus Willd",
    "comName": "Beach Vetchling",
    "entries": [
      {
        "places": "GreatDiamondIsland",
        "years": "1888"
      },
      {
        "places": "WellsBeach",
        "years": "1879"
      },
      {
        "places": "WellsBeach",
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
    "volume": "7",
    "page": "25",
    "sciName": "Artemisia stelleriana Bess",
    "comName": "Beach Wormwood",
    "entries": [
      {
        "places": "OldOrchardBeach",
        "years": "1896"
      },
      {
        "places": "OldOrchardBeach",
        "years": "1898"
      },
      {
        "places": "FortPopham",
        "years": "1897"
      },
      {
        "places": "FortPopham",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "14",
    "page": "1b",
    "sciName": "Iris hookeri Penny ex D Don",
    "comName": "Beach-head Iris",
    "entries": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "13",
    "page": "13",
    "sciName": "Ruppia maritima L",
    "comName": "Beaked Ditch-grass",
    "entries": [
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
    "volume": "7",
    "page": "102",
    "sciName": "Hieracium gronovii L",
    "comName": "Beaked Hawkweed",
    "entries": [
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "12",
    "page": "23",
    "sciName": "Corylus cornuta Marsh",
    "comName": "Beaked Hazlenut",
    "entries": [
      {
        "places": "SouthPoland",
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
    "volume": "12",
    "page": "59",
    "sciName": "Salix uva-ursi Pursh",
    "comName": "Bearberry Willow",
    "entries": []
  },
  {
    "volume": "7",
    "page": "14",
    "sciName": "Bidens beckii Torr ex Spreng",
    "comName": "Beck's Water-marigold",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "9",
    "page": "21",
    "sciName": "Epifagus virginiana (L) W Bart",
    "comName": "Beech-drops",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "24",
    "sciName": "Artemisia biennis Willd",
    "comName": "Biennial Wormwood",
    "entries": [
      {
        "places": "OldOrchardBeach",
        "years": "1896"
      },
      {
        "places": "OldOrchardBeach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "13",
    "page": "19",
    "sciName": "Potamogeton amplifolius Tuckerman",
    "comName": "Big-leaved Pondweed",
    "entries": [
      {
        "places": "PortageLake",
        "years": "1881"
      },
      {
        "places": "Houlton",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "12",
    "page": "65",
    "sciName": "Populus grandidentata Michx",
    "comName": "Big-toothed Poplar",
    "entries": [
      {
        "places": "ChestervilleRidge",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Hiram",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "3",
    "page": "64",
    "sciName": "Vicia cracca L",
    "comName": "Bird Vetch",
    "entries": [
      {
        "places": "SouthPortland",
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
        "places": "FortFairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "2",
    "page": "63, 64",
    "sciName": "Sagina procumbens L",
    "comName": "Bird's-eye Pearlwort",
    "entries": [
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
    "volume": "9",
    "page": "2",
    "sciName": "Primula laurentiana Fern",
    "comName": "Bird's-eye Primrose",
    "entries": [
      {
        "places": "Houlton",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "9",
    "page": "44",
    "sciName": "Veronica persica Poir",
    "comName": "Bird's-eye Speedwell",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "LisbonFalls",
        "years": "1906"
      }
    ]
  },
  {
    "volume": "11",
    "page": "5, 6",
    "sciName": "Rumex obtusifolius L",
    "comName": "Bitter Dock",
    "entries": [
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
    "volume": "6",
    "page": "108",
    "sciName": "Erigeron acris L",
    "comName": "Bitter Fleabane",
    "entries": [
      {
        "places": "FortKent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "12",
    "page": "5",
    "sciName": "Carya cordiformis (Wangenh) K Koch",
    "comName": "Bitternut Hickory",
    "entries": [
      {
        "places": "NorthBrunswick",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "10",
    "page": "53",
    "sciName": "Fraxinus nigra Marsh",
    "comName": "Black Ash",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "11",
    "page": "31",
    "sciName": "Fallopia convolvulus A Love",
    "comName": "Black Bindweed",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1878"
      },
      {
        "places": "WestBath",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "4",
    "page": "19, 20",
    "sciName": "Prunus serotina Ehrh",
    "comName": "Black Cherry",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
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
    "sciName": "Empetrum nigrum L",
    "comName": "Black Crowberry",
    "entries": [
      {
        "places": "MountDesert",
        "years": "1891"
      },
      {
        "places": "IsleauHaut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "5",
    "page": "93",
    "sciName": "Sambucus nigra L",
    "comName": "Black Elderberry",
    "entries": [
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
    "volume": "10",
    "page": "24",
    "sciName": "Hyoscyamus niger L",
    "comName": "Black Henbane",
    "entries": [
      {
        "places": "Harpswell",
        "years": "1870"
      },
      {
        "places": "FortPopham",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "8",
    "page": "13, 14",
    "sciName": "Gaylussacia baccata (Wagenh) K Koch",
    "comName": "Black Huckleberry",
    "entries": [
      {
        "places": "FayetteRidge",
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
        "places": "WestBath",
        "years": "1877"
      },
      {
        "places": "WestBath",
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
    "volume": "7",
    "page": "39",
    "sciName": "Centaurea nigra L",
    "comName": "Black Knapweed",
    "entries": [
      {
        "places": "Machias",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "3",
    "page": "48",
    "sciName": "Robinia pseudoacacia L",
    "comName": "Black Locust",
    "entries": [
      {
        "places": "Fayette",
        "years": "1877"
      },
      {
        "places": "LivermoreFalls",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "3",
    "page": "46",
    "sciName": "Medicago lupulina L",
    "comName": "Black Medick",
    "entries": [
      {
        "places": "YorkBeach",
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
    "volume": "1",
    "page": "85",
    "sciName": "Brassica nigra (L) WDJ Koch",
    "comName": "Black Mustard",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "4",
    "page": "30",
    "sciName": "Rubus occidentalis L",
    "comName": "Black Raspberry",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "YorkCounty",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "12",
    "page": "74",
    "sciName": "Picea mariana (P Mill) B S P",
    "comName": "Black Spruce",
    "entries": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "10",
    "page": "48",
    "sciName": "Cynanchum louiseae Kartesz & Gandhi",
    "comName": "Black Swallowwort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1906"
      }
    ]
  },
  {
    "volume": "5",
    "page": "81",
    "sciName": "Nyssa sylvatica Marsh",
    "comName": "Black Tupelo",
    "entries": []
  },
  {
    "volume": "12",
    "page": "52, 62",
    "sciName": "Salix nigra Marsh",
    "comName": "Black Willow",
    "entries": [
      {
        "places": "Poland",
        "years": "1893"
      },
      {
        "places": "Poland",
        "years": "1895"
      },
      {
        "places": "MiddleRangePond",
        "years": "1893"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "7, 92",
    "sciName": "Rudbeckia hirta L",
    "comName": "Black-eyedconeflower",
    "entries": [
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "EastLivermore",
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
    "volume": "8",
    "page": "5, 6",
    "sciName": "Lobelia inflata L",
    "comName": "Bladder-pod Lobelia",
    "entries": [
      {
        "places": "Wells",
        "years": "1880"
      },
      {
        "places": "SaintFrancis",
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
    "volume": "6",
    "page": "54",
    "sciName": "Oclemena x blakei (Porter) Nesom",
    "comName": "Blake's Aster",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "5",
    "page": "58",
    "sciName": "Osmorhiza claytonii (Michx ) C B Clarke",
    "comName": "Bland Sweet-cicely",
    "entries": [
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
        "places": "PortageLake",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "10",
    "page": "80",
    "sciName": "Amaranthus cruentus L",
    "comName": "Blood Amaranth",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "1",
    "page": "55",
    "sciName": "Sanguinaria canadensis L",
    "comName": "Blood-root",
    "entries": [
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
    "volume": "3",
    "page": "32",
    "sciName": "Polygala sanguinea L",
    "comName": "Bloody Milkwort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1887"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "1",
    "page": "42",
    "sciName": "Caulophyllum thalictroides Michx",
    "comName": "Blue Cohosh",
    "entries": [
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
        "places": "RangeleyLakes",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "14",
    "page": "1, 1c",
    "sciName": "Iris versicolor L",
    "comName": "Blue Iris",
    "entries": [
      {
        "places": "Wells Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "2",
    "page": "1, 2, 3, 4, 5, 6, 7, 11, 12",
    "sciName": "Viola cucullata Ait",
    "comName": "Blue Marsh Violet",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "volume": "9",
    "page": "59",
    "sciName": "Verbena hastata L",
    "comName": "Blue Vervain",
    "entries": []
  },
  {
    "volume": "13",
    "page": "52",
    "sciName": "Platanthera obtusata (Banks ex Pursh) Lindl",
    "comName": "Blunt-leaved Bog-orchid",
    "entries": [
      {
        "places": "FortKent",
        "years": "1882"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
    "volume": "2",
    "page": "51, 52",
    "sciName": "Moehringia laterifloria (L) Fenzl",
    "comName": "Blunt-leaved Grove-sandwort",
    "entries": [
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
    "volume": "13",
    "page": "93",
    "sciName": "Potamogeton obtusfolius Mert & Koch",
    "comName": "Blunt-leaved Pondweed",
    "entries": []
  },
  {
    "volume": "1",
    "page": "10, 12, 21",
    "sciName": "Anemone americana (DC) H Hara",
    "comName": "Blunt-lobed Hepatica",
    "entries": [
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
        "places": "SouthPoland",
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
    "volume": "8",
    "page": "53",
    "sciName": "Kalmia polifolia Wangenh",
    "comName": "Bog American-laurel",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
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
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "12",
    "page": "35",
    "sciName": "Betula pumila L",
    "comName": "Bog Birch",
    "entries": []
  },
  {
    "volume": "6",
    "page": "69, 72, 77, 78",
    "sciName": "Solidago uliginosa Nutt",
    "comName": "Bog Goldenrod",
    "entries": [
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
    "page": "53",
    "sciName": "Oclemena nemoralis (Ait) Greene",
    "comName": "Bog Nodding-aster",
    "entries": [
      {
        "places": "Fayette",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "2",
    "page": "57, 58",
    "sciName": "Stellaria alsine Grimm",
    "comName": "Bog Stitchwort",
    "entries": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "BustinsIsland",
        "years": "1909"
      },
      {
        "places": "Old Orchard Beach",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "12",
    "page": "56",
    "sciName": "Salix pedicellaris Pursh",
    "comName": "Bog Willow",
    "entries": []
  },
  {
    "volume": "5",
    "page": "19",
    "sciName": "Epilobium leptophyllum Raf",
    "comName": "Bog Willow-herb",
    "entries": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "8",
    "page": "46",
    "sciName": "Andromeda polifolia L",
    "comName": "Bog-rosemary",
    "entries": [
      {
        "places": "SouthPoland",
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
    "page": "20",
    "sciName": "Eupatorium perfoliatum L",
    "comName": "Boneset Thoroughwort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1889"
      }
    ]
  },
  {
    "volume": "7",
    "page": "62",
    "sciName": "Nabalus boottii DC",
    "comName": "Boott's Rattlesnake-root",
    "entries": [
      {
        "places": "MtKatahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "2",
    "page": "59, 58VA",
    "sciName": "Stellaria borealis Bigelow",
    "comName": "Boreal Stitchwort",
    "entries": [
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "FortFairfield",
        "years": "1880"
      },
      {
        "places": "Brunswick",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "4",
    "page": "35",
    "sciName": "Rubus hispidus L",
    "comName": "Bristly Blackberry",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1888"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "29",
    "sciName": "Ranunculus pensylvanicus L f",
    "comName": "Bristly Crowfoot",
    "entries": [
      {
        "places": "VanBuren",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "7",
    "page": "82",
    "sciName": "Leontodon hispidus L",
    "comName": "Bristly Hawkbit",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "49",
    "sciName": "Robinia hispida L",
    "comName": "Bristly Locust",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "4",
    "page": "61, 66",
    "sciName": "Rosa acicularis Lindl",
    "comName": "Bristly Rose",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "WestBaldwin",
        "years": "1878"
      },
      {
        "places": "FortKent",
        "years": "1880"
      },
      {
        "places": "FostersPoint",
        "years": "1900"
      },
      {
        "places": "Foster's Point",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "5",
    "page": "62",
    "sciName": "Aralia hispida Vent",
    "comName": "Bristly Sasparilla",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "SouthPoland",
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
    "volume": "4",
    "page": "110, 111",
    "sciName": "Ribes lacustre (Pers) Poir",
    "comName": "Bristly Swamp Currant",
    "entries": [
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "Hersey",
        "years": "1881"
      },
      {
        "places": "NewSweden",
        "years": "1881"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "New Sweden",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "9",
    "page": "88",
    "sciName": "Galeopsis tetrahit L",
    "comName": "Brittle-stemmed Hemp-nettle",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "13, 117",
    "sciName": "Circaea canadensis (L) Hill",
    "comName": "Broad-leaved Enchanter's-nightshade",
    "entries": [
      {
        "places": "CushingIsland",
        "years": "1876"
      },
      {
        "places": "Northport",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "South Poland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "13",
    "page": "67",
    "sciName": "Neottia convallarioides Rich",
    "comName": "Broad-leaved Twayblade",
    "entries": [
      {
        "places": "FortKent",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "13",
    "page": "2, 3",
    "sciName": "Typha latifolia L",
    "comName": "Broad-leavedcat-tail",
    "entries": [
      {
        "places": "EastLivermore",
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
    "volume": "8",
    "page": "4",
    "sciName": "Lobelia kalmii L",
    "comName": "Brook Lobelia",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "11",
    "page": "51",
    "sciName": "Corema conradii (Torr) Torr ex Loud",
    "comName": "Broom Crowberry",
    "entries": [
      {
        "places": "Ogunquit",
        "years": "1879"
      },
      {
        "places": "GunPointHarpswell",
        "years": "1888"
      },
      {
        "places": "IsleauHaut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "7",
    "page": "28",
    "sciName": "Gnaphalium uliginosum L",
    "comName": "Brown Cudfeed",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "CoplinPlantation",
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
    "volume": "14",
    "page": "57, 58",
    "sciName": "Juncus pelocarpus E Mey",
    "comName": "Brown-fruited Rush",
    "entries": [
      {
        "places": "Middle Range Pond",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "10",
    "page": "35",
    "sciName": "Menyanthes trifoliata L",
    "comName": "Buck-bean",
    "entries": [
      {
        "places": "Fayette",
        "years": "1876"
      },
      {
        "places": "Wayne",
        "years": "1876"
      },
      {
        "places": "YorkBeach",
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
    "volume": "5",
    "page": "53",
    "sciName": "Cicuta bulbifera L",
    "comName": "Bulblet-bearing Water-hemlock",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "30",
    "sciName": "Ranunculus bulbosus L",
    "comName": "Bulbous Crowfoot",
    "entries": [
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
    "volume": "5",
    "page": "91",
    "sciName": "Diervilla lonicera P Mill",
    "comName": "Bush-honeysuckle",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1898"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "6",
    "page": "32, 33, 94",
    "sciName": "Symphyotrichum dumosum (L) Nesom",
    "comName": "Bushy American-aster",
    "entries": [
      {
        "places": "Wells",
        "years": "1876"
      },
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "EastLivermore",
        "years": "1877"
      },
      {
        "places": "FayetteRidge",
        "years": "1877"
      },
      {
        "places": "FortKent",
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
    "volume": "9",
    "page": "27",
    "sciName": "Linaria vulgaris P Mill",
    "comName": "Butter-and-eggs Toadflax",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
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
    "page": "39, 98, 99",
    "sciName": "Symphyotrichum lateriflorum (L) A & D Love",
    "comName": "Calico American-aster",
    "entries": [
      {
        "places": "LivermoreFalls",
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
    "volume": "11",
    "page": "60",
    "sciName": "Pilea pumila (L) Gray",
    "comName": "Canada Clearweed",
    "entries": [
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
    "volume": "5",
    "page": "68, 69, 70",
    "sciName": "Chamaepericlymenum canadense (L) Aschers & Graebn",
    "comName": "Canada Dwarf-dogwood",
    "entries": [
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
    "volume": "6",
    "page": "56",
    "sciName": "Erigeron canadensis L",
    "comName": "Canada Fleabane",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1877"
      },
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
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
    "volume": "1",
    "page": "93",
    "sciName": "Crocanthemum canadense (L) Britt",
    "comName": "Canada Frostweed",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "6",
    "page": "85",
    "sciName": "Solidago canadensis L",
    "comName": "Canada Goldenrod",
    "entries": [
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
    "volume": "5",
    "page": "55",
    "sciName": "Cryptotaenia canadensis (L) DC",
    "comName": "Canada Honewort",
    "entries": [
      {
        "places": "Skowhegan",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "14",
    "page": "36",
    "sciName": "Lilium canadense L",
    "comName": "Canada Lily",
    "entries": []
  },
  {
    "volume": "4",
    "page": "1",
    "sciName": "Prunus nigra Ait",
    "comName": "Canada Plum",
    "entries": [
      {
        "places": "Orono",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "1",
    "page": "72",
    "sciName": "Boechera stricta (Graham) Al-Shehbaz",
    "comName": "Canada Rockcress",
    "entries": [
      {
        "places": "Ashland",
        "years": "1881"
      },
      {
        "places": "FortKent",
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
    "volume": "14",
    "page": "67",
    "sciName": "Juncus canadensis J Gay ex Laharpe",
    "comName": "Canada Rush",
    "entries": []
  },
  {
    "volume": "2",
    "page": "71",
    "sciName": "Spergularia canadensis Griseb",
    "comName": "Canada Sand-spurry",
    "entries": [
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
    "volume": "10",
    "page": "55",
    "sciName": "Asarum canadense L",
    "comName": "Canada Wild Ginger",
    "entries": [
      {
        "places": "Caribou",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "11",
    "page": "59",
    "sciName": "Laportea canadensis (L) Weddell",
    "comName": "Canada Wood-nettle",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1876"
      },
      {
        "places": "LivermoreFalls",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "5",
    "page": "51",
    "sciName": "Carum carvi L",
    "comName": "Caraway",
    "entries": [
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
    "volume": "11",
    "page": "24, 25",
    "sciName": "Persicaria careyi (Olney) Greene",
    "comName": "Carey's Smartweed",
    "entries": [
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
    "volume": "3",
    "page": "3",
    "sciName": "Geranium carolinianum L",
    "comName": "Carolina Crane's-bill",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "WestBath",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "4",
    "page": "68, 69",
    "sciName": "Rosa carolina L",
    "comName": "Carolina Rose",
    "entries": [
      {
        "places": "WestBath",
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
    "sciName": "Rosa carolina L ssp carolina",
    "comName": "Carolina Rose",
    "entries": [
      {
        "places": "WestBath",
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
    "volume": "9",
    "page": "1",
    "sciName": "Limonium carolinianum (Walt) Britt",
    "comName": "Carolina Sea-lavender",
    "entries": [
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
    "volume": "14",
    "page": "4",
    "sciName": "Smilax herbacea L",
    "comName": "Carrion-flower",
    "entries": []
  },
  {
    "volume": "9",
    "page": "81",
    "sciName": "Nepeta cataria L",
    "comName": "Catnip",
    "entries": [
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
    "volume": "13",
    "page": "61a",
    "sciName": "Goodyera tesselata Lodd",
    "comName": "Checkered Rattlesnake-plantain",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1875"
      },
      {
        "places": "FayetteRidge",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "12",
    "page": "29",
    "sciName": "Betula lenta L",
    "comName": "Cherry Birch",
    "entries": [
      {
        "places": "Ashland",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "49",
    "sciName": "Cichorium intubys L",
    "comName": "Chicory",
    "entries": [
      {
        "places": "Houlton",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
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
    "page": "46",
    "sciName": "Conioselinum chinense (L ) B S P",
    "comName": "Chinese Hemlock-parsley",
    "entries": [
      {
        "places": "FortFairfield",
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
    "sciName": "Conioselinum chinense (L) B S P",
    "comName": "Chinese Hemlock-parsley",
    "entries": []
  },
  {
    "volume": "4",
    "page": "15, 17, 18, 21",
    "sciName": "Prunus virginiana L",
    "comName": "Choke Cherry",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "SaintFrancis",
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
        "places": "SouthPoland",
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
    "volume": "8",
    "page": "54",
    "sciName": "Rhododendron viscosum (L) Torr",
    "comName": "Clammy Azalea",
    "entries": [
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "IsleauHaut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "10",
    "page": "23",
    "sciName": "Physalis heterophylla Nees",
    "comName": "Clammy Ground-cherry",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1879"
      },
      {
        "places": "Wayne",
        "years": "1879"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Litchfield",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "13",
    "page": "22, 23",
    "sciName": "Potamogeton perfoliatus L",
    "comName": "Clasping-leaved Pondweed",
    "entries": [
      {
        "places": "PortageLake",
        "years": "1881"
      },
      {
        "places": "RangeleyLakes",
        "years": "1894"
      },
      {
        "places": "AndroscogginLake",
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
    "volume": "14",
    "page": "21",
    "sciName": "Streptopus amplexifolius (L) DC",
    "comName": "Clasping-leaved Twistedstalk",
    "entries": []
  },
  {
    "volume": "11",
    "page": "34",
    "sciName": "Fallopia scandens (L) Holub",
    "comName": "Climbing Bindweed",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1878"
      },
      {
        "places": "Litchfield",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "10",
    "page": "20",
    "sciName": "Solanum dulcamara L",
    "comName": "Climbing Nightshade",
    "entries": [
      {
        "places": "SouthPoland",
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
    "volume": "4",
    "page": "55",
    "sciName": "Potentilla litoralis Rydb",
    "comName": "Coast Cinquefoil",
    "entries": [
      {
        "places": "CushingIsland",
        "years": "1876"
      },
      {
        "places": "Castine",
        "years": "1890"
      },
      {
        "places": "YorkBeach",
        "years": "1881"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "11",
    "page": "35",
    "sciName": "Polygonum articulatum L",
    "comName": "Coastal Jointed Knotweed",
    "entries": [
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "8",
    "page": "50",
    "sciName": "Clethra alnifolia L",
    "comName": "Coastal Sweet-pepperbush",
    "entries": [
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
    "volume": "4",
    "page": "88",
    "sciName": "Crataegus crus-galli L",
    "comName": "Cockspur Hawthorn",
    "entries": [
      {
        "places": "Mattawamkeag",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "6",
    "page": "23, 24",
    "sciName": "Tussilago farfara L",
    "comName": "Coltsfoot",
    "entries": [
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
    "volume": "5",
    "page": "10, 11",
    "sciName": "Proserpinaca pectinata Lam",
    "comName": "Comb-leaved Mermaid-weed",
    "entries": [
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
    "volume": "13",
    "page": "34, 36, 39, 40",
    "sciName": "Sagittaria latifolia Willd",
    "comName": "Common Arrowhead",
    "entries": [
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
    "volume": "1",
    "page": "41",
    "sciName": "Berberis vulgaris L",
    "comName": "Common Barberry",
    "entries": [
      {
        "places": "Wells",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "4",
    "page": "31, 33",
    "sciName": "Rubus allegheniensis Porter",
    "comName": "Common Blackberry",
    "entries": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
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
    "volume": "6",
    "page": "11, 12",
    "sciName": "Cephalanthalus occidentalis L",
    "comName": "Common Buttonbrush",
    "entries": [
      {
        "places": "KentsHill",
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
    "volume": "10",
    "page": "5",
    "sciName": "Symphytum officinale L",
    "comName": "Common Comfrey",
    "entries": [
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
    "volume": "2",
    "page": "48",
    "sciName": "Agrostemma githago L",
    "comName": "Common Corncockle",
    "entries": [
      {
        "places": "SouthPoland",
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
    "volume": "7",
    "page": "65",
    "sciName": "Taraxacum officinale G H Weber ex Wiggers",
    "comName": "Common Dandelion",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "11",
    "page": "11",
    "sciName": "Rumex acetosella L",
    "comName": "Common Dock",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "10",
    "page": "17",
    "sciName": "Cuscuta gronovii Willd ex J A Schultes",
    "comName": "Common Dodder",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "FortFairfield",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "13",
    "page": "1",
    "sciName": "Spirodela polyrrhiza (L) Schleid",
    "comName": "Common Duck-meal",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "5",
    "page": "22, 24, 28, 29",
    "sciName": "Oenothera biennis L",
    "comName": "Common Evening-primrose",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "volume": "9",
    "page": "53",
    "sciName": "Euphrasia nemorosa (Pers) Wallr",
    "comName": "Common Eyebright",
    "entries": [
      {
        "places": "MountDesert",
        "years": "1888"
      },
      {
        "places": "MountDesert",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "5",
    "page": "48",
    "sciName": "Ziza aurea (L) WDJ Koch",
    "comName": "Common Golden Alexanders",
    "entries": [
      {
        "places": "Waterville",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "5",
    "page": "118",
    "sciName": "Zizia aurea (L) W D J Koch",
    "comName": "Common Golden Alexanders",
    "entries": [
      {
        "places": "Waterville",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "6",
    "page": "88",
    "sciName": "Euthamia graminifolia (L) Nutt",
    "comName": "Common Grass-leaved Goldenrod",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Fayette",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
        "years": "Gilead"
      },
      {
        "places": "1893",
        "years": "Hiram"
      }
    ]
  },
  {
    "volume": "14",
    "page": "2",
    "sciName": "Smilax rotundifolia L",
    "comName": "Common Greenbrier",
    "entries": []
  },
  {
    "volume": "3",
    "page": "67",
    "sciName": "Apios americana Medik",
    "comName": "Common Ground-nut",
    "entries": [
      {
        "places": "SouthPoland",
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
        "places": "WestBaldwin",
        "years": "1900"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "7",
    "page": "85",
    "sciName": "Hieracium lachenalii K C Gmel",
    "comName": "Common Hawkweed",
    "entries": [
      {
        "places": "Sangerville",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "1",
    "page": "82, 83",
    "sciName": "Sisymbrium officinale (L) Scop",
    "comName": "Common Hedge-mustard",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "volume": "9",
    "page": "92",
    "sciName": "Lamium amplexicaule L",
    "comName": "Common Henbit",
    "entries": [
      {
        "places": "Gardiner",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "11",
    "page": "56",
    "sciName": "Humulus lupulus L",
    "comName": "Common Hop",
    "entries": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "11",
    "page": "52",
    "sciName": "Ceratophyllum demersum L",
    "comName": "Common Hornwort",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1878"
      },
      {
        "places": "Readfield",
        "years": "1892"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "82",
    "sciName": "Juniperus communis L",
    "comName": "Common Juniper",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "SouthPoland",
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
    "page": "12",
    "sciName": "Hippuris vulgaris L",
    "comName": "Common Mare's-tail",
    "entries": [
      {
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
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
    "page": "40, 41",
    "sciName": "Asclepias syriaca L",
    "comName": "Common Milkweed",
    "entries": [
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
    "volume": "9",
    "page": "24",
    "sciName": "Verbascum thapsus L",
    "comName": "Common Mullein",
    "entries": [
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
    "volume": "8",
    "page": "80, 81, 84",
    "sciName": "Plantago major L",
    "comName": "Common Plantain",
    "entries": [
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
    "volume": "2",
    "page": "73, 74v",
    "sciName": "Portulaca oleracea L",
    "comName": "Common Purslane",
    "entries": [
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
    "volume": "7",
    "page": "33, 77",
    "sciName": "Senecio vulgaris L",
    "comName": "Common Ragwort",
    "entries": [
      {
        "places": "HarpswellNeck",
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
    "volume": "2",
    "page": "78",
    "sciName": "Hypericum perforatum L",
    "comName": "Common Saint John's-wort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "9",
    "page": "83",
    "sciName": "Prunella vulgaris L",
    "comName": "Common Selfheal",
    "entries": [
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
    "volume": "2",
    "page": "40",
    "sciName": "Saponaria officinalis L",
    "comName": "Common Soapwort",
    "entries": [
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
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "14",
    "page": "44",
    "sciName": "Juncus effusus L",
    "comName": "Common Soft Rush",
    "entries": []
  },
  {
    "volume": "7",
    "page": "71, 89a, 89b",
    "sciName": "Sonchus oleraceus L",
    "comName": "Common Sow-thistle",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
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
    "volume": "9",
    "page": "40",
    "sciName": "Veronica officinalis L",
    "comName": "Common Speedwell",
    "entries": [
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
    "volume": "2",
    "page": "54",
    "sciName": "Stellaria media (L) Vill",
    "comName": "Common Stitchwort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1908"
      }
    ]
  },
  {
    "volume": "4",
    "page": "48, 49",
    "sciName": "Fragaria virginiana Duchesne",
    "comName": "Common Strawberry",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1880"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "7",
    "page": "97a, 97b",
    "sciName": "Helianthus annuus L",
    "comName": "Common Sunflower",
    "entries": [
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
    "page": "40, 78",
    "sciName": "Cirsium vulgare (Savi) Ten",
    "comName": "Common Thistle",
    "entries": [
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
    "volume": "3",
    "page": "63",
    "sciName": "Vicia sativa L",
    "comName": "Common Vetch",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "10",
    "page": "1, 3",
    "sciName": "Echium vulgare L",
    "comName": "Common Viper's-bugloss",
    "entries": [
      {
        "places": "EastLivermore",
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
    "volume": "5",
    "page": "31",
    "sciName": "Ludwigia palustris (L) Ell",
    "comName": "Common Water-primrose",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "13",
    "page": "44",
    "sciName": "Elodea canadensis Michx",
    "comName": "Common Waterweed",
    "entries": [
      {
        "places": "AndroscogginLake",
        "years": "1894"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "3",
    "page": "10V, 74, 77, 78",
    "sciName": "Ilex verticillata (L) Gray",
    "comName": "Common Winterberry",
    "entries": [
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
    "volume": "7",
    "page": "23",
    "sciName": "Artemisia vulgaris L",
    "comName": "Common Wormwood",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1898"
      },
      {
        "places": "Wells",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "6",
    "page": "81",
    "sciName": "Solidago rugosa P Mill",
    "comName": "Common Wrinkle-leaved Goldenrod",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "EastLivermore",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1892"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "17",
    "sciName": "Achillea millefolium L",
    "comName": "Common Yarrow",
    "entries": [
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
    "volume": "1",
    "page": "76",
    "sciName": "Rorippa palustris (L) Bess",
    "comName": "Common Yellow-cress",
    "entries": [
      {
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
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
    "volume": "7",
    "page": "76",
    "sciName": "Anthemis arvensis L",
    "comName": "Corn Chamomile",
    "entries": [
      {
        "places": "Orono",
        "years": "1890"
      }
    ]
  },
  {
    "volume": "1",
    "page": "113",
    "sciName": "Sinapis arvensis L",
    "comName": "Corn Charlock",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "2",
    "page": "72",
    "sciName": "Spergula arvensis L",
    "comName": "Corn Spurry",
    "entries": [
      {
        "places": "Topsham",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "10",
    "page": "6",
    "sciName": "Buglossoides arvensis (L) I M Johnson",
    "comName": "Corn-gromwell",
    "entries": [
      {
        "places": "Portland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "2",
    "page": "43VB",
    "sciName": "Vaccaria hispanica Rauschert",
    "comName": "Cowcockle",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "4",
    "page": "41, 42",
    "sciName": "Geum virginianum L",
    "comName": "Cream-colored Avens",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "ChestervilleMills",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "1",
    "page": "22, 28",
    "sciName": "Ranunculus flammulla L",
    "comName": "Creeping Crowfoot",
    "entries": [
      {
        "places": "ChestervilleRidge",
        "years": "1875"
      },
      {
        "places": "FayetteRidge",
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
    "volume": "12",
    "page": "84",
    "sciName": "Juniperus horizontalis Moench",
    "comName": "Creeping Juniper",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1877"
      },
      {
        "places": "RoqueIsland",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "7",
    "page": "44ab",
    "sciName": "Cirsium arvense (L) Scop",
    "comName": "Creeping Thistle",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "3",
    "page": "6, 7",
    "sciName": "Oxalis corniculata L",
    "comName": "Creeping Yellow Wood Sorrel",
    "entries": [
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
    "volume": "1",
    "page": "75",
    "sciName": "Rorippa sylvestris (L) Bess",
    "comName": "Creeping Yellow-cress",
    "entries": [
      {
        "places": "MooseheadLake",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "10",
    "page": "62",
    "sciName": "Dysphania cristata (F Muell) Mosyakin & Clemants",
    "comName": "Crested Glandular-goosefoot",
    "entries": [
      {
        "places": "NorthBerwick",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "2",
    "page": "90",
    "sciName": "Linum usitatissimum L",
    "comName": "Cultivated Flax",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1879"
      },
      {
        "places": "FortKent",
        "years": "1880"
      },
      {
        "places": "Orono",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1905"
      }
    ]
  },
  {
    "volume": "1",
    "page": "87",
    "sciName": "Raphanus sativus L",
    "comName": "Cultivated Radish",
    "entries": [
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "11",
    "page": "4",
    "sciName": "Rumex crispus L",
    "comName": "Curly Dock",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "1",
    "page": "25",
    "sciName": "Ranunculus sceleratus L",
    "comName": "Cursedcrowfoot",
    "entries": [
      {
        "places": "HarpswellNeck",
        "years": "1871"
      },
      {
        "places": "LisbonFalls",
        "years": "1904"
      }
    ]
  },
  {
    "volume": "8",
    "page": "58",
    "sciName": "Diapensia lapponica L",
    "comName": "Cushion-plant",
    "entries": [
      {
        "places": "SaddlebackMountain",
        "years": "1894"
      },
      {
        "places": "MountKatahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "1",
    "page": "4",
    "sciName": "Anemone multifida Poir",
    "comName": "Cut-leaved Windflower",
    "entries": [
      {
        "places": "SaintFrancis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "6",
    "page": "70, 71",
    "sciName": "Solidago leiocarpa DC",
    "comName": "Cutler's Goldenrod",
    "entries": [
      {
        "places": "MtKatahdin",
        "years": "1900"
      },
      {
        "places": "Mt. Katahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "4",
    "page": "39",
    "sciName": "Rubus dalibarda L",
    "comName": "Dewdrop",
    "entries": [
      {
        "places": "Topsham",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "5",
    "page": "1a, 1b",
    "sciName": "Penthorum sedoides L",
    "comName": "Ditch-stonecrop",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "page": "17, 19",
    "sciName": "Persicaria lapathifolia (L) S F Gray",
    "comName": "Dock-leaved Smartweed",
    "entries": [
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
    "page": "13",
    "sciName": "Polygonum aviculare L",
    "comName": "Dooryard Knotweed",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "9",
    "page": "49",
    "sciName": "Aureolaria virginica (L) Pennell",
    "comName": "Downy False Foxglove",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "6",
    "page": "68, 111",
    "sciName": "Solidago puberula Nutt",
    "comName": "Downy Goldenrod",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Livermore Falls",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "13",
    "page": "61",
    "sciName": "Goodyera pubescens R Br in Ait & Ait",
    "comName": "Downy Rattlesnake-plantain",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "13",
    "page": "69, 70, 71a",
    "sciName": "Arethusa bulbosa L",
    "comName": "Dragon's-mouth",
    "entries": [
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
    "volume": "3",
    "page": "33",
    "sciName": "Polygala cruciata L",
    "comName": "Drum-heads Milkwort",
    "entries": [
      {
        "places": "Wells",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "1",
    "page": "58",
    "sciName": "Dicentra cucullaria (L) Bernh",
    "comName": "Dutchman's-breeches",
    "entries": [
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
    "volume": "12",
    "page": "33",
    "sciName": "Betula minor (Tuckerman) Fern",
    "comName": "Dwarf Birch",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
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
    "volume": "8",
    "page": "23, 24, 25, 26, 29",
    "sciName": "Vaccinium cespitosum Michx",
    "comName": "Dwarf Blueberry",
    "entries": [
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
    "volume": "12",
    "page": "9",
    "sciName": "Quercus prinoides Willd",
    "comName": "Dwarf Chestnut",
    "entries": [
      {
        "places": "York",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "4",
    "page": "60, 62, 63",
    "sciName": "Potentilla canadensis L",
    "comName": "Dwarf Cinquefoil",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SaintFrancis",
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
    "volume": "5",
    "page": "67",
    "sciName": "Panax trifolius L",
    "comName": "Dwarf Ginseng",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Brunswick",
        "years": "1890"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "12",
    "sciName": "Gaylussacia bigeloviana (Fern) Sorrie & Weakley",
    "comName": "Dwarf Huckleberry",
    "entries": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "BarHarbor",
        "years": "1891"
      },
      {
        "places": "FortKent",
        "years": "1880"
      },
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "Bangor",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "4",
    "page": "26",
    "sciName": "Rubus pubescens Raf",
    "comName": "Dwarf Raspberry",
    "entries": [
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
        "places": "WestBaldwin",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "13",
    "page": "60",
    "sciName": "Goodyera repens (L) R Br",
    "comName": "Dwarf Rattlesnake-plantain",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1877"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "2",
    "page": "84",
    "sciName": "Hypericum mutilum L",
    "comName": "Dwarf Saint John's-wort",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "7, 8",
    "sciName": "Prunus pumila L",
    "comName": "Dwarf Sand Plum",
    "entries": [
      {
        "places": "FortKent",
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
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Fort Fairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "3",
    "page": "36",
    "sciName": "Genista tinctoria L",
    "comName": "Dyer's Greenweed",
    "entries": [
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
    "volume": "13",
    "page": "79",
    "sciName": "Corallorhiza trifida Chatelain",
    "comName": "Early Coral-root",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Rangeley",
        "years": "1892"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "1",
    "page": "14",
    "sciName": "Thalictrum doicium L",
    "comName": "Early Meadow-rue",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "4",
    "page": "101",
    "sciName": "Michranthes virginiensis (Michx) Small",
    "comName": "Early Small-flowered Saxifrage",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "EastLivermore",
        "years": "1874"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "113",
    "sciName": "Ribes americanum P Mill",
    "comName": "Eastern Black Currant",
    "entries": [
      {
        "places": "Patten",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "12",
    "page": "77",
    "sciName": "Tsuga canadensis (L) Carr",
    "comName": "Eastern Hemlock",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "76",
    "sciName": "Tsunga canadensis Carr",
    "comName": "Eastern Hemlock",
    "entries": []
  },
  {
    "volume": "11",
    "page": "38",
    "sciName": "Dirca palustris L",
    "comName": "Eastern Leatherwood",
    "entries": [
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "108",
    "sciName": "Ribes cynosbati L",
    "comName": "Eastern Prickly Gooseberry",
    "entries": [
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
    "volume": "12",
    "page": "83",
    "sciName": "Juniperus virginiana L",
    "comName": "Eastern Redcedar",
    "entries": [
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
    "volume": "4",
    "page": "93, 94, 95, 97, 98",
    "sciName": "Amelanchier canadensis (L) Medik",
    "comName": "Eastern Shadbush",
    "entries": [
      {
        "places": "FayetteRidge",
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
    "volume": "9",
    "page": "32",
    "sciName": "Penstemon laevigatus Ait",
    "comName": "Eastern Smooth Beardtongue",
    "entries": [
      {
        "places": "NewSharon",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "8",
    "page": "41",
    "sciName": "Gaultheria procumbens L",
    "comName": "Eastern Spicy-wintergreen",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "FayetteRidge",
        "years": "1876"
      },
      {
        "places": "SouthPoland",
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
    "volume": "7",
    "page": "21",
    "sciName": "Tanacetum bipinnatum (L) Schultz-Bip",
    "comName": "Eastern Tansy",
    "entries": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "FortKent",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "12",
    "page": "6, 7",
    "sciName": "Quercus alba L",
    "comName": "Eastern White Oak",
    "entries": [
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
    "page": "71",
    "sciName": "Pinus strobus L",
    "comName": "Eastern White Pine",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "21",
    "sciName": "Epilobium coloratum Biehler",
    "comName": "Eastern Willow-herb",
    "entries": [
      {
        "places": "WestBaldwin",
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "13",
    "page": "12",
    "sciName": "Zostera marina L",
    "comName": "Eel-grass",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Brunswick",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "3",
    "page": "73",
    "sciName": "Astragalus eucosmus B L Robins",
    "comName": "Elegent Milk-vetch",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "8",
    "page": "64",
    "sciName": "Pyrola Elliptica Nutt",
    "comName": "Elliptic-leaved Shinleaf",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
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
    "page": "63",
    "sciName": "Pyrola elliptica Nutt",
    "comName": "Elliptic-leaved Shinleaf",
    "entries": [
      {
        "places": "Gilead",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "6",
    "page": "82",
    "sciName": "Solidago ulmifolia Muhl ex Willd",
    "comName": "Elm-leaved Goldenrod",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "8",
    "page": "86, 89, 90",
    "sciName": "Plantago lanceolata L",
    "comName": "English Plantain",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
    "volume": "4",
    "page": "116",
    "sciName": "Sorbus aucuparia L",
    "comName": "European Mountain Ash",
    "entries": []
  },
  {
    "volume": "10",
    "page": "21, 22",
    "sciName": "Solanum nigrum L",
    "comName": "European Nightshade",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Pemaquid",
        "years": "1889"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Pemaquid",
        "years": "1889"
      }
    ]
  },
  {
    "volume": "9",
    "page": "73",
    "sciName": "Lycopus europaeus L",
    "comName": "European Water-horehound",
    "entries": [
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
    "volume": "1",
    "page": "9",
    "sciName": "Anemone nermorosa L",
    "comName": "European Windflower",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Topsham",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "volume": "13",
    "page": "73, 74",
    "sciName": "Calypso bulbosa (L) Oakes",
    "comName": "Fairy-slipper",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "13",
    "page": "80",
    "sciName": "Corallorhiza odontorhiza Poir",
    "comName": "Fall Coral-root",
    "entries": [
      {
        "places": "Livermore",
        "years": "1875"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "48",
    "sciName": "Scorzoneroides autumnalis (L) Moench",
    "comName": "Fall-dandelion",
    "entries": [
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
    "volume": "11",
    "page": "40",
    "sciName": "Geocaulon lividum (Richards) Fern",
    "comName": "False Toadflax",
    "entries": [
      {
        "places": "Franklin",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "11",
    "page": "27, 28",
    "sciName": "Persicaria hydropiperoides (Michx) Small",
    "comName": "False Water-pepper Smartweed",
    "entries": [
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
    "volume": "5",
    "page": "7",
    "sciName": "Myriophyllum farwellii Morong",
    "comName": "Farwell's Water-milfoil",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "TorseyPondReadfield",
        "years": "1892"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "14",
    "page": "28",
    "sciName": "Maianthemum racemosum (L) Link",
    "comName": "Feathery False Solomon's Seal",
    "entries": []
  },
  {
    "volume": "9",
    "page": "50",
    "sciName": "Aureolaria pedicularia (L) Raf",
    "comName": "Fern-leaved False Foxglove",
    "entries": [
      {
        "places": "SouthPoland",
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
    "page": "11",
    "sciName": "Convolvulus arvensis L",
    "comName": "Field Bindweed",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1894"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "10",
    "page": "9",
    "sciName": "Myosotis arvensis (L) Hill",
    "comName": "Field Forgot-me-not",
    "entries": [
      {
        "places": "Greenvale",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "1",
    "page": "88, 115",
    "sciName": "Thlaspi arvense L",
    "comName": "Field Penny-cress",
    "entries": [
      {
        "places": "WellsBeach",
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
    "volume": "7",
    "page": "31a",
    "sciName": "Antennaria neglecta Greene",
    "comName": "Field Pussytoes",
    "entries": []
  },
  {
    "volume": "7",
    "page": "74",
    "sciName": "Sonchus arvensis L",
    "comName": "Field Sow-thistle",
    "entries": [
      {
        "places": "Houlton",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "7",
    "page": "41, 101",
    "sciName": "Cirsium discolor (Muhl ex Willd) Spreng",
    "comName": "Field Thistle",
    "entries": [
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
    "volume": "14",
    "page": "43",
    "sciName": "Luzula campestris (L) DC",
    "comName": "Field Wood Rush",
    "entries": []
  },
  {
    "volume": "7",
    "page": "22",
    "sciName": "Artemisia campestris L",
    "comName": "Field Wormwood",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1887"
      },
      {
        "places": "WellsBeach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "2",
    "page": "56, 62",
    "sciName": "Cerastium arvense L",
    "comName": "Fieldchickweed",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "Cape Elizabeth",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "9",
    "page": "17",
    "sciName": "Utricularia intermedia Hayne",
    "comName": "Flat-leaved Bladderwort",
    "entries": [
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "Bradley",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
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
    "volume": "13",
    "page": "24",
    "sciName": "Potamogeton zosteriformis Fern",
    "comName": "Flat-stem Pondweed",
    "entries": [
      {
        "places": "SaintFrancis",
        "years": "1880"
      },
      {
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "LivermoreFalls",
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
    "page": "55, 61",
    "sciName": "Ionactis linariifolia (L) Greene",
    "comName": "Flax-leaved Stiff-aster",
    "entries": [
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
    "volume": "13",
    "page": "8",
    "sciName": "Sparganium fluctuans (Morong) B L Robins",
    "comName": "Floating Bur-reed",
    "entries": [
      {
        "places": "Readfield",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "13",
    "page": "14",
    "sciName": "Potamogeton natans L",
    "comName": "Floating Pondweed",
    "entries": [
      {
        "places": "Topsham",
        "years": "1874"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "PortageLake",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "5",
    "page": "71",
    "sciName": "Benthamidia florida (L) Spach",
    "comName": "Flowering Big-bracted-dogwood",
    "entries": []
  },
  {
    "volume": "4",
    "page": "24",
    "sciName": "Rubus odoratus L",
    "comName": "Flowering Raspberry",
    "entries": [
      {
        "places": "GreatDiamondIsland",
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
    "page": "103",
    "sciName": "Tiarella cordifolia L",
    "comName": "Foam Flower",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "5",
    "page": "110",
    "sciName": "Aethusa cynapium L",
    "comName": "Fool's-parsley",
    "entries": [
      {
        "places": "Portland",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "6",
    "page": "80",
    "sciName": "Solidago arguta Ait",
    "comName": "Forest Goldenrod",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
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
    "page": "9",
    "sciName": "Galium circaezans Michx",
    "comName": "Forest Licorice Bedstraw",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "9",
    "page": "56",
    "sciName": "Pedicularis canadensis L",
    "comName": "Forest Lousewort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "9",
    "page": "64",
    "sciName": "Trichostema dichotomum L",
    "comName": "Forked Bluecurls",
    "entries": [
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
    "volume": "2",
    "page": "46",
    "sciName": "Silene dichotoma Ehrh",
    "comName": "Forkedcampion",
    "entries": [
      {
        "places": "EastLivermore",
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
    "volume": "9",
    "page": "7, 8, 93",
    "sciName": "Lysimachia quadriflora L",
    "comName": "Four-flowered Yellow-loosestrife",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "WestBaldwin",
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
    "volume": "3",
    "page": "63V",
    "sciName": "Vicia tetrasperma (L) Schreb",
    "comName": "Four-seeded Vetch",
    "entries": []
  },
  {
    "volume": "3",
    "page": "14",
    "sciName": "Vitis labrusca L",
    "comName": "Fox Grape",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "6",
    "page": "7",
    "sciName": "Galium triflorum Michx",
    "comName": "Fragrant Bedstraw",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "KentsHill",
        "years": "1892"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "11",
    "page": "32, 33",
    "sciName": "Fallopia cilinodis (Michx) Holub",
    "comName": "Fringed Bindweed",
    "entries": [
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
    "volume": "3",
    "page": "30, 29V",
    "sciName": "Polygala paucifolia Willd",
    "comName": "Fringed Milkwort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
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
    "volume": "5",
    "page": "20",
    "sciName": "Epilobium cilatum Raf",
    "comName": "Fringed Willow-herb",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "9",
    "page": "9",
    "sciName": "Lysimachia ciliata L",
    "comName": "Fringed Yellow-loosestrife",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "3",
    "page": "15, 16, 17, 17V",
    "sciName": "Vitis vulpina L",
    "comName": "Frost Grape",
    "entries": [
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
    "volume": "9",
    "page": "57",
    "sciName": "Pedicularis furbishiae S Wats",
    "comName": "Furbish's Lousewort",
    "entries": [
      {
        "places": "VanBuren",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "4",
    "page": "114",
    "sciName": "Ribes rubrum L",
    "comName": "Garden Redcurrant",
    "entries": [
      {
        "places": "PresqueIsle",
        "years": "1880"
      },
      {
        "places": "FortKent",
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
    "volume": "1",
    "page": "78, 80",
    "sciName": "Barbarea vulgaris Ait f",
    "comName": "Garden Yellow-rocket",
    "entries": [
      {
        "places": "FortKent",
        "years": "1880"
      },
      {
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
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
    "volume": "9",
    "page": "39",
    "sciName": "Veronica chamaedrys L",
    "comName": "Germander Speedwell",
    "entries": []
  },
  {
    "volume": "7",
    "page": "1a",
    "sciName": "Ambrosia trifida L var trifida",
    "comName": "Giant Ragweed",
    "entries": [
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
    "volume": "13",
    "page": "62",
    "sciName": "Goodyera oblongifolia Raf",
    "comName": "Giant Rattlesnake-plantain",
    "entries": [
      {
        "places": "Madawaska",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "9",
    "page": "82",
    "sciName": "Glechoma hederacea L",
    "comName": "Gill-over-the-ground",
    "entries": []
  },
  {
    "volume": "9",
    "page": "68, 69",
    "sciName": "Mentha arvensis L",
    "comName": "Ginger Mint",
    "entries": [
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
    "volume": "7",
    "page": "63, 64",
    "sciName": "Nabalus racemosus (Michx) Hook",
    "comName": "Glaucous Rattlesnake-root",
    "entries": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "SaintFrancis",
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
    "page": "115",
    "sciName": "Ribes aureum Pursh",
    "comName": "Golden Currant",
    "entries": [
      {
        "places": "Patten",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "11",
    "page": "10",
    "sciName": "Rumex maritimus L",
    "comName": "Golden Dock",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "7",
    "page": "34, 35",
    "sciName": "Packera aurea (L) A & D Love",
    "comName": "Golden Groundsel",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1871"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
    "volume": "9",
    "page": "35",
    "sciName": "Gratiola aurea Pursh",
    "comName": "Golden Hedge-hyssop",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1894"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "4",
    "page": "106",
    "sciName": "Chrysoplenium americanum Schwein ex Hook",
    "comName": "Golden-saxifrage",
    "entries": [
      {
        "places": "Orono",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "37, 38",
    "sciName": "Sagittaria graminea Michx",
    "comName": "Grass-leaved Arrowhead",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "14",
    "page": "50",
    "sciName": "Juncus marginatus Rostk",
    "comName": "Grass-leaved Rush",
    "entries": []
  },
  {
    "volume": "2",
    "page": "55",
    "sciName": "Stellaria graminea L",
    "comName": "Grass-leaved Stitchwort",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "SaintFrancis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "15, 16, 18, 21",
    "sciName": "Potamogeton gramineus L",
    "comName": "Grassy Pondweed",
    "entries": [
      {
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "SouthPoland",
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
    "volume": "12",
    "page": "31, 32",
    "sciName": "Betula populifolia Marsh",
    "comName": "Gray Birch",
    "entries": [
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
    "volume": "5",
    "page": "78",
    "sciName": "Swida racemosa (Lam) Moldenke",
    "comName": "Gray Dogwood",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "6",
    "page": "83, 84",
    "sciName": "Solidago nemoralis Ait",
    "comName": "Gray Goldenrod",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
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
    "volume": "13",
    "page": "5",
    "sciName": "Sparganium eurycarpum Engelm ex Gray",
    "comName": "Great Bur-reed",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "WestBaldwin",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "45, 46, 47",
    "sciName": "Arctium lappa L",
    "comName": "Great Burdock",
    "entries": [
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
    "page": "2",
    "sciName": "Lobelia siphilitica L",
    "comName": "Great Lobelia",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "8",
    "page": "56",
    "sciName": "Rhododendron maximum L",
    "comName": "Great Rosebay",
    "entries": [
      {
        "places": "Standish",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "2",
    "page": "18",
    "sciName": "Viola selkirkii Pursh",
    "comName": "Great-spurred Violet",
    "entries": [
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
    "volume": "9",
    "page": "16",
    "sciName": "Utricularia vulgaris L",
    "comName": "Greater Bladderwort",
    "entries": [
      {
        "places": "Livermore",
        "years": "1878"
      },
      {
        "places": "Bradley",
        "years": "1891"
      },
      {
        "places": "EastLivermore",
        "years": "1893"
      },
      {
        "places": "Wilton",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "1",
    "page": "56",
    "sciName": "Chelidonium majus L",
    "comName": "Greater Celandine",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "EastLivermore",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "10",
    "page": "18",
    "sciName": "Cuscuta europaea L",
    "comName": "Greater Dodder",
    "entries": [
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "10",
    "page": "27, 28",
    "sciName": "Gentianopsis crinita (Froel) Ma",
    "comName": "Greater Fringed-gentian",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "13",
    "page": "59",
    "sciName": "Platanthera grandiflora (Bigelow) Lindl",
    "comName": "Greater Purple Fringed Bog-orchid",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "13",
    "page": "82",
    "sciName": "Platanthera grandiflora Lindl",
    "comName": "Greater Purple Fringed Bog-orchid",
    "entries": []
  },
  {
    "volume": "11",
    "page": "1",
    "sciName": "Rumex britannica L",
    "comName": "Greater Water Dock",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Sorrento",
        "years": "1891"
      },
      {
        "places": "NorthLubec",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "13",
    "page": "76",
    "sciName": "Malaxis unifolia Michx",
    "comName": "Green Adder's-mouth",
    "entries": [
      {
        "places": "Greene",
        "years": "1876"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "VanBuren",
        "years": "1880"
      },
      {
        "places": "Greenvale",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "12",
    "page": "36",
    "sciName": "Alnus viridis (Vill) Lam & DC",
    "comName": "Green Alder",
    "entries": [
      {
        "places": "Ashland",
        "years": "1881"
      },
      {
        "places": "FortKent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "12",
    "page": "90",
    "sciName": "Peltandra virginica (L) Raf ex Schott",
    "comName": "Green Arrow-arum",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "10",
    "page": "50, 51",
    "sciName": "Fraxinus pennsylvanica Marsh",
    "comName": "Green Ash",
    "entries": [
      {
        "places": "EastLivermore",
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
    "volume": "8",
    "page": "1a",
    "sciName": "Mollugo verticillata L",
    "comName": "Green Carpetweed",
    "entries": []
  },
  {
    "volume": "9",
    "page": "43",
    "sciName": "Veronica agrestis L",
    "comName": "Green Field Speedwell",
    "entries": []
  },
  {
    "volume": "13",
    "page": "57",
    "sciName": "Platanthera lacera (Michx) G Don",
    "comName": "Green Fringed Bog-orchid",
    "entries": [
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
    "volume": "8",
    "page": "65, 66",
    "sciName": "Pyrola chlorantha Sw",
    "comName": "Green-flowered Shinleaf",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
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
    "volume": "1",
    "page": "64",
    "sciName": "Cardamine hirsuta L",
    "comName": "Hairy Bitter-cress",
    "entries": [
      {
        "places": "GreatDiamondIsland",
        "years": "1888"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "3",
    "page": "61",
    "sciName": "Lespedeza hirta (L ) Hornem",
    "comName": "Hairy Bush-clover",
    "entries": [
      {
        "places": "Wells",
        "years": "1877"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      },
      {
        "places": "Brunswick",
        "years": "1904"
      }
    ]
  },
  {
    "volume": "11",
    "page": "45, 46",
    "sciName": "Euphorbia vermiculata Raf",
    "comName": "Hairy Sandmat",
    "entries": [
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
    "volume": "14",
    "page": "41",
    "sciName": "Luzula acuminata Raf",
    "comName": "Hairy Wood Rush",
    "entries": []
  },
  {
    "volume": "4",
    "page": "109",
    "sciName": "Ribes hirtellum Michx",
    "comName": "Hairy-stemmed Gooseberry",
    "entries": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
        "places": "ChebeagueIsland",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "11",
    "page": "29",
    "sciName": "Persicaria arifolia (L) Haroldson",
    "comName": "Halberd-leaved Tearthumb",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Readfield",
        "years": "1892"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "11",
    "page": "30",
    "sciName": "Persicaria arifolia Haroldson",
    "comName": "Halberd-leaved Tearthumb",
    "entries": [
      {
        "places": "KentsHill",
        "years": "1892"
      }
    ]
  },
  {
    "volume": "10",
    "page": "68",
    "sciName": "Atriplex prostrata BouchÃ©r ex DC",
    "comName": "Hastate-leaved Orache",
    "entries": [
      {
        "places": "Harpswell",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "13",
    "page": "66, 68",
    "sciName": "Neottia cordata Rich",
    "comName": "Heart-leaved Twayblade",
    "entries": [
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "Chesterville",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "12",
    "page": "47, 48",
    "sciName": "Salix eriocephala Michx",
    "comName": "Heart-leaved Willow",
    "entries": [
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
    "volume": "6",
    "page": "35, 36, 95, 96",
    "sciName": "Symphyotrichum ericoides (L) Nesom",
    "comName": "Heath American-aster",
    "entries": [
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
    "volume": "10",
    "page": "12",
    "sciName": "Calystegia sepium (L) R Br",
    "comName": "Hedge False Bindweed",
    "entries": []
  },
  {
    "volume": "11",
    "page": "54, 55",
    "sciName": "Cannabis sativa L",
    "comName": "Hemp",
    "entries": [
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
    "volume": "10",
    "page": "39",
    "sciName": "Apocynum cannabinum L",
    "comName": "Hemp Dogbane",
    "entries": [
      {
        "places": "HarpswellIsland",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "page": "74, 75, 79",
    "sciName": "Suaeda maritima (L) Dumort",
    "comName": "Herbaceaous Sea-blite",
    "entries": [
      {
        "places": "WellsBeach",
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
    "volume": "8",
    "page": "34, 35, 36",
    "sciName": "Vaccinium corymbosom L",
    "comName": "Highbush Blueberry",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
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
    "volume": "5",
    "page": "106",
    "sciName": "Viburnum opulus L",
    "comName": "Highbush-cranberry",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "14",
    "page": "49",
    "sciName": "Juncus trifidus L",
    "comName": "Highland Rush",
    "entries": [
      {
        "places": "SaddlebackMountain",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "8",
    "page": "33",
    "sciName": "Vaccinium pallidum Ait",
    "comName": "Hillside Blueberry",
    "entries": [
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "SouthPoland",
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
    "page": "73",
    "sciName": "Berteroa incana (L) DC",
    "comName": "Hoary False Alyssum",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "5",
    "page": "107, 108, 109",
    "sciName": "Viburnum lantanoides Michx",
    "comName": "Hobblebush",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Fayette",
        "years": "1879"
      },
      {
        "places": "SouthPoland",
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
    "volume": "13",
    "page": "63",
    "sciName": "Spiranthes romanzoffiana Cham",
    "comName": "Hooded Ladies'-tresses",
    "entries": []
  },
  {
    "volume": "9",
    "page": "84, 85",
    "sciName": "Scutellaria galericulata L",
    "comName": "Hooded Skullcap",
    "entries": [
      {
        "places": "YorkBeach",
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
    "volume": "2",
    "page": "33",
    "sciName": "Viola adunca Sm",
    "comName": "Hook-spurred Violet",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      },
      {
        "places": "Brunswick",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "1",
    "page": "26",
    "sciName": "Ranunculus recurvatus Poir",
    "comName": "Hookedcrowfoot",
    "entries": [
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
    "volume": "13",
    "page": "53",
    "sciName": "Platanthera hookeri (Torr ex Gray) Lindl",
    "comName": "Hooker's Bog-orchid",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "PresqueIsle",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "12",
    "page": "24",
    "sciName": "Ostrya virginiana (P Mill) K Koch",
    "comName": "Hop-hornbeam",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "MtPercival",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
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
    "volume": "9",
    "page": "20",
    "sciName": "Utricularia cornuta Michx",
    "comName": "Horned Bladderwort",
    "entries": [
      {
        "places": "FayetteRidge",
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
    "volume": "10",
    "page": "19",
    "sciName": "Solanum rostratum Dunal",
    "comName": "Horned Nightshade",
    "entries": [
      {
        "places": "Gardiner",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "1",
    "sciName": "Inula helenium L",
    "comName": "Horse Yellowhead",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Chesterville",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "1",
    "page": "77",
    "sciName": "Armoracia rusticana P G Gaertn B Mey & Scherb",
    "comName": "Horse-radish",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "6",
    "page": "50",
    "sciName": "Erigeron hyssopifolius Michx",
    "comName": "Hyssop-leaved Fleabane",
    "entries": [
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
    "volume": "5",
    "page": "33, 34, 35b",
    "sciName": "Lythrum hyssopifolia L",
    "comName": "Hyssop-leaved Loosestrife",
    "entries": [
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
    "volume": "1",
    "page": "46, 47, 48, 49",
    "sciName": "Nuphar advena (Ait) Ait f",
    "comName": "Immigrant Pond-lily",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
    "volume": "14",
    "page": "14",
    "sciName": "Medeola virginiana L",
    "comName": "Indian Cucumber Root",
    "entries": []
  },
  {
    "volume": "12",
    "page": "68, 69",
    "sciName": "Pinus banksiana Lamb",
    "comName": "Jack Pine",
    "entries": [
      {
        "places": "North Maine",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "12",
    "page": "88, 89",
    "sciName": "Arisaema triphyllum (L) Schott",
    "comName": "Jack-in-the-pulpit",
    "entries": [
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
    "volume": "14",
    "page": "59",
    "sciName": "Juncus articulatus L",
    "comName": "Joint-leaved Rush",
    "entries": []
  },
  {
    "volume": "2",
    "page": "22",
    "sciName": "Viola renifolia Gray",
    "comName": "Kidney-leaved Violet",
    "entries": [
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
    "volume": "1",
    "page": "23, 24",
    "sciName": "Ranunculus abortivus L",
    "comName": "Kidney-leavedcrowfoot",
    "entries": [
      {
        "places": "YorkBeach",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
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
    "volume": "14",
    "page": "33",
    "sciName": "Polygonatum biflorum (Walt) Ell",
    "comName": "King Solomon's-seal",
    "entries": []
  },
  {
    "volume": "2",
    "page": "66, 67, 65v",
    "sciName": "Sagina nodosa Fenzl",
    "comName": "Knotted Pearlwort",
    "entries": [
      {
        "places": "BarHarbor",
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
    "volume": "14",
    "page": "63",
    "sciName": "Juncus nodosus L",
    "comName": "Knotted Rush",
    "entries": []
  },
  {
    "volume": "12",
    "page": "60",
    "sciName": "Salix argyrocarpa Anderss",
    "comName": "Labrador Willow",
    "entries": []
  },
  {
    "volume": "8",
    "page": "60",
    "sciName": "Rhododendron groenlandicum (Oeder) Kron & Judd",
    "comName": "Labrador-tea",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "13",
    "page": "50",
    "sciName": "Platanthera huronensis (Nutt) Lindl",
    "comName": "Lake Huron Green Bog-orchid",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1877"
      },
      {
        "places": "LivermoreFalls",
        "years": "1877"
      },
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "FortKent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "9",
    "page": "3",
    "sciName": "Primula mistassinica Michx",
    "comName": "Lake Mistassini Primrose",
    "entries": [
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "SaintFrancis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "6",
    "page": "40, 41",
    "sciName": "Symphyotrichum lanceolatum (Willd) Nesom",
    "comName": "Lance-leaved American-aster",
    "entries": [
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
        "places": "SouthPoland",
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
    "page": "8",
    "sciName": "Galium lanceolatum Torr",
    "comName": "Lance-leaved Licorice Bedstraw",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Woodstock",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "14",
    "page": "23",
    "sciName": "Streptopus lanceolatus (Ait) Reveal",
    "comName": "Lance-leaved Twistedstalk",
    "entries": []
  },
  {
    "volume": "2",
    "page": "23",
    "sciName": "Viola lanceolota L",
    "comName": "Lance-leaved Violet",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "FortKent",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "WestBaldwin",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "8",
    "page": "57",
    "sciName": "Rhododendron lapponicum (L) Wahlenb",
    "comName": "Lapland Rosebay",
    "entries": [
      {
        "places": "MountKatahdin",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "6",
    "page": "14",
    "sciName": "Houstonia purpurea L",
    "comName": "Large Bluet",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "8",
    "page": "17, 18",
    "sciName": "Vaccinium macrocarpon Ait",
    "comName": "Large Cranberry",
    "entries": [
      {
        "places": "SouthPoland",
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
    "volume": "13",
    "page": "71",
    "sciName": "Isotria verticillata Raf",
    "comName": "Large Whorled Pogonia",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "14",
    "page": "18",
    "sciName": "Uvularia grandiflora J E Sm",
    "comName": "Large-flowered Bellwort",
    "entries": []
  },
  {
    "volume": "4",
    "page": "43, 44",
    "sciName": "Geum macrophyllum Willd",
    "comName": "Large-leaved Avens",
    "entries": [
      {
        "places": "ModawaskaTownship",
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
    "volume": "6",
    "page": "73, 74",
    "sciName": "Solidago macrophylla Pursh",
    "comName": "Large-leaved Goldenrod",
    "entries": [
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
    "page": "26, 27",
    "sciName": "Eurybia macrophylla (L) Cass",
    "comName": "Large-leaved Wood-aster",
    "entries": [
      {
        "places": "FayetteRidge",
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
    "volume": "1",
    "page": "74",
    "sciName": "Camelina sativa (L) Crantz",
    "comName": "Large-seeded False Flax",
    "entries": [
      {
        "places": "FortKent",
        "years": "1880"
      },
      {
        "places": "Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "4",
    "page": "89",
    "sciName": "Crateagus macrosperma Ashe",
    "comName": "Large-seeded Hawthorn",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1878"
      },
      {
        "places": "Brunswick",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "6",
    "page": "30, 92",
    "sciName": "Symphyotrichum patens (Ait) Nesom",
    "comName": "Late Purple American-aster",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1877"
      },
      {
        "places": "WellsBeach",
        "years": "1879"
      },
      {
        "places": "East Livermore",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "4",
    "page": "36",
    "sciName": "Rubus frondosus Bigelow",
    "comName": "Leafy-flowered Blackberry",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "45",
    "sciName": "Chamaedaphne calyculataÂ (L) Moench",
    "comName": "Leatherleaf",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "WaynePond",
        "years": "1879"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "2",
    "page": "82, 83",
    "sciName": "Hypericum canadense L",
    "comName": "Lesser Canadian Saint John's-wort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "13",
    "page": "58",
    "sciName": "Platanthera psycodes (L) Lindl",
    "comName": "Lesser Purple Fringed Bog-orchid",
    "entries": [
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
    "volume": "7",
    "page": "75",
    "sciName": "Galinsoga parviflora Cav",
    "comName": "Lesser Quickweed",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1905"
      }
    ]
  },
  {
    "volume": "13",
    "page": "77",
    "sciName": "Liparis liliifolia L C Rich",
    "comName": "Lily-leaved Wide-lipped Orchid",
    "entries": []
  },
  {
    "volume": "6",
    "page": "34",
    "sciName": "Symphyotrichum ciliolatum (Lindl) A & D Love",
    "comName": "Lindley's American Aster",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1881"
      },
      {
        "places": "WestBath",
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
    "page": "16",
    "sciName": "Houstonia caerulea L",
    "comName": "Little Bluet",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "13",
    "page": "47",
    "sciName": "Platanthera clavellata (Michx) Leur",
    "comName": "Little Club-spur Bog-orchid",
    "entries": [
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
    "volume": "5",
    "page": "25, 26",
    "sciName": "Oenothera perennis L",
    "comName": "Little Evening-primrose",
    "entries": [
      {
        "places": "SouthPoland",
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
        "places": "EastLivermore",
        "years": "1888"
      },
      {
        "places": "East Livermore",
        "years": "1888"
      }
    ]
  },
  {
    "volume": "10",
    "page": "36",
    "sciName": "Nymphoides cordata Fern",
    "comName": "Little Floating Heart",
    "entries": [
      {
        "places": "Bowdoin",
        "years": "1871"
      },
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "8",
    "page": "70",
    "sciName": "Pyrola minor L",
    "comName": "Little Shinleaf",
    "entries": [
      {
        "places": "FortKent",
        "years": "1880"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "9",
    "page": "87",
    "sciName": "Scutellaria parvula Michx",
    "comName": "Little Skullcap",
    "entries": [
      {
        "places": "Dover",
        "years": "1896"
      },
      {
        "places": "NorthBerwick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "9",
    "page": "54",
    "sciName": "Rhinanthus minor L",
    "comName": "Little Yellow-rattle",
    "entries": [
      {
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "Northport",
        "years": "1891"
      },
      {
        "places": "IsleauHaut",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "13",
    "page": "78",
    "sciName": "Liparis loeselii (L) L C Rich",
    "comName": "Loese's Wide-lipped Orchid",
    "entries": [
      {
        "places": "Cumberland",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "39, 49",
    "sciName": "Salix bebbiana Sarg",
    "comName": "Long-beaked Willow",
    "entries": [
      {
        "places": "EastLivermore",
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
    "volume": "13",
    "page": "49",
    "sciName": "Coeloglossum viride (L) Hartman",
    "comName": "Long-bracted Green Orchid",
    "entries": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
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
    "page": "5",
    "sciName": "Anemone cylindrica Gray",
    "comName": "Long-headed Windflower",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1896"
      },
      {
        "places": "ChestervillePlains",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "6",
    "page": "15",
    "sciName": "Houstonia longifolia, Gaertn",
    "comName": "Long-leaved Bluet",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "56",
    "sciName": "Osmorhiza longistylis (Torr) DC",
    "comName": "Long-styled Sweet Cicely",
    "entries": [
      {
        "places": "PortageLake",
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
    "volume": "14",
    "page": "54",
    "sciName": "Juncus secundus Beauv ex Poir",
    "comName": "Lopsided Rush",
    "entries": []
  },
  {
    "volume": "2",
    "page": "38, 39",
    "sciName": "Gypsophilia muralis L",
    "comName": "Low Baby's-breath",
    "entries": [
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
    "volume": "2",
    "page": "88",
    "sciName": "Malva rotundifula L",
    "comName": "Low Mallow",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "WestBath",
        "years": "1892"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "9",
    "page": "10",
    "sciName": "Lysimachia hybrida Michx",
    "comName": "Lowland Yellow-loosestrife",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "DamoThickets",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "7",
    "page": "26",
    "sciName": "Pseudognaphalium macounii (Greene) Kartesz",
    "comName": "Macoun's Rabbit-tobacco",
    "entries": [
      {
        "places": "Auburn",
        "years": "1892"
      },
      {
        "places": "SouthPoland",
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
    "page": "86",
    "sciName": "Scutellaria lateriflora L",
    "comName": "Mad Dog Skullcap",
    "entries": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "SquirrelIsland",
        "years": "1887"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "2",
    "page": "35, 36",
    "sciName": "Dianthus deltoides L",
    "comName": "Maiden Pink",
    "entries": [
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
    "page": "47, 48, 49",
    "sciName": "Lyonia ligustrina (L) DC",
    "comName": "Maleberry",
    "entries": [
      {
        "places": "SouthPoland",
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
    "volume": "10",
    "page": "57",
    "sciName": "Chenopodium polyspermum L",
    "comName": "Many-seeded Goosefoot",
    "entries": [
      {
        "places": "NorthBerwick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "5",
    "page": "103, 104, 116",
    "sciName": "Viburnum acerifolium L",
    "comName": "Maple-leaved Viburnum",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1872"
      },
      {
        "places": "Fayette",
        "years": "1876"
      },
      {
        "places": "KentsHill",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "SouthPoland",
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
    "volume": "8",
    "page": "11",
    "sciName": "Campanula aparinoides Pursh",
    "comName": "March Bellflower",
    "entries": [
      {
        "places": "FortFairfield",
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
    "volume": "13",
    "page": "30",
    "sciName": "Triglochin palustre L",
    "comName": "Marsh Arrow-grass",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "6",
    "page": "5",
    "sciName": "Galium palustre L",
    "comName": "Marsh Bedstraw",
    "entries": [
      {
        "places": "Caribou",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "9",
    "page": "89",
    "sciName": "Stachys palustris L",
    "comName": "Marsh Hedge-nettle",
    "entries": [
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "EastLivermore",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "5",
    "page": "9",
    "sciName": "Proserpinaca palustris L",
    "comName": "Marsh Mermaid-weed",
    "entries": [
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
        "places": "SouthPoland",
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
    "page": "43",
    "sciName": "Cirsium pumilum (Nutt) Spreng",
    "comName": "Marsh Thistle",
    "entries": [
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
    "volume": "3",
    "page": "66, 72, 71V",
    "sciName": "Lathyrus palustris L",
    "comName": "Marsh Vetchling",
    "entries": [
      {
        "places": "DrakesIsland",
        "years": "1897"
      },
      {
        "places": "GreatDiamondIsland",
        "years": "1880"
      },
      {
        "places": "WellsBeach",
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
    "volume": "5",
    "page": "16, 17, 18",
    "sciName": "Epilobium palustre L",
    "comName": "Marsh Willow-herb",
    "entries": [
      {
        "places": "Harpswell",
        "years": "1876"
      },
      {
        "places": "Caribou",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
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
    "volume": "4",
    "page": "57",
    "sciName": "Comarum palustre L",
    "comName": "Marsh-cinquefoil",
    "entries": [
      {
        "places": "Fayette",
        "years": "1871"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "33",
    "sciName": "Caltha palustris L",
    "comName": "Marsh-marigold",
    "entries": [
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
    "volume": "5",
    "page": "39, 40",
    "sciName": "Sanicula marilandica L",
    "comName": "Maryland Sanicle",
    "entries": [
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
    "page": "40",
    "sciName": "Euphorbia serpyllifolia Pers",
    "comName": "Matted Sandmat",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "14",
    "page": "40",
    "sciName": "Allium canadense L",
    "comName": "Meadow Garlic",
    "entries": []
  },
  {
    "volume": "7",
    "page": "80, 87",
    "sciName": "Tragopogon pratensis L",
    "comName": "Meadow Goat's Beard",
    "entries": [
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
    "volume": "3",
    "page": "65V",
    "sciName": "Lathyrus pratensis L",
    "comName": "Meadow Vetchling",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "4",
    "page": "65",
    "sciName": "Agrimonia eupatoria L",
    "comName": "Medicinal Agrimony",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1874"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Phillips",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "12",
    "page": "3, 4",
    "sciName": "Carya tomentosa (Poir in Lam) Nutt",
    "comName": "Mockernut Hickory",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1875"
      },
      {
        "places": "Wells",
        "years": "1878"
      },
      {
        "places": "NorthBrunswick",
        "years": "1878"
      },
      {
        "places": "North Brunswick",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "14",
    "page": "48",
    "sciName": "Juncus stygius L",
    "comName": "Moor Rush",
    "entries": []
  },
  {
    "volume": "5",
    "page": "2",
    "sciName": "Sedum acre L",
    "comName": "Moss Stonecrop",
    "entries": [
      {
        "places": "SouthPoland",
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
    "volume": "9",
    "page": "25",
    "sciName": "Verbascum blattaria L",
    "comName": "Moth Mullein",
    "entries": [
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "WestBaldwin",
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
    "page": "90a",
    "sciName": "Leonurus cardiaca L",
    "comName": "Motherwort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "8",
    "page": "51",
    "sciName": "Kalmia latifolia L",
    "comName": "Mountain American-laurel",
    "entries": [
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
    "page": "19, 20",
    "sciName": "Vaccinium vitis-idaea L",
    "comName": "Mountain Cranberry",
    "entries": [
      {
        "places": "MountDesert",
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
    "volume": "3",
    "page": "2",
    "sciName": "Geranium robertianum L",
    "comName": "Mountain Crane's-bill",
    "entries": [
      {
        "places": "SquirrelIsland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "79",
    "sciName": "Ilex mucronata (L) M Powell, Savol, & S Andrews",
    "comName": "Mountain Holly",
    "entries": [
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
    "volume": "5",
    "page": "86, 87, 89",
    "sciName": "Lonicera villosa (Michx) J A Schultes",
    "comName": "Mountain Honeysuckle",
    "entries": [
      {
        "places": "HarpswellIsland",
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
    "volume": "3",
    "page": "20",
    "sciName": "Acer spicatum Lam",
    "comName": "Mountain Maple",
    "entries": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "EastLivermore",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "2",
    "page": "50",
    "sciName": "Minuartia groenlandica (Retz) Ostenf",
    "comName": "Mountain Sandplant",
    "entries": [
      {
        "places": "MountDesert",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "4",
    "page": "99",
    "sciName": "Amelanchier bartramiana Tausch) M Roemer",
    "comName": "Mountain Shadbush",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "2",
    "page": "61",
    "sciName": "Cerastium fontanum Baumg",
    "comName": "Mouse-ear Chickweed",
    "entries": []
  },
  {
    "volume": "7",
    "page": "84",
    "sciName": "Hieracium pilosella L",
    "comName": "Mouse-ear Hawkweed",
    "entries": [
      {
        "places": "Dover",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "4",
    "page": "104",
    "sciName": "Mitella nuda L",
    "comName": "Naked Bishop's-cap",
    "entries": [
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
    "volume": "3",
    "page": "55",
    "sciName": "Hylodesmum nudiflorum (L) H Ohashi & R R Mill",
    "comName": "Naked Tick-trefoil",
    "entries": [
      {
        "places": "Fayette",
        "years": "1876"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "5",
    "page": "97",
    "sciName": "Viburnum lentago L",
    "comName": "Nannyberry",
    "entries": [
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
    "volume": "13",
    "page": "9",
    "sciName": "Sparganium angustifolium Michx",
    "comName": "Narrow-leaved Bur-reed",
    "entries": []
  },
  {
    "volume": "5",
    "page": "15",
    "sciName": "Chamerion angustifolium (L) Holub",
    "comName": "Narrow-leaved Fireweed",
    "entries": [
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
    "volume": "10",
    "page": "30, 31, 32",
    "sciName": "Gentiana linearis Froel",
    "comName": "Narrow-leaved Gentian",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "WestBaldwin",
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
    "page": "58, 60",
    "sciName": "Chenopodium leptophyllum (Moq) Nutt ex S Wats",
    "comName": "Narrow-leaved Goosefoot",
    "entries": [
      {
        "places": "NorthBerwick",
        "years": "1896"
      },
      {
        "places": "Wells Beach",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "9",
    "page": "76",
    "sciName": "Pycnanthemum tenuifolium Schrad",
    "comName": "Narrow-leaved Mountain-mint",
    "entries": [
      {
        "places": "SouthPoland",
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
    "page": "37",
    "sciName": "Veronica scutellata L",
    "comName": "Narrow-leaved Speedwell",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "EastLivermore",
        "years": "1894"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "13",
    "page": "4",
    "sciName": "Typha angustifolia L",
    "comName": "Narrow-leavedcat-tail",
    "entries": [
      {
        "places": "Chesterville",
        "years": "1878"
      },
      {
        "places": "WestFarmington",
        "years": "1878"
      },
      {
        "places": "DrakesIsland",
        "years": "1898"
      },
      {
        "places": "DrakesIsland",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "10",
    "page": "61",
    "sciName": "Chenopodium murale L",
    "comName": "Nettle-leaved Goosefoot",
    "entries": [
      {
        "places": "CundysHarbor",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "6",
    "page": "49",
    "sciName": "Symphyotrichum novae-angliae (L) Nesom",
    "comName": "New England American-aster",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "36, 37",
    "sciName": "Packera schweinitziana (Nutt) W A Weber & A Love",
    "comName": "New England Groundsel",
    "entries": [
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
    "volume": "6",
    "page": "43, 44",
    "sciName": "Symphyotrichum novae-belgii (L) Nesom",
    "comName": "New York American-aster",
    "entries": [
      {
        "places": "Sorrento",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "6",
    "page": "42, 45, 46, 107",
    "sciName": "Symphyotrichum novi-belgii (L) Nesom",
    "comName": "New York American-aster",
    "entries": [
      {
        "places": "LivermoreFalls",
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
    "volume": "2",
    "page": "45, 43VA",
    "sciName": "Silene noctiflora L",
    "comName": "Night-flowering Campion",
    "entries": [
      {
        "places": "SouthPoland",
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
    "volume": "8",
    "page": "72",
    "sciName": "Chimaphila umbellata (L) W Bart",
    "comName": "Noble Prince's-pine",
    "entries": [
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
    "volume": "7",
    "page": "13",
    "sciName": "Bidens cernua L",
    "comName": "Nodding Beggar-ticks",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
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
    "sciName": "Spiranthes cernua (L) L C Rich",
    "comName": "Nodding Ladies'-tresses",
    "entries": [
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
    "volume": "14",
    "page": "11",
    "sciName": "Trillium cernuum L",
    "comName": "Nodding Wakerobin",
    "entries": []
  },
  {
    "volume": "9",
    "page": "31",
    "sciName": "Penstemon hirsutus (L) Willd",
    "comName": "Northeastern Beardtongue",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "13",
    "page": "43",
    "sciName": "Sagittaria cuneta Sheldon",
    "comName": "Northern Arrowhead",
    "entries": [
      {
        "places": "SaintFrancis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "6",
    "page": "10",
    "sciName": "Galium boreale L",
    "comName": "Northern Bedstraw",
    "entries": [
      {
        "places": "MtKatahdin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "4",
    "page": "32",
    "sciName": "Rubus flagellaris Willd",
    "comName": "Northern Blackberry",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "6",
    "page": "18",
    "sciName": "Liatris novae-angliae (Lunell) Shinners",
    "comName": "Northern Blazing Star",
    "entries": [
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
    "volume": "6",
    "page": "4",
    "sciName": "Galium labradoricum (Wieg) Wieg",
    "comName": "Northern Bog Bedstraw",
    "entries": [
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
    "volume": "3",
    "page": "4",
    "sciName": "Geranium bicknelii Britt",
    "comName": "Northern Crane's-bill",
    "entries": [
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
    "volume": "10",
    "page": "33",
    "sciName": "Gentianella amarella (L) Boerner",
    "comName": "Northern Dwarf-gentian",
    "entries": [
      {
        "places": "Houlton",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "14",
    "page": "60",
    "sciName": "Juncus alpinoarticulatus Chaix ex Vill",
    "comName": "Northern Green Rush",
    "entries": [
      {
        "places": "FortKent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "9",
    "page": "52",
    "sciName": "Castilleja septentrionalis Lindl",
    "comName": "Northern Painted-cup",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1880"
      },
      {
        "places": "SaintFrancis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "12",
    "page": "13, 15, 16",
    "sciName": "Quercus rubra L",
    "comName": "Northern Red Oak",
    "entries": [
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
    "volume": "2",
    "page": "80, 81",
    "sciName": "Hypericum boreale Bickn",
    "comName": "Northern Saint John's-wort",
    "entries": [
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
    "volume": "13",
    "page": "17",
    "sciName": "Potamogeton spirillus Tuckerman",
    "comName": "Northern Snail-seed Pondweed",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
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
    "page": "22",
    "sciName": "Petasites frigidus (L) Fries",
    "comName": "Northern Sweet-coltsfoot",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "PresqueIsle",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "13",
    "page": "48",
    "sciName": "Platanthera flava (L) Lindl",
    "comName": "Northern Tubercled Bog-orchid",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "12",
    "page": "81",
    "sciName": "Thuja occidentalis L",
    "comName": "Northern White-cedar",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "11",
    "page": "37",
    "sciName": "Lindera benzoin (L) Blume",
    "comName": "Norththern Spicebush",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1874"
      },
      {
        "places": "Wells",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "4",
    "page": "54",
    "sciName": "Potentilla norvegica L",
    "comName": "Norwegian Cinquefoil",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "5",
    "page": "23",
    "sciName": "Oenothera oakesiana (Gray) J W Robbins",
    "comName": "Oake's Evening-primrose",
    "entries": [
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
    "volume": "9",
    "page": "26",
    "sciName": "Nuttallanthus canadensis (L) D A Sutton",
    "comName": "Oldfield-toadflax",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "OldOrchardBeach",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "2",
    "page": "89v",
    "sciName": "Nuttallanthus canadensis D A Sutton",
    "comName": "Oldfield-toadflax",
    "entries": []
  },
  {
    "volume": "9",
    "page": "23",
    "sciName": "Orobanche uniflora L",
    "comName": "One-flowered Broom-rape",
    "entries": [
      {
        "places": "Waterville",
        "years": "1871"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Brunswick",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "8",
    "page": "73",
    "sciName": "Monotropa uniflora L",
    "comName": "One-flowered Indian-pipe",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1869"
      },
      {
        "places": "SouthPoland",
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
    "page": "71",
    "sciName": "Moneses uniflora (L) Gray",
    "comName": "One-flowered Shinleaf",
    "entries": [
      {
        "places": "FortKent",
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "36",
    "sciName": "Sicyos angulatus L",
    "comName": "One-seeded Burr-cucumber",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "4",
    "page": "84",
    "sciName": "Crataegus monogyna Jacq",
    "comName": "One-seeded Hawthorn",
    "entries": [
      {
        "places": "NorthLubec",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "8",
    "page": "67, 69",
    "sciName": "Orithilia seconda (L) House",
    "comName": "One-sided Shinleaf",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "FortFairfield",
        "years": "1880"
      },
      {
        "places": "FortKent",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
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
    "comName": "One-sided Shinleaf",
    "entries": []
  },
  {
    "volume": "7",
    "page": "55",
    "sciName": "Hieracium aurantiacum L",
    "comName": "Orange Hawkweed",
    "entries": [
      {
        "places": "Strong",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "DiamondIsland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "92",
    "sciName": "Triosteum aurantiacum Bickn",
    "comName": "Orange-fruited Horse-gentian",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "DrakesIsland",
        "years": "1905"
      }
    ]
  },
  {
    "volume": "2",
    "page": "85",
    "sciName": "Hypericum gentianoides B S P",
    "comName": "Orange-grass Saint John's-wort",
    "entries": [
      {
        "places": "Wells",
        "years": "1874"
      },
      {
        "places": "FortPopham",
        "years": "1908"
      }
    ]
  },
  {
    "volume": "12",
    "page": "46",
    "sciName": "Salix viminalis L",
    "comName": "Osier Willow",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1878"
      },
      {
        "places": "Harpswell",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "7",
    "page": "19",
    "sciName": "Leucantheum vulgare Lam",
    "comName": "Ox-eye Daisy",
    "entries": [
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
    "volume": "14",
    "page": "12",
    "sciName": "Trillium undulatum Willd",
    "comName": "Painted Wakerobin",
    "entries": []
  },
  {
    "volume": "7",
    "page": "6",
    "sciName": "Echinacea pallida (Nutt) Nutt",
    "comName": "Pale Purple Coneflower",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "2",
    "page": "76, 77",
    "sciName": "Hypericum ellipticum Hook",
    "comName": "Pale Saint John's-wort",
    "entries": [
      {
        "places": "FortFairfield",
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
    "volume": "3",
    "page": "8",
    "sciName": "Impatiens pallida Nutt",
    "comName": "Pale Touch-me-not",
    "entries": [
      {
        "places": "SaintFrancis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "8",
    "page": "83",
    "sciName": "Plantago virginca L",
    "comName": "Pale-seeded Plantain",
    "entries": [
      {
        "places": "YorkCliffs",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "8",
    "page": "3",
    "sciName": "Lobelia spicata Lam",
    "comName": "Pale-spiked Lobelia",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "54",
    "sciName": "Hieracium paniculatum L",
    "comName": "Panicled Hawkweed",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "volume": "3",
    "page": "57",
    "sciName": "Desmodium paniculatum (L) DC",
    "comName": "Panicled Tick-trefoil",
    "entries": [
      {
        "places": "WestPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "12",
    "page": "34",
    "sciName": "Betula papyrifera Marsh",
    "comName": "Paper Birch",
    "entries": [
      {
        "places": "MtKatahdin",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "7",
    "page": "103, 104",
    "sciName": "Antennaria parlinii Fern",
    "comName": "Parlin's Pussytoes",
    "entries": [
      {
        "places": "NorthBerwick",
        "years": "1898"
      },
      {
        "places": "North Berwick",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "6",
    "page": "13",
    "sciName": "Mitchella repens L",
    "comName": "Partridge-berry",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "14",
    "page": "53",
    "sciName": "Juncus tenuis Willd",
    "comName": "Path Rush",
    "entries": []
  },
  {
    "volume": "7",
    "page": "18",
    "sciName": "Achillea ptarmica L",
    "comName": "Pearl Yarrow",
    "entries": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "7",
    "page": "30",
    "sciName": "Anaphalis margaritacea (L) Benth & Hook f",
    "comName": "Pearly Everlasting",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "volume": "4",
    "page": "29",
    "sciName": "Rubus pensilvanicus Poir",
    "comName": "Pennsylvania Blackberry",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1884"
      }
    ]
  },
  {
    "volume": "11",
    "page": "20, 21",
    "sciName": "Persicaria pensylvanica (L) G Maza",
    "comName": "Pennsylvania Smartweed",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
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
    "volume": "1",
    "page": "68",
    "sciName": "Cardamine pensylvanica Muhl ex Willd",
    "comName": "Pennsylvanian Bitter-cress",
    "entries": [
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
    "volume": "6",
    "page": "105, 106",
    "sciName": "Symphyotrichum tenuifolium (L) Nesom",
    "comName": "Perennial Saltmarsh American-aster",
    "entries": [
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
    "volume": "11",
    "page": "48",
    "sciName": "Euphorbia peplus L",
    "comName": "Petty Spurge",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "6",
    "page": "58",
    "sciName": "Erigeron philadelphicus L",
    "comName": "Philadelphia Fleabane",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "EastLivermore",
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
    "volume": "14",
    "page": "69",
    "sciName": "Pontederia cordata L",
    "comName": "Pickerelweed",
    "entries": []
  },
  {
    "volume": "4",
    "page": "9, 13",
    "sciName": "Prunus pensylvanica L",
    "comName": "Pin Cherry",
    "entries": [
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
    "volume": "1",
    "page": "94",
    "sciName": "Hudsonia ericoides L",
    "comName": "Pine-barren False Heather",
    "entries": [
      {
        "places": "CapeSmallPoint",
        "years": "1888"
      }
    ]
  },
  {
    "volume": "1",
    "page": "62",
    "sciName": "Cardamine douglassii Britt",
    "comName": "Pink Bitter-cress",
    "entries": [
      {
        "places": "Wells",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "13",
    "page": "86, 88",
    "sciName": "Cypripedium acaule Ait",
    "comName": "Pink Lady's-slipper",
    "entries": [
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
      },
      {
        "places": "Fayette",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "8",
    "page": "61, 62",
    "sciName": "Pyrola asarifolia Michx",
    "comName": "Pink Shinleaf",
    "entries": [
      {
        "places": "FortKent",
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
    "volume": "1",
    "page": "59",
    "sciName": "Capnoides sempervirens (L) Borkh",
    "comName": "Pink-corydalis",
    "entries": [
      {
        "places": "Orono",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
    "volume": "3",
    "page": "42",
    "sciName": "Trifolium campestre Schreb",
    "comName": "Pinnate Hop Clover",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Rockland",
        "years": "1903"
      },
      {
        "places": "IsleauHaut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "12",
    "page": "67",
    "sciName": "Pinus rigida P Mill",
    "comName": "Pitch Pine",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "7",
    "page": "29",
    "sciName": "Antennaria plantaginifolia (L) Richardson",
    "comName": "Plaintain-leaved Pussytoes",
    "entries": [
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
    "volume": "13",
    "page": "32",
    "sciName": "Scheuchzeria palustris L",
    "comName": "Pod-grass",
    "entries": [
      {
        "places": "Bangor",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "3",
    "page": "56",
    "sciName": "Hylodesmum glutinosum (L) H Ohashi & R R Mill",
    "comName": "Pointed-leaved Tick-trefoil",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
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
    "volume": "5",
    "page": "59",
    "sciName": "Conium maculatum L",
    "comName": "Poison-hemlock",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "GreatDiamondIsland",
        "years": "1892"
      },
      {
        "places": "SouthPoland",
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
    "sciName": "Toxicodendron radicans (L) Kuntze",
    "comName": "Poison-ivy",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "3",
    "page": "28, 27V",
    "sciName": "Toxicodendron vernix (L) Kuntze",
    "comName": "Poison-sumac",
    "entries": [
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
    "volume": "10",
    "page": "43, 44",
    "sciName": "Asclepias exaltata L",
    "comName": "Poke Milkweed",
    "entries": [
      {
        "places": "SouthPoland",
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
    "volume": "1",
    "page": "89",
    "sciName": "Lepidicum virginicum L",
    "comName": "Poor-man's Pepperweed",
    "entries": [
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "SouthPoland",
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
    "sciName": "Lepidium virginicum L",
    "comName": "Poor-man's Pepperweed",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1890"
      },
      {
        "places": "WellsBeach",
        "years": "1897"
      },
      {
        "places": "Brunswick",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "7",
    "page": "100",
    "sciName": "Helianthus petiolaris Nutt",
    "comName": "Prairie Sunflower",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "12",
    "page": "40",
    "sciName": "Salix humilis Marsh",
    "comName": "Prairie Willow",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "2",
    "page": "14",
    "sciName": "Viola primulifolia L",
    "comName": "Primrose-leaved Violet",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1878"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "9",
    "page": "46",
    "sciName": "Agalinis purpurea (Gray) Pennell",
    "comName": "Purple Agalinis",
    "entries": [
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
    "volume": "7",
    "page": "109",
    "sciName": "Gamochaeta purpurea (L) Cabrera",
    "comName": "Purple Cudweed",
    "entries": [
      {
        "places": "NorthBerwick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "6",
    "page": "19",
    "sciName": "Eutrochium purpureum (L) E E Lamont var. purpureum",
    "comName": "Purple Joe-pye Weed",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "45",
    "sciName": "Medicago sativa L",
    "comName": "Purple Medick",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "5",
    "page": "3",
    "sciName": "Hylotelephium telephium (L) H Ohba",
    "comName": "Purple Orpine",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "51, 52",
    "sciName": "Sarracenia purpurea L",
    "comName": "Purple Pitcherplant",
    "entries": [
      {
        "places": "Fayette",
        "years": "1871"
      },
      {
        "places": "RangeleyRegion",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
    "volume": "",
    "page": "1",
    "sciName": "Clematis occidentalis (Hornem) DC",
    "comName": "Purple Virgin's-bower",
    "entries": [
      {
        "places": "Orono",
        "years": "1881"
      },
      {
        "places": "FortKent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "6",
    "page": "100",
    "sciName": "Symphyotrichum puniceum (L) A & D Love",
    "comName": "Purple-stemmed American-aster",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "6",
    "page": "47, 48",
    "sciName": "Symphyotrichum puniceum (L) A & D Love var. puniceum",
    "comName": "Purple-stemmed American-aster",
    "entries": [
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
    "sciName": "Symphyotrichum puniceum (L) A & Love",
    "comName": "Purple-stemmed American-aster",
    "entries": [
      {
        "places": "VanBuren",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "5",
    "page": "44",
    "sciName": "Angelica atropurpurea L",
    "comName": "Purple-stemmed Angelica",
    "entries": [
      {
        "places": "Farmington",
        "years": "1878"
      },
      {
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "7",
    "page": "12, 99",
    "sciName": "Bidens connata Muhl ex Willd",
    "comName": "Purple-stemmed Beggar-ticks",
    "entries": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells Beach",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "8",
    "page": "92, 93",
    "sciName": "Plantago patagonica Jacq",
    "comName": "Pursh's Plantain",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Winnegance",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "9",
    "page": "42",
    "sciName": "Veronica peregrina L",
    "comName": "Purslane Speedwell",
    "entries": [
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
    "volume": "12",
    "page": "41, 42",
    "sciName": "Salix discolor Muhl",
    "comName": "Pussy Willow",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
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
    "page": "63",
    "sciName": "Populus tremuloides Michx",
    "comName": "Quaking Poplar",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1874"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Hiram",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "3",
    "page": "37",
    "sciName": "Trifolium arvense L",
    "comName": "Rabbit-foot Clover",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "3",
    "page": "31, 31V",
    "sciName": "Polygala polygama Walt",
    "comName": "Racemed Milkwort",
    "entries": [
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
    "volume": "2",
    "page": "48VA",
    "sciName": "Lychnis flos-cuculi L",
    "comName": "Ragged Robin Lychnis",
    "entries": [
      {
        "places": "Wells",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "9",
    "page": "51",
    "sciName": "Euphrasia randii B L Robins",
    "comName": "Rand's Eyebright",
    "entries": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "7",
    "page": "53",
    "sciName": "Hieracium venosum L",
    "comName": "Rattlesnake Hawkweed",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1877"
      },
      {
        "places": "FayetteRidge",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "7",
    "page": "20",
    "sciName": "Matricaria discoidea DC",
    "comName": "Rayless Chamomille",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "RoqueBluffs",
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
    "volume": "1",
    "page": "37",
    "sciName": "Actaea rubra (Ait) Willd",
    "comName": "Red Baneberry",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "42",
    "sciName": "Arctostaphylos uva-ursi (L) Spreng",
    "comName": "Red Bearberry",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "SouthPoland",
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
    "page": "95, 96",
    "sciName": "Sambucus racemosa L",
    "comName": "Red Elderberry",
    "entries": [
      {
        "places": "Northport",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
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
    "page": "55",
    "sciName": "Odontites vernus (Bellardi) Dumort",
    "comName": "Red False Bartsia",
    "entries": [
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
    "volume": "10",
    "page": "64",
    "sciName": "Chenopodium rubrum L",
    "comName": "Red Goosefoot",
    "entries": [
      {
        "places": "WellsBeach",
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
    "page": "1",
    "sciName": "Lobelia cardinalis L",
    "comName": "Red Lobelia",
    "entries": [
      {
        "places": "Topsham",
        "years": "1870"
      },
      {
        "places": "EastWilton",
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
    "volume": "3",
    "page": "24, 22V, 23V",
    "sciName": "Acer rubrum L",
    "comName": "Red Maple",
    "entries": [
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
    "volume": "12",
    "page": "70",
    "sciName": "Pinus resinosa Ait",
    "comName": "Red Pine",
    "entries": [
      {
        "places": "LivermoreFalls",
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
        "places": "MtDay",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "28",
    "sciName": "Rubus idaeus L",
    "comName": "Red Raspberry",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "EastLivermore",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "2",
    "page": "68",
    "sciName": "Spergularia rubra (L) J & K Presl",
    "comName": "Red Sand-spurry",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "12",
    "page": "72, 73",
    "sciName": "Picea rubens Sarg",
    "comName": "Red Spruce",
    "entries": [
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
    "volume": "14",
    "page": "6",
    "sciName": "Trillium erectum L",
    "comName": "Red Wakerobin",
    "entries": []
  },
  {
    "volume": "5",
    "page": "74, 75, 77",
    "sciName": "Swida sericea (L) Holub",
    "comName": "Red-osier Dogwood",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
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
    "volume": "10",
    "page": "81",
    "sciName": "Amaranthus retroflexus L",
    "comName": "Red-rooted Amaranth",
    "entries": [
      {
        "places": "Topsham",
        "years": "1907"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "5",
    "sciName": "Erodium cicutarium (L) L'HÃ©r",
    "comName": "Red-stemmed Stork's-bill",
    "entries": [
      {
        "places": "EastWilton",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "4",
    "page": "10, 78, 79",
    "sciName": "Aronia arbutifolia (L) Pers",
    "comName": "Redchokeberry",
    "entries": [
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
    "volume": "3",
    "page": "38",
    "sciName": "Trifolium pratense L",
    "comName": "Redclover",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "1",
    "page": "35, 53",
    "sciName": "Aquilegia canadensis L",
    "comName": "Redcolumbine",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Topsham",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "WestBath",
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
    "volume": "13",
    "page": "29",
    "sciName": "Potamogeton alpinus Balbis",
    "comName": "Reddish Pondweed",
    "entries": [
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "SaintFrancis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "9",
    "page": "19",
    "sciName": "Utricularia resupinata B D Greene ex Bigelow",
    "comName": "Resupinate Bladderwort",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1877"
      },
      {
        "places": "IsleauHaut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "8",
    "page": "59",
    "sciName": "Rhododendron canadense (L) Torr",
    "comName": "Rhodora",
    "entries": []
  },
  {
    "volume": "11",
    "page": "42, 43",
    "sciName": "Euphorbia glyptosperma Engelm",
    "comName": "Rib-seeded Sandmat",
    "entries": [
      {
        "places": "RumfordCenter",
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
    "volume": "13",
    "page": "25",
    "sciName": "Potamogeton epihydrus Raf",
    "comName": "Ribbon-leaved Pondweed",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "3",
    "page": "16V",
    "sciName": "Vitis riparia Michx",
    "comName": "River Grape",
    "entries": [
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
    "page": "51, 52",
    "sciName": "Astragalus robbinsii (Oakes) Gray",
    "comName": "Robbin's Milk-vetch",
    "entries": [
      {
        "places": "FortKent",
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
    "page": "28",
    "sciName": "Potamogeton robbinsii Oakes",
    "comName": "Robbins' Pondweed",
    "entries": [
      {
        "places": "Readfield",
        "years": "1892"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "6",
    "page": "57",
    "sciName": "Erigeron pulchellus Michx",
    "comName": "Robin's Plaintain Fleabane",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
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
    "page": "4",
    "sciName": "Rhodiola rosea L",
    "comName": "Roseroot",
    "entries": [
      {
        "places": "TheIsland",
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
    "volume": "4",
    "page": "23",
    "sciName": "Spiraea tomentosa L",
    "comName": "Rosy Meadowsweet",
    "entries": [
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
    "volume": "6",
    "page": "2",
    "sciName": "Galium asprellum Michx",
    "comName": "Rough Bedstraw",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "EastLivermore",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1892"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "2, 3, 4",
    "sciName": "Xanthium strumarium L",
    "comName": "Rough Cocklebur",
    "entries": [
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
    "volume": "6",
    "page": "60",
    "sciName": "Erigeron strigosus Muhl ex Willd",
    "comName": "Rough Fleabane",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "FayetteRidge",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "52, 56, 57",
    "sciName": "Hieracium scabrum Michx",
    "comName": "Rough Hawkweed",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "WestBaldwin",
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
    "volume": "6",
    "page": "28, 29, 90, 91",
    "sciName": "Eurybia radula (Ait) Nesom",
    "comName": "Rough Wood-aster",
    "entries": [
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
    "sciName": "Eurybia radula Nesom",
    "comName": "Rough Wood-aster",
    "entries": [
      {
        "places": "Sorrento",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "6",
    "page": "79",
    "sciName": "Solidago patula Muhl ex Willd",
    "comName": "Rough-leaved Goldenrod",
    "entries": [
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
    "volume": "9",
    "page": "34",
    "sciName": "Gratiola virginiana L",
    "comName": "Round-fruited Hedge-hyssop",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "1",
    "page": "97, 98, 99, 100",
    "sciName": "Lechea intermedia Leggett ex Britt",
    "comName": "Round-fruited Pinweed",
    "entries": [
      {
        "places": "LeedsCenter",
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
    "volume": "3",
    "page": "62",
    "sciName": "Lespedeza capitata Michx",
    "comName": "Round-headed Bush-clover",
    "entries": [
      {
        "places": "Wells",
        "years": "1897"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      },
      {
        "places": "Brunswick",
        "years": "1904"
      }
    ]
  },
  {
    "volume": "13",
    "page": "54",
    "sciName": "Platanthera orbiculata (Pursh) Lindl",
    "comName": "Round-leaved Bog-orchid",
    "entries": [
      {
        "places": "FayetteRidge",
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
    "volume": "5",
    "page": "72, 73",
    "sciName": "Swida rugosa (Lam ) Rydb",
    "comName": "Round-leaved Dogwood",
    "entries": [
      {
        "places": "SouthPoland",
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
    "page": "113, 114",
    "sciName": "Swida rugosa (Lam) Rydb",
    "comName": "Round-leaved Dogwood",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Chesterville Ridge",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "4",
    "page": "96",
    "sciName": "Amelanchier sanguinea (Pursh) DC",
    "comName": "Round-leaved Shadbush",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "2",
    "page": "24, 25",
    "sciName": "Viola rotundifolia Michx",
    "comName": "Round-leaved Violet",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1873"
      },
      {
        "places": "SouthPoland",
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
    "volume": "8",
    "page": "85",
    "sciName": "Plantago rugelli Dcne",
    "comName": "Rugel's Plantain",
    "entries": [
      {
        "places": "WestBath",
        "years": "1892"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "EastLivermore",
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
    "volume": "3",
    "page": "53",
    "sciName": "Oxytropis campestris (L) DC",
    "comName": "Saint John River Oxytrope",
    "entries": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "FortKent",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "9",
    "page": "47",
    "sciName": "Agalinis maritima (Raf) Raf",
    "comName": "Saltmarsh Agalinis",
    "entries": [
      {
        "places": "Ogunquit",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "13",
    "page": "31",
    "sciName": "Triglochin maritima L",
    "comName": "Saltmarsh Arrow-grass",
    "entries": [
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
    "volume": "14",
    "page": "52",
    "sciName": "Juncus gerardii Loisel",
    "comName": "Saltmarsh Rush",
    "entries": []
  },
  {
    "volume": "2",
    "page": "69, 70",
    "sciName": "Spergularia marina Griseb",
    "comName": "Saltmarsh Sand-spurry",
    "entries": [
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
    "page": "60",
    "sciName": "Stellaria humifusa Rottb",
    "comName": "Saltmarsh Stitchwort",
    "entries": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "10",
    "page": "78",
    "sciName": "Salsola kali L",
    "comName": "Saltwort",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1879"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      }
    ]
  },
  {
    "volume": "1",
    "page": "95",
    "sciName": "Hudsonia tomentosa Nutt",
    "comName": "Sand False Heather",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Ogunquit",
        "years": "1898"
      },
      {
        "places": "DrakesIsland",
        "years": "1898"
      },
      {
        "places": "Wells",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "12",
    "page": "55",
    "sciName": "Salix exigua Nutt",
    "comName": "Sandbar Willow",
    "entries": [
      {
        "places": "Poland",
        "years": "1895"
      },
      {
        "places": "MiddleRangePond",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "11",
    "page": "36",
    "sciName": "Sassafras albidum (Nutt) Nees",
    "comName": "Sassafras",
    "entries": [
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
    "volume": "9",
    "page": "80",
    "sciName": "Monarda didyma L",
    "comName": "Scarlet Bee-balm",
    "entries": [
      {
        "places": "Fayette",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "4",
    "page": "85, 86, 87",
    "sciName": "Crataegus macracantha Lodd ex Loud",
    "comName": "Scarlet Hawthorn",
    "entries": [
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
    "volume": "12",
    "page": "12, 14",
    "sciName": "Quercus coccinea Muenchh",
    "comName": "Scarlet Oak",
    "entries": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
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
    "volume": "9",
    "page": "12",
    "sciName": "Lysimachia arvensis (L) U Manns & A Anderb",
    "comName": "Scarlet Pimpernel",
    "entries": [
      {
        "places": "FortCliffs",
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
    "volume": "8",
    "page": "9, 10",
    "sciName": "Campanula rotundifolia L",
    "comName": "Scotch Bellflower",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "FortFairfield",
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
    "volume": "5",
    "page": "47",
    "sciName": "Ligusticum scoticum L",
    "comName": "Scotch Wild Lovage",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "WellsBeach",
        "years": "1898"
      },
      {
        "places": "IsleauHaut",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "12",
    "page": "11",
    "sciName": "Quercus ilicifolia Wangenh",
    "comName": "Scrub Oak",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Topsham",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
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
    "volume": "5",
    "page": "45, 49, 50",
    "sciName": "Angelica lucida L",
    "comName": "Sea Coast Angelica",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1879"
      },
      {
        "places": "Harpswell",
        "years": "1876"
      },
      {
        "places": "WestBath",
        "years": "1892"
      },
      {
        "places": "IsleauHaut",
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
    "volume": "10",
    "page": "70, 71, 72, 73",
    "sciName": "Salicornia maritima Wolff & Jefferies",
    "comName": "Sea Glasswort",
    "entries": [
      {
        "places": "WellsBeach",
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
    "volume": "9",
    "page": "11",
    "sciName": "Lysimachia maritima (L) Galasso, Banfi, & Soldano",
    "comName": "Sea-milkwort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1875"
      },
      {
        "places": "GreatDiamondIsland",
        "years": "1888"
      },
      {
        "places": "WestBath",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "11",
    "page": "3",
    "sciName": "Rumex pallidus Bigelow",
    "comName": "Seabeach Dock",
    "entries": [
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
    "volume": "10",
    "page": "7, 8",
    "sciName": "Mertensia maritima (L) S F Gray",
    "comName": "Seaside Bluebelles",
    "entries": [
      {
        "places": "YorkBeach",
        "years": "1878"
      },
      {
        "places": "EastMachias",
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
    "volume": "9",
    "page": "13, 14",
    "sciName": "Samolus valerandi L",
    "comName": "Seaside Brookweed",
    "entries": [
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
    "page": "18",
    "sciName": "Ranunculus cymbalaria Pursh",
    "comName": "Seaside Crowfoot",
    "entries": [
      {
        "places": "HarpswellNeck",
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
    "volume": "6",
    "page": "75, 76, 112",
    "sciName": "Solidago sempervirens L",
    "comName": "Seaside Goldenrod",
    "entries": [
      {
        "places": "SouthFreeport",
        "years": "1905"
      },
      {
        "places": "WestBath",
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
    "volume": "11",
    "page": "12",
    "sciName": "Polygonum glaucum Nutt",
    "comName": "Seaside Knotweed",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1897"
      },
      {
        "places": "WellsBeach",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "8",
    "page": "87, 88",
    "sciName": "Plantago maritima L",
    "comName": "Seaside Plaintain",
    "entries": [
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
    "volume": "11",
    "page": "41",
    "sciName": "Euphorbia polygonifolia L",
    "comName": "Seaside Sandmat",
    "entries": [
      {
        "places": "YorkBeach",
        "years": "1879"
      },
      {
        "places": "Winnegance",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "2",
    "page": "53",
    "sciName": "Honckenya peploides (L) Ehrh",
    "comName": "Seaside-sandwort",
    "entries": [
      {
        "places": "Machias",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "14",
    "page": "20",
    "sciName": "Uvularia sessifolia L",
    "comName": "Sessile-leaved Bellwort",
    "entries": []
  },
  {
    "volume": "4",
    "page": "38",
    "sciName": "Rubus setosus Bigelow",
    "comName": "Setose Blackberry",
    "entries": [
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "14",
    "page": "71",
    "sciName": "Eriocaulon aquaticum (Hill) Duce",
    "comName": "Seven-angled Pipewort",
    "entries": []
  },
  {
    "volume": "6",
    "page": "51, 52",
    "sciName": "Oclemena acuminata (Michx) Nesom",
    "comName": "Sharp-toothed Nodding-aster",
    "entries": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
    "volume": "8",
    "page": "52",
    "sciName": "Kalmia angustifolia L",
    "comName": "Sheep American-laurel",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "EastLivermore",
        "years": "1880"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
        "years": "1880"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "1",
    "page": "86",
    "sciName": "Capsella bursa-pastoris (L) Medik",
    "comName": "Shepherd's Purse",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "13",
    "page": "90",
    "sciName": "Spiranthes lucida (H H Eat) Ames",
    "comName": "Shining Ladies'-tresses",
    "entries": []
  },
  {
    "volume": "4",
    "page": "73, 74",
    "sciName": "Rosa nitida Willd",
    "comName": "Shining Rose",
    "entries": [
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
    "volume": "12",
    "page": "50, 51",
    "sciName": "Salix lucida Muhl",
    "comName": "Shining Willow",
    "entries": [
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
    "volume": "14",
    "page": "68",
    "sciName": "Juncus brevicaudatus (Engelm ) Fern",
    "comName": "Short-tailed Rush",
    "entries": []
  },
  {
    "volume": "14",
    "page": "56",
    "sciName": "Juncus brevicaudatus (Engelm) Fern",
    "comName": "Short-tailed Rush",
    "entries": []
  },
  {
    "volume": "13",
    "page": "85, 89",
    "sciName": "Cypripedium reginae Walt",
    "comName": "Showy Lady's-slipper",
    "entries": [
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
    "volume": "13",
    "page": "46",
    "sciName": "Galearis spectabilis (L) Raf",
    "comName": "Showy Orchid",
    "entries": [
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "3",
    "page": "58, 69V",
    "sciName": "Desmodium canadense (L) DC",
    "comName": "Showy Trick-trefoil",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "LisbonFalls",
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
        "places": "SouthPoland",
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
    "page": "70, 57V",
    "sciName": "Desmodium canadense DC",
    "comName": "Showy Trick-trefoil",
    "entries": [
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
    "volume": "4",
    "page": "59",
    "sciName": "Dasiphora floribunda Raf",
    "comName": "Shrubby-cinquefoil",
    "entries": [
      {
        "places": "NorthWaynePond",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "3",
    "page": "68",
    "sciName": "Amphicarpaea bracteata (L) Fern",
    "comName": "Silk-tree",
    "entries": [
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "12",
    "page": "44",
    "sciName": "Salix sericea Marsh",
    "comName": "Silky Willow",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "3",
    "page": "21",
    "sciName": "Acer saccharinum L",
    "comName": "Silver Maple",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "4",
    "page": "56",
    "sciName": "Potentilla argentea L",
    "comName": "Silver-leavedcinquefoil",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1890"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "13",
    "page": "7",
    "sciName": "Sparganium emersum Rehmann",
    "comName": "Simple-stemmed Bur-reed",
    "entries": [
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "FortKent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "12",
    "page": "95",
    "sciName": "Acorus calamus L",
    "comName": "Single-veined Sweetflag",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1874"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Avon",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "12",
    "page": "93",
    "sciName": "Symplocarpus foetidus (L) Salisb ex Nutt",
    "comName": "Skunk-cabbage",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "4",
    "page": "112",
    "sciName": "Ribes glandulosum Grauer",
    "comName": "Skunk-currant",
    "entries": [
      {
        "places": "CushingIsland",
        "years": "1876"
      },
      {
        "places": "LivermoreFalls",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "2",
    "page": "44",
    "sciName": "Silene antirrhina L",
    "comName": "Sleepy Campion",
    "entries": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "11",
    "page": "14",
    "sciName": "Polygonum tenue Michx",
    "comName": "Slender Knotweed",
    "entries": [
      {
        "places": "Wells",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "13",
    "page": "65",
    "sciName": "Spiranthes lacera Raf",
    "comName": "Slender Ladies'-tresses",
    "entries": [
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
    "volume": "5",
    "page": "8",
    "sciName": "Myriophyllum tenellum Bigelow",
    "comName": "Slender Water-milfoil",
    "entries": [
      {
        "places": "Fayette",
        "years": "1876"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "ChemoPond",
        "years": "1880"
      },
      {
        "places": "Greenvale",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "9",
    "page": "48",
    "sciName": "Agalinis tenuifolia (Vahl) Raf",
    "comName": "Slender-leaved Agalinis",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "12",
    "page": "27",
    "sciName": "Morella caroliniensis (P Mill) Small",
    "comName": "Small Bayberry",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "WestBath",
        "years": "1874"
      }
    ]
  },
  {
    "volume": "10",
    "page": "4",
    "sciName": "Anchusa arvensis (L) Bieb",
    "comName": "Small Bugloss",
    "entries": [
      {
        "places": "MountDesert",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "8",
    "page": "16",
    "sciName": "Vaccinium oxycoccos L",
    "comName": "Small Cranberry",
    "entries": [
      {
        "places": "Bangor",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
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
    "volume": "5",
    "page": "14",
    "sciName": "Circaea alpina L",
    "comName": "Small Enchanter's-nightshade",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Caribou",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "13",
    "page": "26",
    "sciName": "Potamogeton pusillus L",
    "comName": "Small Pondweed",
    "entries": [
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
    "volume": "7",
    "page": "105, 107",
    "sciName": "Antennaria howellii Greene",
    "comName": "Small Pussytoes",
    "entries": [
      {
        "places": "NorthBerwick",
        "years": "1898"
      },
      {
        "places": "North Berwick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "14",
    "page": "70",
    "sciName": "Xyris smalliana Nash",
    "comName": "Small's Yellow-eyed-grass",
    "entries": []
  },
  {
    "volume": "9",
    "page": "45",
    "sciName": "Agalinis paupercula (Gray) Britt",
    "comName": "Small-flowered Agalinis",
    "entries": []
  },
  {
    "volume": "1",
    "page": "65, 66",
    "sciName": "Cardamine parviflora L",
    "comName": "Small-flowered Bitter-cress",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "SouthPoland",
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
    "volume": "14",
    "page": "42",
    "sciName": "Luzula parviflora (Ehrh) Desv",
    "comName": "Small-flowered Wood Rush",
    "entries": []
  },
  {
    "volume": "1",
    "page": "50",
    "sciName": "Nuphar microphylla (Pers) Fern",
    "comName": "Small-leaved Pond-lily",
    "entries": [
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
    "volume": "11",
    "page": "61, 62",
    "sciName": "Boehmeria cylindrica (L) Sw",
    "comName": "Small-spiked False Nettle",
    "entries": [
      {
        "places": "Readfield",
        "years": "1892"
      },
      {
        "places": "LeedsCenter",
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
    "volume": "12",
    "page": "38",
    "sciName": "Alnus serrulata (Ait) Willd",
    "comName": "Smooth Alder",
    "entries": [
      {
        "places": "SouthPoland",
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
    "volume": "5",
    "page": "101",
    "sciName": "Viburnum dentatum L",
    "comName": "Smooth Arrowwood",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "4",
    "page": "37",
    "sciName": "Rubus canadensis L",
    "comName": "Smooth Blackberry",
    "entries": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "6",
    "page": "86, 87",
    "sciName": "Solidago gigantea Ait",
    "comName": "Smooth Goldenrod",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1892"
      },
      {
        "places": "CoplinPlatform",
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
    "volume": "1",
    "page": "69",
    "sciName": "Boechera laevigata (Muhl ex Willd) Al-Shehbaz",
    "comName": "Smooth Rockcress",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "4",
    "page": "67",
    "sciName": "Rosa blanda Ait",
    "comName": "Smooth Rose",
    "entries": [
      {
        "places": "FortKent",
        "years": "1880"
      },
      {
        "places": "FortFairfield",
        "years": "1880"
      },
      {
        "places": "Dover",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "3",
    "page": "26",
    "sciName": "Rhus glabra L",
    "comName": "Smooth Sumac",
    "entries": [
      {
        "places": "EastLivermore",
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "2",
    "page": "19, 20",
    "sciName": "Viola pallens (Banks ex DC) Brainerd",
    "comName": "Smooth White Violet",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "volume": "12",
    "page": "61",
    "sciName": "Salix herbacea L",
    "comName": "Snow-bed Willow",
    "entries": []
  },
  {
    "volume": "2",
    "page": "41",
    "sciName": "Silene nivea (Nutt) Muhl ex Otth",
    "comName": "Snowy Campion",
    "entries": [
      {
        "places": "Orono",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "13",
    "page": "33",
    "sciName": "Alisma subcordatum Raf",
    "comName": "Southern Water-plantain",
    "entries": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "Brunswick",
        "years": "1899"
      },
      {
        "places": "SouthPoland",
        "years": "1904"
      },
      {
        "places": "York",
        "years": "1904"
      },
      {
        "places": "LivermoreFalls",
        "years": "1904"
      }
    ]
  },
  {
    "volume": "12",
    "page": "18",
    "sciName": "Castanea sativa P Mill",
    "comName": "Spanish Chestnut",
    "entries": [
      {
        "places": "FayetteRidge",
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
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Falmouth",
        "years": "1806"
      }
    ]
  },
  {
    "volume": "10",
    "page": "65, 66, 67, 69",
    "sciName": "Atriplex patula L",
    "comName": "Spearscale Orache",
    "entries": [
      {
        "places": "WellsBeach",
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
    "volume": "12",
    "page": "37",
    "sciName": "Alnus incana (L) Moench",
    "comName": "Speckled Alder",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1878"
      },
      {
        "places": "Monhegan",
        "years": "1910"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "79",
    "sciName": "Carduus acanthoides L",
    "comName": "Spiny Plumeless-thistle",
    "entries": [
      {
        "places": "Fayette",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "7",
    "page": "73",
    "sciName": "Sonchus asper (L) Hill",
    "comName": "Spiny-leaved Sow-thistle",
    "entries": [
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
    "volume": "13",
    "page": "41, 42",
    "sciName": "Sagittaria montevidensis Cham & Schlecht",
    "comName": "Spongy-leaved Arrowhead",
    "entries": [
      {
        "places": "WestBath",
        "years": "1907"
      },
      {
        "places": "WestBath",
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
    "page": "42a, 42b",
    "sciName": "Sagittaria montevidensis Cham & Schlect",
    "comName": "Spongy-leaved Arrowhead",
    "entries": [
      {
        "places": "Rangeley Village",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "1",
    "page": "31, 105",
    "sciName": "Ranunculus repens L",
    "comName": "Spot-leavedcrowfoot",
    "entries": [
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
    "volume": "2",
    "page": "79",
    "sciName": "Hypericum punctatum Lam",
    "comName": "Spotted Saint John's-wort",
    "entries": [
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
    "volume": "11",
    "page": "44",
    "sciName": "Euphorbia maculata L",
    "comName": "Spotted Sandmat",
    "entries": [
      {
        "places": "NorthBerwick",
        "years": "1891"
      },
      {
        "places": "Brunswick",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "3",
    "page": "9, 10, 8v",
    "sciName": "Impatiens capensis Meerb",
    "comName": "Spotted Touch-me-not",
    "entries": [
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
    "volume": "5",
    "page": "52",
    "sciName": "Cicuta maculata L",
    "comName": "Spotted Water-hemlock",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "13",
    "page": "81",
    "sciName": "Corallorhiza maculata Raf",
    "comName": "Spottedcoral-root",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Livermore",
        "years": "1875"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "3",
    "page": "1",
    "sciName": "Geranium maculatum L",
    "comName": "Spottedcrane's-bill",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "volume": "10",
    "page": "38",
    "sciName": "Apocynum androsaemifolium L",
    "comName": "Spreading Dogbane",
    "entries": [
      {
        "places": "Harpswell",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "page": "37",
    "sciName": "Apocynum x floribundum Greene",
    "comName": "Spreading Dogbane Hybrid",
    "entries": [
      {
        "places": "Topsham",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "6",
    "page": "63",
    "sciName": "Solidago squarrosa Muhl",
    "comName": "Squarrose Goldenrod",
    "entries": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "EastLivermore",
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
    "volume": "5",
    "page": "105",
    "sciName": "Viburnum edule (Michx) Raf",
    "comName": "Squashberry",
    "entries": []
  },
  {
    "volume": "3",
    "page": "25",
    "sciName": "Rhus hirta (L) Sudworth",
    "comName": "Staghorn Sumac",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "14",
    "page": "30",
    "sciName": "Maianthemum stellatum (L) Link",
    "comName": "Star-like False Solomon's Seal",
    "entries": []
  },
  {
    "volume": "9",
    "page": "4",
    "sciName": "Lysimachia borealis (Raf) U Manns & A Anderb",
    "comName": "Starflower",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      },
      {
        "places": "Wells",
        "years": "1998"
      }
    ]
  },
  {
    "volume": "2",
    "page": "43",
    "sciName": "Silene stellata (L) Ait f",
    "comName": "Starry Campion",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "2",
    "page": "42",
    "sciName": "Silene stellata Ait",
    "comName": "Starry Campion",
    "entries": [
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
    "volume": "14",
    "page": "17",
    "sciName": "Triantha glutinosa (Michx) Baker",
    "comName": "Sticky False Asphodel",
    "entries": []
  },
  {
    "volume": "11",
    "page": "57, 58",
    "sciName": "Urtica dioica L",
    "comName": "Stinging Nettle",
    "entries": [
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
    "volume": "7",
    "page": "15",
    "sciName": "Anthemis cotula L",
    "comName": "Stinking Chamomile",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1874"
      },
      {
        "places": "SouthPoland",
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
    "sciName": "Anthemis cotula L / Anthemis arvensis L",
    "comName": "Stinking Chamomile/ Corn Chamomile",
    "entries": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "10",
    "page": "63",
    "sciName": "Chenopodium capitatum (L) Aschers",
    "comName": "Strawberry-blite",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1880"
      },
      {
        "places": "KingsburyPlantation",
        "years": "1880"
      },
      {
        "places": "Chesterville",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "3",
    "page": "19",
    "sciName": "Acer pensylvanicum L",
    "comName": "Striped Maple",
    "entries": [
      {
        "places": "Fayette",
        "years": "1878"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "4",
    "page": "58",
    "sciName": "Potentilla recta L",
    "comName": "Sulphur Cinquefoil",
    "entries": [
      {
        "places": "Lewiston",
        "years": "1901"
      },
      {
        "places": "WestParis",
        "years": "1903"
      }
    ]
  },
  {
    "volume": "11",
    "page": "47",
    "sciName": "Euphorbia helioscopia L",
    "comName": "Sun Spurge",
    "entries": [
      {
        "places": "SaintFrancis",
        "years": "1881"
      },
      {
        "places": "CapeSmallPoint",
        "years": "1890"
      }
    ]
  },
  {
    "volume": "7",
    "page": "5",
    "sciName": "Helopsis helianthoides (L) Sweet",
    "comName": "Sunflower-everlasting",
    "entries": [
      {
        "places": "Woodstock",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "1",
    "page": "27",
    "sciName": "Ranunculus caricetorum Greene",
    "comName": "Swamp Crowfoot",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "Brewer",
        "years": "1880"
      },
      {
        "places": "GreatDiamondIsland",
        "years": "1888"
      }
    ]
  },
  {
    "volume": "5",
    "page": "90",
    "sciName": "Lonicera oblongifolia (Goldie) Hook",
    "comName": "Swamp Honeysuckle",
    "entries": [
      {
        "places": "PresqueIsle",
        "years": "1880"
      },
      {
        "places": "Patten",
        "years": "1881"
      },
      {
        "places": "SaintFrancis",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "5",
    "page": "35A",
    "sciName": "Decodon verticillatus (L) Ell",
    "comName": "Swamp Loosestrife",
    "entries": [
      {
        "places": "NorthWaynePond",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "10",
    "page": "45, 46, 47",
    "sciName": "Asclepias incarnata L",
    "comName": "Swamp Milkweed",
    "entries": [
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
    "volume": "4",
    "page": "102",
    "sciName": "Michranths pensylvanica (L) Haw",
    "comName": "Swamp Small-flowered Saxifrage",
    "entries": [
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
    "volume": "7",
    "page": "42",
    "sciName": "Cirsium muticum Michx",
    "comName": "Swamp Thistle",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "12",
    "page": "8",
    "sciName": "Quercus bicolor Willd",
    "comName": "Swamp White Oak",
    "entries": [
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
    "volume": "9",
    "page": "6",
    "sciName": "Lysimachia terrestris (L) B S P",
    "comName": "Swamp Yellow-loosestrife",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "4",
    "page": "6",
    "sciName": "Prunus avium (L) L",
    "comName": "Sweet Cherry",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "2",
    "page": "13, 21",
    "sciName": "Viola blanda Willd",
    "comName": "Sweet White Violet",
    "entries": [
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
    "volume": "4",
    "page": "75, 76, 77",
    "sciName": "Rosa rubiginosa L",
    "comName": "Sweet-briar Rose",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
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
    "volume": "12",
    "page": "28",
    "sciName": "Comptonia peregrina (L) Coult",
    "comName": "Sweet-fern",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "2",
    "page": "37",
    "sciName": "Atocion armeria (L) Raf",
    "comName": "Sweet-william-catchfly",
    "entries": [
      {
        "places": "MountDesert",
        "years": "1888"
      }
    ]
  },
  {
    "volume": "12",
    "page": "26",
    "sciName": "Myrica gale L",
    "comName": "Sweetgale",
    "entries": [
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
    "volume": "9",
    "page": "15",
    "sciName": "Utricularia inflata Walt",
    "comName": "Swollen Bladderwort",
    "entries": [
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Wayne",
        "years": "1896"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "11",
    "sciName": "Bidens vulgata Greene / Bidens frondosa L",
    "comName": "Tall Beggar-ticks/ Devil's Beggar-ticks",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "7",
    "page": "68, 70",
    "sciName": "Lactuca biennis (Moench) Fern",
    "comName": "Tall Blue Lettuce",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "ChestervillePlains",
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
    "comName": "Tall Blue Lettuce",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      }
    ]
  },
  {
    "volume": "1",
    "page": "32",
    "sciName": "Ranunculus acris L",
    "comName": "Tall Crowfoot",
    "entries": []
  },
  {
    "volume": "7",
    "page": "69",
    "sciName": "Lactuca hirsuta Muhl ex Nutt",
    "comName": "Tall Hairy Lettuce",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "7",
    "page": "86",
    "sciName": "Hieracium praealtum Vill ex Gochnat",
    "comName": "Tall Hawkweed",
    "entries": [
      {
        "places": "WestGardiner",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "7",
    "page": "67",
    "sciName": "Lactuca canadensis L",
    "comName": "Tall Lettuce",
    "entries": [
      {
        "places": "Fayette",
        "years": "1871"
      },
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "ChestervillePlains",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "1",
    "page": "13, 15, 16",
    "sciName": "Thalictrum pubescens Pursh",
    "comName": "Tall Meadow-rue",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "MooseheadLake",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
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
    "volume": "7",
    "page": "60",
    "sciName": "Nabalus altissimus (L) Hook",
    "comName": "Tall Rattlesnake-root",
    "entries": [
      {
        "places": "EastLivermore",
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
    "page": "10",
    "sciName": "Helianthus giganteus L",
    "comName": "Tall Sunflower",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "6",
    "page": "62, 104",
    "sciName": "Doellingeria umbellata (P Mill) Nees",
    "comName": "Tall White-aster",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1875"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Fort Kent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "1",
    "page": "6, 8",
    "sciName": "Anemone virginiana L",
    "comName": "Tall Windflower",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1880"
      },
      {
        "places": "Chesterville",
        "years": "1896"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "KentsHill",
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
    "volume": "4",
    "page": "52",
    "sciName": "Drymocallis arguta (Pursh) Rydb",
    "comName": "Tall Wood-beauty",
    "entries": [
      {
        "places": "Waterville",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "4",
    "page": "53",
    "sciName": "Drymocallis arguta Rydb",
    "comName": "Tall Wood-beauty",
    "entries": [
      {
        "places": "FortFairfield",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "13",
    "page": "45",
    "sciName": "Vallisneria americana Michx",
    "comName": "Tape-grass",
    "entries": [
      {
        "places": "Waterville",
        "years": "1898"
      },
      {
        "places": "EastEddington",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "7",
    "page": "9",
    "sciName": "Helianthus decapetalus L",
    "comName": "Thin-leaved Sunflower",
    "entries": [
      {
        "places": "Farmington",
        "years": "1882"
      },
      {
        "places": "Farmington",
        "years": "1894"
      },
      {
        "places": "LivermoreFalls",
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
    "volume": "10",
    "page": "25",
    "sciName": "Datura stramonium L",
    "comName": "Thorn-apple",
    "entries": []
  },
  {
    "volume": "14",
    "page": "46",
    "sciName": "Juncus filiformis L",
    "comName": "Thread Rush",
    "entries": [
      {
        "places": "SaintJohnsRiver",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "14",
    "page": "31",
    "sciName": "Maianthemum trifolium (L) Sloboda",
    "comName": "Three-leaved False Solomon's Seal",
    "entries": []
  },
  {
    "volume": "1",
    "page": "34",
    "sciName": "Coptis trifolia (L) Salisb",
    "comName": "Three-leaved Goldthread",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "58, 59, 61",
    "sciName": "Nabalus trifoliolatus Cass",
    "comName": "Three-leaved Rattlesnake-root",
    "entries": [
      {
        "places": "LivermoreFalls",
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
    "volume": "6",
    "page": "3, 6",
    "sciName": "Galium trifidum L",
    "comName": "Three-petaled Bedstraw",
    "entries": [
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
        "places": "FortFairfield",
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
    "volume": "2",
    "page": "49, 53VA",
    "sciName": "Arenaria serpyllifolia L",
    "comName": "Thyme-leaved Sandwort",
    "entries": [
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
    "volume": "9",
    "page": "41",
    "sciName": "Veronica serpyllifolia L",
    "comName": "Thyme-leaved Speedwell",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "MooseheadLake",
        "years": "1891"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "14",
    "page": "51",
    "sciName": "Juncus bufonius L",
    "comName": "Toad Rush",
    "entries": []
  },
  {
    "volume": "3",
    "page": "47",
    "sciName": "Medicago polymorpha L",
    "comName": "Toothed Medick",
    "entries": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "NorthBerwick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "70, 71",
    "sciName": "Turritis glabra L",
    "comName": "Tower-mustard",
    "entries": [
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
    "page": "37, 38",
    "sciName": "Symphyotrichum tradescantii (L) Nesom",
    "comName": "Tradescant's American-aster",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1878"
      },
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
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
    "page": "59",
    "sciName": "Lespedeza procumbens Michx",
    "comName": "Trailing Bush-clover",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "8",
    "page": "43, 44",
    "sciName": "Epigaea repens L",
    "comName": "Trailing-arbutus",
    "entries": [
      {
        "places": "FortKent",
        "years": "1894"
      },
      {
        "places": "EastLivermore",
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
    "page": "83",
    "sciName": "Lonicera sempervirens L",
    "comName": "Trumpet Honeysuckle",
    "entries": []
  },
  {
    "volume": "9",
    "page": "30",
    "sciName": "Penstemon tubiflorus Nutt",
    "comName": "Tube Beardtongue",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "13",
    "page": "72",
    "sciName": "Calopogon tuberosus B S P",
    "comName": "Tuberous Grass-pink",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "Brunswick",
        "years": "1888"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
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
    "sciName": "Lysimachia thyrsiflora L",
    "comName": "Tufted Yellow-loosestrife",
    "entries": [
      {
        "places": "Orono",
        "years": "1880"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "10",
    "page": "83",
    "sciName": "Amaranthus albus L",
    "comName": "Tumbleweed Amaranth",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
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
    "page": "84",
    "sciName": "Sisymbrium altissimum L",
    "comName": "Tumbling Hedge-mustard",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1894"
      },
      {
        "places": "Brunswick",
        "years": "1905"
      }
    ]
  },
  {
    "volume": "4",
    "page": "105",
    "sciName": "Mitella diphylla L",
    "comName": "Two Leaved Bishop's-cap",
    "entries": [
      {
        "places": "LivermoreFalls",
        "years": "1878"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "1",
    "page": "60, 61",
    "sciName": "Cardamine diphylla (Michx) Wood",
    "comName": "Two-leaved Toothwort",
    "entries": [
      {
        "places": "Gilead",
        "years": "1887"
      },
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
    "page": "67",
    "sciName": "Nasturium officinale Ait f",
    "comName": "Two-rowed Water Cress",
    "entries": [
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
    "page": "110, 111",
    "sciName": "Nasturtium officinale Ait f",
    "comName": "Two-rowed Water Cress",
    "entries": [
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
    "volume": "10",
    "page": "15",
    "sciName": "Calystegia spithamaea (L) Pursh",
    "comName": "Upright False Bindweed",
    "entries": []
  },
  {
    "volume": "11",
    "page": "15",
    "sciName": "Polygonum erectum L",
    "comName": "Upright Knotweed",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "1",
    "page": "79",
    "sciName": "Barbarea stricta Andrz",
    "comName": "Upright Yellow-rocket",
    "entries": [
      {
        "places": "FortKent",
        "years": "1880"
      },
      {
        "places": "FortKent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "14",
    "page": "55",
    "sciName": "Juncus vaseyi Engelm",
    "comName": "Vasey's Rush",
    "entries": []
  },
  {
    "volume": "8",
    "page": "31, 32",
    "sciName": "Vaccinium myrtilloides Michx.",
    "comName": "Velvet-leaved Bluberry",
    "entries": [
      {
        "places": "SouthPoland",
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
    "volume": "5",
    "page": "121",
    "sciName": "Callitriche palustris L",
    "comName": "Vernal Water-starwort",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
    "volume": "3",
    "page": "60",
    "sciName": "Lespedeza frutescens (L) Hornem",
    "comName": "Violet Bush-clover",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "3",
    "page": "18",
    "sciName": "Parthenocissus quinquefoli (L) Planch",
    "comName": "Virginia Creeper",
    "entries": [
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
    "volume": "7",
    "page": "50",
    "sciName": "Krigia virginica (L) Willd",
    "comName": "Virginia Dwarf-dandelion",
    "entries": [
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
    "volume": "2",
    "page": "86, 87",
    "sciName": "Triadenum virginicum Raf",
    "comName": "Virginia Marsh-saint John's-wort",
    "entries": [
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
    "volume": "5",
    "page": "32",
    "sciName": "Rhexia virginica L",
    "comName": "Virginia Meadow-beauty",
    "entries": [
      {
        "places": "Bradley",
        "years": "1892"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "9",
    "page": "75, 77",
    "sciName": "Pycnanthenum virginianum (L) T Dur & B D Jackson ex B L Robins & Fern",
    "comName": "Virginia Mountain-mint",
    "entries": [
      {
        "places": "Madison",
        "years": "1892"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "FayetteRidge",
        "years": "1877"
      },
      {
        "places": "Fayette Ridge",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "4",
    "page": "70, 71",
    "sciName": "Rosa virginiana P Mill",
    "comName": "Virginia Rose",
    "entries": [
      {
        "places": "MtHoward",
        "years": "1902"
      },
      {
        "places": "Brunswick",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "10",
    "page": "34",
    "sciName": "Bartonia virginica (L) B S P",
    "comName": "Virginia Screwstem",
    "entries": [
      {
        "places": "CapeElizabeth",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "11",
    "page": "49",
    "sciName": "Acalypha virginica L ",
    "comName": "Virginia Three-seeded Mercury",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "EastLivermore",
        "years": "1894"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      },
      {
        "places": "Brunswick",
        "years": "1907"
      }
    ]
  },
  {
    "volume": "1",
    "page": "3",
    "sciName": "Clematis virginiana L",
    "comName": "Virginia Virgin's-bower",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "9",
    "page": "72",
    "sciName": "Lycopus virginicus L",
    "comName": "Virginia Water-horehound",
    "entries": [
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
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Wells",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "4",
    "page": "46",
    "sciName": "Geum rivale L",
    "comName": "Water Avens",
    "entries": [
      {
        "places": "FayetteRidge",
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
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "8",
    "page": "7, 8",
    "sciName": "Lobelia dortmanna L",
    "comName": "Water Lobelia",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1869"
      },
      {
        "places": "FayetteRidge",
        "years": "1871"
      },
      {
        "places": "FayetteRidge",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
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
    "volume": "9",
    "page": "65, 66",
    "sciName": "Mentha x piperita L",
    "comName": "Water Mint Hybrid",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "SouthPoland",
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
    "volume": "11",
    "page": "22, 23, 26",
    "sciName": "Persicaria amphibia (L) S F Gray",
    "comName": "Water Smartweed",
    "entries": [
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
    "volume": "5",
    "page": "54",
    "sciName": "Sium suave Walt",
    "comName": "Water-parsnip",
    "entries": [
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
    "volume": "1",
    "page": "20",
    "sciName": "Rannuculus ambigens S Wats",
    "comName": "Water-plantain Crowfoot",
    "entries": [
      {
        "places": "NorthBerwick",
        "years": "1896"
      }
    ]
  },
  {
    "volume": "1",
    "page": "43",
    "sciName": "Brasenia schreberi J F Gmel",
    "comName": "Water-shield",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1875"
      },
      {
        "places": "RangeleyVillage",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Brunswick",
        "years": "1908"
      }
    ]
  },
  {
    "volume": "6",
    "page": "31",
    "sciName": "Symphyotrichum undulatum (L) Nesom",
    "comName": "Wavy-leaved American-aster",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1879"
      },
      {
        "places": "Strong",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
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
    "volume": "11",
    "page": "8, 9",
    "sciName": "Rumex occidentalis S Wats",
    "comName": "Western Dock",
    "entries": [
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
    "volume": "13",
    "page": "75",
    "sciName": "Malaxis monophyllos Sw",
    "comName": "White Adder's-mouth",
    "entries": [
      {
        "places": "Caribou",
        "years": "1880"
      },
      {
        "places": "VanBuren",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "10",
    "page": "49",
    "sciName": "Fraxinus americana L",
    "comName": "White Ash",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1898"
      }
    ]
  },
  {
    "volume": "4",
    "page": "40",
    "sciName": "Geum canadense Jacq",
    "comName": "White Avens",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1892"
      },
      {
        "places": "Harpswell",
        "years": "1876"
      },
      {
        "places": "WellsBeach",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "39",
    "sciName": "Actaea pachypoda Ell",
    "comName": "White Baneberry",
    "entries": []
  },
  {
    "volume": "2",
    "page": "47",
    "sciName": "Silene latifolia Poir",
    "comName": "White Campion",
    "entries": [
      {
        "places": "Rangeley",
        "years": "1894"
      },
      {
        "places": "Sabattus",
        "years": "1901"
      },
      {
        "places": "EastLivermore",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "3",
    "page": "40",
    "sciName": "Trifolium repens L",
    "comName": "White Clover",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "13",
    "page": "55, 56",
    "sciName": "Platanthera blephariglottis (Willd) Lindl",
    "comName": "White Fringed Bog-orchid",
    "entries": [
      {
        "places": "FayetteRidge",
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
    "volume": "6",
    "page": "64, 65, 110",
    "sciName": "Solidago bicolor L",
    "comName": "White Goldenrod",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "Gilead",
        "years": "1897"
      },
      {
        "places": "WestBaldwin",
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
    "volume": "10",
    "page": "59",
    "sciName": "Chenopodium album L",
    "comName": "White Goosefoot",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "4",
    "page": "22",
    "sciName": "Spiraea alba Du Roi",
    "comName": "White Meadowsweet",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "Rangeley",
        "years": "1892"
      },
      {
        "places": "WestBaldwin",
        "years": "1900"
      }
    ]
  },
  {
    "volume": "4",
    "page": "47",
    "sciName": "Geum peckii Pursh",
    "comName": "White Mountain Avens",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1871"
      }
    ]
  },
  {
    "volume": "13",
    "page": "51",
    "sciName": "Platanthera dilatata (Pursh) Lindl ex Beck",
    "comName": "White Northern Bog-orchid",
    "entries": [
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
    "volume": "6",
    "page": "21",
    "sciName": "Ageratina altissima (L) King & H E Robins",
    "comName": "White Snakeroot",
    "entries": [
      {
        "places": "VanBuren",
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
        "places": "LongPlantation",
        "years": "1894"
      },
      {
        "places": "Coplin",
        "years": "1894"
      }
    ]
  },
  {
    "volume": "12",
    "page": "75",
    "sciName": "Picea glauca (Moench) Voss",
    "comName": "White Spruce",
    "entries": [
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
    "volume": "3",
    "page": "44",
    "sciName": "Melilotus alba Medik",
    "comName": "White Sweet-clover",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "9",
    "page": "29",
    "sciName": "Chelone glabra L",
    "comName": "White Turtlehead",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1871"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "9",
    "page": "60",
    "sciName": "Verbena urticifolia L",
    "comName": "White Vervain",
    "entries": [
      {
        "places": "Wells",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "12",
    "page": "2",
    "sciName": "Juglans cinerea L",
    "comName": "White Walnut",
    "entries": [
      {
        "places": "FayetteRidge",
        "years": "1875"
      }
    ]
  },
  {
    "volume": "1",
    "page": "17",
    "sciName": "Ranunculus aquatilis L",
    "comName": "White Water Crowfoot",
    "entries": [
      {
        "places": "FortKent",
        "years": "1881"
      }
    ]
  },
  {
    "volume": "1",
    "page": "44, 45",
    "sciName": "Nymphaea odorata Ait",
    "comName": "White Water-lily",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "SouthPoland",
        "years": "1882"
      },
      {
        "places": "RangeleyRegion",
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
    "volume": "12",
    "page": "54",
    "sciName": "Salix alba L",
    "comName": "White Willow",
    "entries": [
      {
        "places": "FortKent",
        "years": "1880"
      }
    ]
  },
  {
    "volume": "12",
    "page": "45, 53",
    "sciName": "Salix x fragilis L",
    "comName": "White Willow [Hybrid]",
    "entries": [
      {
        "places": "Wells",
        "years": "1898"
      },
      {
        "places": "SouthPoland",
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
    "volume": "6",
    "page": "25",
    "sciName": "Eurybia divaricata (L) Nesom",
    "comName": "White Wood-aster",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1878"
      },
      {
        "places": "SouthPoland",
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
    "page": "1",
    "sciName": "Galium mollugo L",
    "comName": "Whorled Bedstraw",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "BustinsIsland",
        "years": "1909"
      }
    ]
  },
  {
    "volume": "3",
    "page": "34",
    "sciName": "Polygala verticillata L",
    "comName": "Whorled Milkwort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1887"
      }
    ]
  },
  {
    "volume": "5",
    "page": "6, 120",
    "sciName": "Myriophyllum verticillatum L",
    "comName": "Whorled Water-milfoil",
    "entries": [
      {
        "places": "SaintFrancis",
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
    "volume": "9",
    "page": "78",
    "sciName": "Clinopodium vulgare L",
    "comName": "Wild Basil",
    "entries": [
      {
        "places": "VanBuren",
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
    "volume": "10",
    "page": "10",
    "sciName": "Cynoglossum virginianum L",
    "comName": "Wild Hound's Tongue",
    "entries": [
      {
        "places": "Chesterville",
        "years": "1878"
      }
    ]
  },
  {
    "volume": "14",
    "page": "40a",
    "sciName": "Allium tricoccum Ait",
    "comName": "Wild Leek",
    "entries": [
      {
        "places": "EagleIsland",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "5",
    "page": "43",
    "sciName": "Pastinaca sativa L",
    "comName": "Wild Parsnip",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "1",
    "page": "92",
    "sciName": "Raphanus raphanistrum L",
    "comName": "Wild Radish",
    "entries": [
      {
        "places": "Orono",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
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
    "page": "64, 65",
    "sciName": "Aralia nudicaulis L",
    "comName": "Wild Sasparilla",
    "entries": [
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
    "volume": "12",
    "page": "91, 92",
    "sciName": "Calla palustris L",
    "comName": "Wildcalla",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "FortKent",
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
    "page": "41",
    "sciName": "Daucus carota L",
    "comName": "Wildcarrot",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1876"
      }
    ]
  },
  {
    "volume": "14",
    "page": "39",
    "sciName": "Allium shoenoprasum L",
    "comName": "Wildchives",
    "entries": []
  },
  {
    "volume": "5",
    "page": "37",
    "sciName": "Echinocystis labata (Michx) Torr & Gray",
    "comName": "Wildcucumber",
    "entries": []
  },
  {
    "volume": "3",
    "page": "27",
    "sciName": "Rhus copallinum L",
    "comName": "Winged Sumac",
    "entries": [
      {
        "places": "Shapleigh",
        "years": "1891"
      }
    ]
  },
  {
    "volume": "5",
    "page": "99",
    "sciName": "Viburnum nudum L",
    "comName": "Withe-rod",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1877"
      },
      {
        "places": "SouthPoland",
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
    "volume": "14",
    "page": "35",
    "sciName": "Lilium philadelphicum L",
    "comName": "Wood Lily",
    "entries": []
  },
  {
    "volume": "7",
    "page": "108",
    "sciName": "Omalotheca sylvatica Schultz-Bip & F W Schultz",
    "comName": "Woodland Arctic Cudweed",
    "entries": [
      {
        "places": "AroostookCounty",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "9",
    "page": "28",
    "sciName": "Scrophularia nodosa L",
    "comName": "Woodland Figwort",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1900"
      },
      {
        "places": "DrakesIsland",
        "years": "1897"
      },
      {
        "places": "Castine",
        "years": "1903"
      },
      {
        "places": "SouthPoland",
        "years": "1891"
      },
      {
        "places": "Orono",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "7",
    "page": "93",
    "sciName": "Senecio sylvaticus L",
    "comName": "Woodland Ragwort",
    "entries": [
      {
        "places": "Cutler",
        "years": "1902"
      },
      {
        "places": "NorthLubec",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "4",
    "page": "50, 51",
    "sciName": "Fragaria vesca L",
    "comName": "Woodland Strawberry",
    "entries": [
      {
        "places": "FortKent",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
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
    "volume": "7",
    "page": "8, 90, 94",
    "sciName": "Helianthus divaricatus L",
    "comName": "Woodland Sunflower",
    "entries": [
      {
        "places": "WestBaldwin",
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
    "volume": "2",
    "page": "90v",
    "sciName": "Linum virginianum L",
    "comName": "Woodland Yellow Flax",
    "entries": []
  },
  {
    "volume": "2",
    "page": "9",
    "sciName": "Viola sororia Willd",
    "comName": "Woolly Blue Violet",
    "entries": [
      {
        "places": "Gray",
        "years": "1908"
      },
      {
        "places": "WestBath",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "1",
    "page": "81",
    "sciName": "Erysimum cheiranthoides L",
    "comName": "Wormseed Wallflower",
    "entries": [
      {
        "places": "WellsBeach",
        "years": "1879"
      },
      {
        "places": "Strong",
        "years": "1882"
      }
    ]
  },
  {
    "volume": "4",
    "page": "45",
    "sciName": "Geum aleppicum Jacq",
    "comName": "Yellow Avens",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1870"
      },
      {
        "places": "WestBath",
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
    "volume": "12",
    "page": "30",
    "sciName": "Betula alleghaniensis Britt",
    "comName": "Yellow Birch",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1881"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      }
    ]
  },
  {
    "volume": "14",
    "page": "26",
    "sciName": "Clintonia borealis (Ait) Raf",
    "comName": "Yellow Bluebead-lily",
    "entries": []
  },
  {
    "volume": "12",
    "page": "10",
    "sciName": "Quercus muehlenbergii Engelm",
    "comName": "Yellow Chestnut Oak",
    "entries": [
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
    "volume": "2",
    "page": "26, 27, 28, 30",
    "sciName": "Viola pubescens var scabriuscula Torr & Gray",
    "comName": "Yellow Forest Violet",
    "entries": [
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
    "volume": "7",
    "page": "83",
    "sciName": "Hieracium caespitosum Dumort",
    "comName": "Yellow Hawkweed",
    "entries": [
      {
        "places": "Cutler",
        "years": "1902"
      }
    ]
  },
  {
    "volume": "8",
    "page": "1b, 83, 84",
    "sciName": "Cypripedium parviflorum Salisb",
    "comName": "Yellow Lady's-slipper",
    "entries": [
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
    "volume": "8",
    "page": "75",
    "sciName": "Hypopitys monotropa Crantz",
    "comName": "Yellow Pine-sap",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1973"
      },
      {
        "places": "SouthPoland",
        "years": "1899"
      }
    ]
  },
  {
    "volume": "3",
    "page": "43",
    "sciName": "Melilotus officinalis (L) Lam",
    "comName": "Yellow Sweet-clover",
    "entries": [
      {
        "places": "Brunswick",
        "years": "1891"
      },
      {
        "places": "Bangor",
        "years": "1891"
      },
      {
        "places": "SouthPoland",
        "years": "1895"
      }
    ]
  },
  {
    "volume": "3",
    "page": "35",
    "sciName": "Baptisia tinctoria (L) R Br ex Ait f",
    "comName": "Yellow Wild Indigo",
    "entries": [
      {
        "places": "Wells",
        "years": "1877"
      }
    ]
  },
  {
    "volume": "11",
    "page": "16",
    "sciName": "Polygonum ramosissimum Michx",
    "comName": "Yellow-flowered Knotweed",
    "entries": [
      {
        "places": "NorthBerwick",
        "years": "1879"
      }
    ]
  },
  {
    "volume": "9",
    "page": "36",
    "sciName": "Lindernia dubia (L) Pennell",
    "comName": "Yellow-seeded False Pimpernel",
    "entries": [
      {
        "places": "Topsham",
        "years": "1876"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "ScarboroughBeach",
        "years": "1901"
      }
    ]
  },
  {
    "volume": "6",
    "page": "66",
    "sciName": "Solidago flexicaulis L",
    "comName": "Zig-zag Goldenrod",
    "entries": [
      {
        "places": "EastLivermore",
        "years": "1878"
      },
      {
        "places": "Rangeley",
        "years": "1882"
      },
      {
        "places": "SouthPoland",
        "years": "1893"
      },
      {
        "places": "Gilead",
        "years": "1897"
      }
    ]
  },
  {
    "volume": "3",
    "page": "39",
    "sciName": "Trifolium medium L",
    "comName": "Zigzag Clover",
    "entries": [
      {
        "places": "SouthPoland",
        "years": "1897"
      }
    ]
  }
]