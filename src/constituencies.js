const hexes = [
  {
    "n": "Orkney and Shetland",
    "q": 9,
    "r": -28
  },
  {
    "n": "Na h-Eileanan an Iar",
    "q": 5,
    "r": -26
  },
  {
    "n": "Caithness, Sutherland and Easter Ross",
    "q": 7,
    "r": -26
  },
  {
    "n": "Aberdeen North",
    "q": 9,
    "r": -25
  },
  {
    "n": "Gordon",
    "q": 8,
    "r": -25
  },
  {
    "n": "Inverness, Nairn, Badenoch and Strathspey",
    "q": 6,
    "r": -25
  },
  {
    "n": "Ross, Skye and Lochaber",
    "q": 5,
    "r": -24
  },
  {
    "n": "Moray",
    "q": 6,
    "r": -24
  },
  {
    "n": "Banff and Buchan",
    "q": 7,
    "r": -24
  },
  {
    "n": "West Aberdeenshire and Kincardine",
    "q": 8,
    "r": -24
  },
  {
    "n": "Aberdeen South",
    "q": 9,
    "r": -24
  },
  {
    "n": "North East Fife",
    "q": 8,
    "r": -23
  },
  {
    "n": "Angus",
    "q": 7,
    "r": -23
  },
  {
    "n": "Dundee West",
    "q": 6,
    "r": -23
  },
  {
    "n": "Perth and North Perthshire",
    "q": 5,
    "r": -23
  },
  {
    "n": "Argyll and Bute",
    "q": 4,
    "r": -23
  },
  {
    "n": "West Dunbartonshire",
    "q": 2,
    "r": -22
  },
  {
    "n": "East Dunbartonshire",
    "q": 3,
    "r": -22
  },
  {
    "n": "Stirling",
    "q": 4,
    "r": -22
  },
  {
    "n": "Ochil and South Perthshire",
    "q": 5,
    "r": -22
  },
  {
    "n": "Dundee East",
    "q": 6,
    "r": -22
  },
  {
    "n": "Glenrothes",
    "q": 7,
    "r": -22
  },
  {
    "n": "Kirkcaldy and Cowdenbeath",
    "q": 6,
    "r": -21
  },
  {
    "n": "Dunfermline and West Fife",
    "q": 5,
    "r": -21
  },
  {
    "n": "Falkirk",
    "q": 4,
    "r": -21
  },
  {
    "n": "Cumbernauld, Kilsyth and Kirkintilloch East",
    "q": 3,
    "r": -21
  },
  {
    "n": "Glasgow North East",
    "q": 2,
    "r": -21
  },
  {
    "n": "Glasgow North West",
    "q": 1,
    "r": -21
  },
  {
    "n": "Inverclyde",
    "q": 0,
    "r": -21
  },
  {
    "n": "Paisley and Renfrewshire North",
    "q": 0,
    "r": -20
  },
  {
    "n": "Glasgow North",
    "q": 1,
    "r": -20
  },
  {
    "n": "Coatbridge, Chryston and Bellshill",
    "q": 2,
    "r": -20
  },
  {
    "n": "Airdrie and Shotts",
    "q": 3,
    "r": -20
  },
  {
    "n": "Linlithgow and East Falkirk",
    "q": 4,
    "r": -20
  },
  {
    "n": "Edinburgh East",
    "q": 5,
    "r": -19
  },
  {
    "n": "Edinburgh North and Leith",
    "q": 4,
    "r": -19
  },
  {
    "n": "Edinburgh West",
    "q": 3,
    "r": -19
  },
  {
    "n": "Motherwell and Wishaw",
    "q": 2,
    "r": -19
  },
  {
    "n": "Glasgow Central",
    "q": 1,
    "r": -19
  },
  {
    "n": "Glasgow South West",
    "q": 0,
    "r": -19
  },
  {
    "n": "Paisley and Renfrewshire South",
    "q": -1,
    "r": -19
  },
  {
    "n": "North Ayrshire and Arran",
    "q": -2,
    "r": -18
  },
  {
    "n": "East Renfrewshire",
    "q": -1,
    "r": -18
  },
  {
    "n": "Glasgow South",
    "q": 0,
    "r": -18
  },
  {
    "n": "Glasgow East",
    "q": 1,
    "r": -18
  },
  {
    "n": "Livingston",
    "q": 2,
    "r": -18
  },
  {
    "n": "Edinburgh South West",
    "q": 3,
    "r": -18
  },
  {
    "n": "Edinburgh South",
    "q": 4,
    "r": -18
  },
  {
    "n": "East Lothian",
    "q": 5,
    "r": -18
  },
  {
    "n": "Tynemouth",
    "q": 8,
    "r": -17
  },
  {
    "n": "Blyth Valley",
    "q": 7,
    "r": -17
  },
  {
    "n": "Wansbeck",
    "q": 6,
    "r": -17
  },
  {
    "n": "Berwick-upon-Tweed",
    "q": 5,
    "r": -17
  },
  {
    "n": "Berwickshire, Roxburgh and Selkirk",
    "q": 4,
    "r": -17
  },
  {
    "n": "Midlothian",
    "q": 3,
    "r": -17
  },
  {
    "n": "Lanark and Hamilton East",
    "q": 2,
    "r": -17
  },
  {
    "n": "East Kilbride, Strathaven and Lesmahagow",
    "q": 1,
    "r": -17
  },
  {
    "n": "Rutherglen and Hamilton West",
    "q": 0,
    "r": -17
  },
  {
    "n": "Central Ayrshire",
    "q": -1,
    "r": -17
  },
  {
    "n": "Ayr, Carrick and Cumnock",
    "q": 0,
    "r": -16
  },
  {
    "n": "Kilmarnock and Loudoun",
    "q": 1,
    "r": -16
  },
  {
    "n": "Dumfries and Galloway",
    "q": 2,
    "r": -16
  },
  {
    "n": "Dumfriesshire, Clydesdale and Tweeddale",
    "q": 3,
    "r": -16
  },
  {
    "n": "Hexham",
    "q": 4,
    "r": -16
  },
  {
    "n": "Newcastle upon Tyne North",
    "q": 5,
    "r": -16
  },
  {
    "n": "Newcastle upon Tyne East",
    "q": 6,
    "r": -16
  },
  {
    "n": "North Tyneside",
    "q": 7,
    "r": -16
  },
  {
    "n": "South Shields",
    "q": 8,
    "r": -16
  },
  {
    "n": "Sunderland Central",
    "q": 8,
    "r": -15
  },
  {
    "n": "Jarrow",
    "q": 7,
    "r": -15
  },
  {
    "n": "Washington and Sunderland West",
    "q": 6,
    "r": -15
  },
  {
    "n": "Gateshead",
    "q": 5,
    "r": -15
  },
  {
    "n": "Newcastle upon Tyne Central",
    "q": 4,
    "r": -15
  },
  {
    "n": "Penrith and The Border",
    "q": 3,
    "r": -15
  },
  {
    "n": "East Antrim",
    "q": -6,
    "r": -15
  },
  {
    "n": "North Antrim",
    "q": -7,
    "r": -15
  },
  {
    "n": "East Londonderry",
    "q": -8,
    "r": -15
  },
  {
    "n": "Foyle",
    "q": -9,
    "r": -15
  },
  {
    "n": "West Tyrone",
    "q": -10,
    "r": -14
  },
  {
    "n": "Mid Ulster",
    "q": -9,
    "r": -14
  },
  {
    "n": "South Antrim",
    "q": -8,
    "r": -14
  },
  {
    "n": "Belfast North",
    "q": -7,
    "r": -14
  },
  {
    "n": "North Down",
    "q": -6,
    "r": -14
  },
  {
    "n": "Workington",
    "q": 2,
    "r": -14
  },
  {
    "n": "Carlisle",
    "q": 3,
    "r": -14
  },
  {
    "n": "Blaydon",
    "q": 4,
    "r": -14
  },
  {
    "n": "North Durham",
    "q": 5,
    "r": -14
  },
  {
    "n": "Houghton and Sunderland South",
    "q": 6,
    "r": -14
  },
  {
    "n": "Easington",
    "q": 7,
    "r": -14
  },
  {
    "n": "Hartlepool",
    "q": 8,
    "r": -14
  },
  {
    "n": "Redcar",
    "q": 8,
    "r": -13
  },
  {
    "n": "Stockton North",
    "q": 7,
    "r": -13
  },
  {
    "n": "Sedgefield",
    "q": 6,
    "r": -13
  },
  {
    "n": "City of Durham",
    "q": 5,
    "r": -13
  },
  {
    "n": "North West Durham",
    "q": 4,
    "r": -13
  },
  {
    "n": "Westmorland and Lonsdale",
    "q": 3,
    "r": -13
  },
  {
    "n": "Barrow and Furness",
    "q": 2,
    "r": -13
  },
  {
    "n": "Copeland",
    "q": 1,
    "r": -13
  },
  {
    "n": "Strangford",
    "q": -6,
    "r": -13
  },
  {
    "n": "Belfast East",
    "q": -7,
    "r": -13
  },
  {
    "n": "Belfast West",
    "q": -8,
    "r": -13
  },
  {
    "n": "Fermanagh and South Tyrone",
    "q": -10,
    "r": -13
  },
  {
    "n": "Upper Bann",
    "q": -10,
    "r": -12
  },
  {
    "n": "Lagan Valley",
    "q": -9,
    "r": -12
  },
  {
    "n": "Belfast South",
    "q": -8,
    "r": -12
  },
  {
    "n": "South Down",
    "q": -7,
    "r": -12
  },
  {
    "n": "Blackpool North and Cleveleys",
    "q": 0,
    "r": -12
  },
  {
    "n": "Morecambe and Lunesdale",
    "q": 1,
    "r": -12
  },
  {
    "n": "Lancaster and Fleetwood",
    "q": 2,
    "r": -12
  },
  {
    "n": "Ribble Valley",
    "q": 3,
    "r": -12
  },
  {
    "n": "Bishop Auckland",
    "q": 4,
    "r": -12
  },
  {
    "n": "Darlington",
    "q": 5,
    "r": -12
  },
  {
    "n": "Stockton South",
    "q": 6,
    "r": -12
  },
  {
    "n": "Middlesbrough",
    "q": 7,
    "r": -12
  },
  {
    "n": "Middlesbrough South and East Cleveland",
    "q": 8,
    "r": -12
  },
  {
    "n": "Scarborough and Whitby",
    "q": 8,
    "r": -11
  },
  {
    "n": "Thirsk and Malton",
    "q": 7,
    "r": -11
  },
  {
    "n": "York Central",
    "q": 6,
    "r": -11
  },
  {
    "n": "York Outer",
    "q": 5,
    "r": -11
  },
  {
    "n": "Harrogate and Knaresborough",
    "q": 4,
    "r": -11
  },
  {
    "n": "Richmond (Yorks)",
    "q": 3,
    "r": -11
  },
  {
    "n": "Skipton and Ripon",
    "q": 2,
    "r": -11
  },
  {
    "n": "Pendle",
    "q": 1,
    "r": -11
  },
  {
    "n": "Wyre and Preston North",
    "q": 0,
    "r": -11
  },
  {
    "n": "Preston",
    "q": -1,
    "r": -11
  },
  {
    "n": "Blackpool South",
    "q": -2,
    "r": -11
  },
  {
    "n": "Newry and Armagh",
    "q": -9,
    "r": -11
  },
  {
    "n": "Fylde",
    "q": -2,
    "r": -10
  },
  {
    "n": "Blackburn",
    "q": -1,
    "r": -10
  },
  {
    "n": "Hyndburn",
    "q": 0,
    "r": -10
  },
  {
    "n": "Burnley",
    "q": 1,
    "r": -10
  },
  {
    "n": "Keighley",
    "q": 2,
    "r": -10
  },
  {
    "n": "Shipley",
    "q": 3,
    "r": -10
  },
  {
    "n": "Pudsey",
    "q": 4,
    "r": -10
  },
  {
    "n": "Leeds North West",
    "q": 5,
    "r": -10
  },
  {
    "n": "Leeds North East",
    "q": 6,
    "r": -10
  },
  {
    "n": "Elmet and Rothwell",
    "q": 7,
    "r": -10
  },
  {
    "n": "East Yorkshire",
    "q": 8,
    "r": -10
  },
  {
    "n": "Kingston upon Hull North",
    "q": 8,
    "r": -9
  },
  {
    "n": "Haltemprice and Howden",
    "q": 7,
    "r": -9
  },
  {
    "n": "Leeds East",
    "q": 6,
    "r": -9
  },
  {
    "n": "Leeds Central",
    "q": 5,
    "r": -9
  },
  {
    "n": "Leeds West",
    "q": 4,
    "r": -9
  },
  {
    "n": "Bradford East",
    "q": 3,
    "r": -9
  },
  {
    "n": "Bradford West",
    "q": 2,
    "r": -9
  },
  {
    "n": "Calder Valley",
    "q": 1,
    "r": -9
  },
  {
    "n": "Rossendale and Darwen",
    "q": 0,
    "r": -9
  },
  {
    "n": "Bury North",
    "q": -1,
    "r": -9
  },
  {
    "n": "Chorley",
    "q": -2,
    "r": -9
  },
  {
    "n": "South Ribble",
    "q": -3,
    "r": -9
  },
  {
    "n": "Southport",
    "q": -4,
    "r": -9
  },
  {
    "n": "Sefton Central",
    "q": -5,
    "r": -8
  },
  {
    "n": "West Lancashire",
    "q": -4,
    "r": -8
  },
  {
    "n": "Wigan",
    "q": -3,
    "r": -8
  },
  {
    "n": "Bury South",
    "q": -2,
    "r": -8
  },
  {
    "n": "Heywood and Middleton",
    "q": -1,
    "r": -8
  },
  {
    "n": "Rochdale",
    "q": 0,
    "r": -8
  },
  {
    "n": "Halifax",
    "q": 1,
    "r": -8
  },
  {
    "n": "Bradford South",
    "q": 2,
    "r": -8
  },
  {
    "n": "Batley and Spen",
    "q": 3,
    "r": -8
  },
  {
    "n": "Morley and Outwood",
    "q": 4,
    "r": -8
  },
  {
    "n": "Normanton, Pontefract and Castleford",
    "q": 5,
    "r": -8
  },
  {
    "n": "Selby and Ainsty",
    "q": 6,
    "r": -8
  },
  {
    "n": "Kingston upon Hull West and Hessle",
    "q": 7,
    "r": -8
  },
  {
    "n": "Beverley and Holderness",
    "q": 8,
    "r": -8
  },
  {
    "n": "Kingston upon Hull East",
    "q": 7,
    "r": -7
  },
  {
    "n": "Cleethorpes",
    "q": 6,
    "r": -7
  },
  {
    "n": "Brigg and Goole",
    "q": 5,
    "r": -7
  },
  {
    "n": "Hemsworth",
    "q": 4,
    "r": -7
  },
  {
    "n": "Wakefield",
    "q": 3,
    "r": -7
  },
  {
    "n": "Dewsbury",
    "q": 2,
    "r": -7
  },
  {
    "n": "Huddersfield",
    "q": 1,
    "r": -7
  },
  {
    "n": "Colne Valley",
    "q": 0,
    "r": -7
  },
  {
    "n": "Oldham East and Saddleworth",
    "q": -1,
    "r": -7
  },
  {
    "n": "Oldham West and Royton",
    "q": -2,
    "r": -7
  },
  {
    "n": "Bolton North East",
    "q": -3,
    "r": -7
  },
  {
    "n": "Bolton West",
    "q": -4,
    "r": -7
  },
  {
    "n": "Makerfield",
    "q": -5,
    "r": -7
  },
  {
    "n": "Bootle",
    "q": -6,
    "r": -7
  },
  {
    "n": "Liverpool, Walton",
    "q": -7,
    "r": -6
  },
  {
    "n": "Knowsley",
    "q": -6,
    "r": -6
  },
  {
    "n": "Leigh",
    "q": -5,
    "r": -6
  },
  {
    "n": "Bolton South East",
    "q": -4,
    "r": -6
  },
  {
    "n": "Blackley and Broughton",
    "q": -3,
    "r": -6
  },
  {
    "n": "Ashton-under-Lyne",
    "q": -2,
    "r": -6
  },
  {
    "n": "Stalybridge and Hyde",
    "q": -1,
    "r": -6
  },
  {
    "n": "Penistone and Stocksbridge",
    "q": 0,
    "r": -6
  },
  {
    "n": "Barnsley Central",
    "q": 1,
    "r": -6
  },
  {
    "n": "Barnsley East",
    "q": 2,
    "r": -6
  },
  {
    "n": "Doncaster North",
    "q": 3,
    "r": -6
  },
  {
    "n": "Doncaster Central",
    "q": 4,
    "r": -6
  },
  {
    "n": "Scunthorpe",
    "q": 5,
    "r": -6
  },
  {
    "n": "Great Grimsby",
    "q": 6,
    "r": -6
  },
  {
    "n": "Louth and Horncastle",
    "q": 7,
    "r": -6
  },
  {
    "n": "Boston and Skegness",
    "q": 7,
    "r": -5
  },
  {
    "n": "Lincoln",
    "q": 6,
    "r": -5
  },
  {
    "n": "Gainsborough",
    "q": 5,
    "r": -5
  },
  {
    "n": "Don Valley",
    "q": 4,
    "r": -5
  },
  {
    "n": "Rotherham",
    "q": 3,
    "r": -5
  },
  {
    "n": "Wentworth and Dearne",
    "q": 2,
    "r": -5
  },
  {
    "n": "Sheffield, Brightside and Hillsborough",
    "q": 1,
    "r": -5
  },
  {
    "n": "Sheffield, Hallam",
    "q": 0,
    "r": -5
  },
  {
    "n": "Denton and Reddish",
    "q": -1,
    "r": -5
  },
  {
    "n": "Manchester, Gorton",
    "q": -2,
    "r": -5
  },
  {
    "n": "Manchester Central",
    "q": -3,
    "r": -5
  },
  {
    "n": "Salford and Eccles",
    "q": -4,
    "r": -5
  },
  {
    "n": "Worsley and Eccles South",
    "q": -5,
    "r": -5
  },
  {
    "n": "St Helens North",
    "q": -6,
    "r": -5
  },
  {
    "n": "Liverpool, West Derby",
    "q": -7,
    "r": -5
  },
  {
    "n": "Liverpool, Riverside",
    "q": -8,
    "r": -4
  },
  {
    "n": "St Helens South and Whiston",
    "q": -7,
    "r": -4
  },
  {
    "n": "Warrington North",
    "q": -6,
    "r": -4
  },
  {
    "n": "Stretford and Urmston",
    "q": -5,
    "r": -4
  },
  {
    "n": "Manchester, Withington",
    "q": -4,
    "r": -4
  },
  {
    "n": "Stockport",
    "q": -3,
    "r": -4
  },
  {
    "n": "Hazel Grove",
    "q": -2,
    "r": -4
  },
  {
    "n": "High Peak",
    "q": -1,
    "r": -4
  },
  {
    "n": "Sheffield, Heeley",
    "q": 0,
    "r": -4
  },
  {
    "n": "Sheffield Central",
    "q": 1,
    "r": -4
  },
  {
    "n": "Sheffield South East",
    "q": 2,
    "r": -4
  },
  {
    "n": "Rother Valley",
    "q": 3,
    "r": -4
  },
  {
    "n": "Bassetlaw",
    "q": 4,
    "r": -4
  },
  {
    "n": "Newark",
    "q": 5,
    "r": -4
  },
  {
    "n": "Sleaford and North Hykeham",
    "q": 6,
    "r": -4
  },
  {
    "n": "South Holland and The Deepings",
    "q": 6,
    "r": -3
  },
  {
    "n": "Grantham and Stamford",
    "q": 5,
    "r": -3
  },
  {
    "n": "Sherwood",
    "q": 4,
    "r": -3
  },
  {
    "n": "Mansfield",
    "q": 3,
    "r": -3
  },
  {
    "n": "Bolsover",
    "q": 2,
    "r": -3
  },
  {
    "n": "Chesterfield",
    "q": 1,
    "r": -3
  },
  {
    "n": "North East Derbyshire",
    "q": 0,
    "r": -3
  },
  {
    "n": "Derbyshire Dales",
    "q": -1,
    "r": -3
  },
  {
    "n": "Macclesfield",
    "q": -2,
    "r": -3
  },
  {
    "n": "Cheadle",
    "q": -3,
    "r": -3
  },
  {
    "n": "Wythenshawe and Sale East",
    "q": -4,
    "r": -3
  },
  {
    "n": "Altrincham and Sale West",
    "q": -5,
    "r": -3
  },
  {
    "n": "Warrington South",
    "q": -6,
    "r": -3
  },
  {
    "n": "Garston and Halewood",
    "q": -7,
    "r": -3
  },
  {
    "n": "Liverpool, Wavertree",
    "q": -8,
    "r": -3
  },
  {
    "n": "Wallasey",
    "q": -9,
    "r": -3
  },
  {
    "n": "Wirral West",
    "q": -10,
    "r": -2
  },
  {
    "n": "Birkenhead",
    "q": -9,
    "r": -2
  },
  {
    "n": "Wirral South",
    "q": -8,
    "r": -2
  },
  {
    "n": "Halton",
    "q": -7,
    "r": -2
  },
  {
    "n": "Weaver Vale",
    "q": -6,
    "r": -2
  },
  {
    "n": "Tatton",
    "q": -5,
    "r": -2
  },
  {
    "n": "Congleton",
    "q": -4,
    "r": -2
  },
  {
    "n": "Stoke-on-Trent North",
    "q": -3,
    "r": -2
  },
  {
    "n": "Staffordshire Moorlands",
    "q": -2,
    "r": -2
  },
  {
    "n": "Mid Derbyshire",
    "q": -1,
    "r": -2
  },
  {
    "n": "Derby North",
    "q": 0,
    "r": -2
  },
  {
    "n": "Amber Valley",
    "q": 1,
    "r": -2
  },
  {
    "n": "Ashfield",
    "q": 2,
    "r": -2
  },
  {
    "n": "Nottingham North",
    "q": 3,
    "r": -2
  },
  {
    "n": "Gedling",
    "q": 4,
    "r": -2
  },
  {
    "n": "Rutland and Melton",
    "q": 5,
    "r": -2
  },
  {
    "n": "North Norfolk",
    "q": 7,
    "r": -2
  },
  {
    "n": "Broadland",
    "q": 8,
    "r": -2
  },
  {
    "n": "Great Yarmouth",
    "q": 9,
    "r": -2
  },
  {
    "n": "Suffolk Coastal",
    "q": 10,
    "r": -1
  },
  {
    "n": "Waveney",
    "q": 9,
    "r": -1
  },
  {
    "n": "Norwich North",
    "q": 8,
    "r": -1
  },
  {
    "n": "Mid Norfolk",
    "q": 7,
    "r": -1
  },
  {
    "n": "North West Norfolk",
    "q": 6,
    "r": -1
  },
  {
    "n": "Corby",
    "q": 5,
    "r": -1
  },
  {
    "n": "Rushcliffe",
    "q": 4,
    "r": -1
  },
  {
    "n": "Nottingham East",
    "q": 3,
    "r": -1
  },
  {
    "n": "Nottingham South",
    "q": 2,
    "r": -1
  },
  {
    "n": "Broxtowe",
    "q": 1,
    "r": -1
  },
  {
    "n": "Derby South",
    "q": 0,
    "r": -1
  },
  {
    "n": "South Derbyshire",
    "q": -1,
    "r": -1
  },
  {
    "n": "Burton",
    "q": -2,
    "r": -1
  },
  {
    "n": "Stoke-on-Trent Central",
    "q": -3,
    "r": -1
  },
  {
    "n": "Newcastle-under-Lyme",
    "q": -4,
    "r": -1
  },
  {
    "n": "Crewe and Nantwich",
    "q": -5,
    "r": -1
  },
  {
    "n": "Eddisbury",
    "q": -6,
    "r": -1
  },
  {
    "n": "City of Chester",
    "q": -7,
    "r": -1
  },
  {
    "n": "Ellesmere Port and Neston",
    "q": -8,
    "r": -1
  },
  {
    "n": "Alyn and Deeside",
    "q": -9,
    "r": -1
  },
  {
    "n": "Delyn",
    "q": -10,
    "r": -1
  },
  {
    "n": "Ynys Môn",
    "q": -13,
    "r": -1
  },
  {
    "n": "Aberconwy",
    "q": -12,
    "r": 0
  },
  {
    "n": "Clwyd West",
    "q": -11,
    "r": 0
  },
  {
    "n": "Vale of Clwyd",
    "q": -10,
    "r": 0
  },
  {
    "n": "Wrexham",
    "q": -9,
    "r": 0
  },
  {
    "n": "North Shropshire",
    "q": -8,
    "r": 0
  },
  {
    "n": "The Wrekin",
    "q": -7,
    "r": 0
  },
  {
    "n": "South Staffordshire",
    "q": -6,
    "r": 0
  },
  {
    "n": "Stone",
    "q": -5,
    "r": 0
  },
  {
    "n": "Stafford",
    "q": -4,
    "r": 0
  },
  {
    "n": "Stoke-on-Trent South",
    "q": -3,
    "r": 0
  },
  {
    "n": "Lichfield",
    "q": -2,
    "r": 0
  },
  {
    "n": "Tamworth",
    "q": -1,
    "r": 0
  },
  {
    "n": "North West Leicestershire",
    "q": 0,
    "r": 0
  },
  {
    "n": "Erewash",
    "q": 1,
    "r": 0
  },
  {
    "n": "Broxtowe",
    "q": 1,
    "r": -1
  },
  {
    "n": "Loughborough",
    "q": 2,
    "r": 0
  },
  {
    "n": "Charnwood",
    "q": 3,
    "r": 0
  },
  {
    "n": "Kettering",
    "q": 4,
    "r": 0
  },
  {
    "n": "Peterborough",
    "q": 5,
    "r": 0
  },
  {
    "n": "North East Cambridgeshire",
    "q": 6,
    "r": 0
  },
  {
    "n": "South West Norfolk",
    "q": 7,
    "r": 0
  },
  {
    "n": "Norwich South",
    "q": 8,
    "r": 0
  },
  {
    "n": "South Norfolk",
    "q": 9,
    "r": 0
  },
  {
    "n": "Central Suffolk and North Ipswich",
    "q": 10,
    "r": 0
  },
  {
    "n": "South Suffolk",
    "q": 10,
    "r": 1
  },
  {
    "n": "Ipswich",
    "q": 9,
    "r": 1
  },
  {
    "n": "West Suffolk",
    "q": 8,
    "r": 1
  },
  {
    "n": "South East Cambridgeshire",
    "q": 7,
    "r": 1
  },
  {
    "n": "Cambridge",
    "q": 6,
    "r": 1
  },
  {
    "n": "North West Cambridgeshire",
    "q": 5,
    "r": 1
  },
  {
    "n": "Wellingborough",
    "q": 4,
    "r": 1
  },
  {
    "n": "Harborough",
    "q": 3,
    "r": 1
  },
  {
    "n": "Leicester East",
    "q": 2,
    "r": 1
  },
  {
    "n": "Leicester West",
    "q": 1,
    "r": 1
  },
  {
    "n": "Bosworth",
    "q": 0,
    "r": 1
  },
  {
    "n": "North Warwickshire",
    "q": -1,
    "r": 1
  },
  {
    "n": "Sutton Coldfield",
    "q": -2,
    "r": 1
  },
  {
    "n": "Aldridge-Brownhills",
    "q": -3,
    "r": 1
  },
  {
    "n": "Cannock Chase",
    "q": -4,
    "r": 1
  },
  {
    "n": "Walsall South",
    "q": -5,
    "r": 1
  },
  {
    "n": "Walsall North",
    "q": -6,
    "r": 1
  },
  {
    "n": "Wolverhampton North East",
    "q": -7,
    "r": 1
  },
  {
    "n": "Telford",
    "q": -8,
    "r": 1
  },
  {
    "n": "Shrewsbury and Atcham",
    "q": -9,
    "r": 1
  },
  {
    "n": "Clwyd South",
    "q": -10,
    "r": 1
  },
  {
    "n": "Montgomeryshire",
    "q": -11,
    "r": 1
  },
  {
    "n": "Dwyfor Meirionnydd",
    "q": -12,
    "r": 1
  },
  {
    "n": "Arfon",
    "q": -13,
    "r": 1
  },
  {
    "n": "Brecon and Radnorshire",
    "q": -10,
    "r": 2
  },
  {
    "n": "Ludlow",
    "q": -9,
    "r": 2
  },
  {
    "n": "Wolverhampton South West",
    "q": -8,
    "r": 2
  },
  {
    "n": "Wolverhampton South East",
    "q": -7,
    "r": 2
  },
  {
    "n": "West Bromwich West",
    "q": -6,
    "r": 2
  },
  {
    "n": "West Bromwich East",
    "q": -5,
    "r": 2
  },
  {
    "n": "Birmingham, Perry Barr",
    "q": -4,
    "r": 2
  },
  {
    "n": "Birmingham, Erdington",
    "q": -3,
    "r": 2
  },
  {
    "n": "Birmingham, Hodge Hill",
    "q": -2,
    "r": 2
  },
  {
    "n": "Nuneaton",
    "q": -1,
    "r": 2
  },
  {
    "n": "South Leicestershire",
    "q": 0,
    "r": 2
  },
  {
    "n": "Leicester South",
    "q": 1,
    "r": 2
  },
  {
    "n": "Northampton North",
    "q": 2,
    "r": 2
  },
  {
    "n": "North East Bedfordshire",
    "q": 3,
    "r": 2
  },
  {
    "n": "Huntingdon",
    "q": 4,
    "r": 2
  },
  {
    "n": "South Cambridgeshire",
    "q": 5,
    "r": 2
  },
  {
    "n": "Saffron Walden",
    "q": 6,
    "r": 2
  },
  {
    "n": "Braintree",
    "q": 7,
    "r": 2
  },
  {
    "n": "Bury St Edmunds",
    "q": 8,
    "r": 2
  },
  {
    "n": "Harwich and North Essex",
    "q": 9,
    "r": 2
  },
  {
    "n": "Clacton",
    "q": 9,
    "r": 3
  },
  {
    "n": "Colchester",
    "q": 8,
    "r": 3
  },
  {
    "n": "Harlow",
    "q": 7,
    "r": 3
  },
  {
    "n": "Hertford and Stortford",
    "q": 6,
    "r": 3
  },
  {
    "n": "North East Hertfordshire",
    "q": 5,
    "r": 3
  },
  {
    "n": "Hitchin and Harpenden",
    "q": 4,
    "r": 3
  },
  {
    "n": "Bedford",
    "q": 3,
    "r": 3
  },
  {
    "n": "Milton Keynes North",
    "q": 2,
    "r": 3
  },
  {
    "n": "Northampton South",
    "q": 1,
    "r": 3
  },
  {
    "n": "Daventry",
    "q": 0,
    "r": 3
  },
  {
    "n": "Rugby",
    "q": -1,
    "r": 3
  },
  {
    "n": "Coventry North East",
    "q": -2,
    "r": 3
  },
  {
    "n": "Birmingham, Yardley",
    "q": -3,
    "r": 3
  },
  {
    "n": "Birmingham, Ladywood",
    "q": -4,
    "r": 3
  },
  {
    "n": "Birmingham, Edgbaston",
    "q": -5,
    "r": 3
  },
  {
    "n": "Warley",
    "q": -6,
    "r": 3
  },
  {
    "n": "Halesowen and Rowley Regis",
    "q": -7,
    "r": 3
  },
  {
    "n": "Dudley North",
    "q": -8,
    "r": 3
  },
  {
    "n": "Wyre Forest",
    "q": -9,
    "r": 3
  },
  {
    "n": "Blaenau Gwent",
    "q": -10,
    "r": 3
  },
  {
    "n": "Merthyr Tydfil and Rhymney",
    "q": -11,
    "r": 4
  },
  {
    "n": "North Herefordshire",
    "q": -10,
    "r": 4
  },
  {
    "n": "West Worcestershiree",
    "q": -9,
    "r": 4
  },
  {
    "n": "Dudley South",
    "q": -8,
    "r": 4
  },
  {
    "n": "Stourbridge",
    "q": -7,
    "r": 4
  },
  {
    "n": "Birmingham, Northfield",
    "q": -6,
    "r": 4
  },
  {
    "n": "Birmingham, Hall Green",
    "q": -5,
    "r": 4
  },
  {
    "n": "Solihull",
    "q": -4,
    "r": 4
  },
  {
    "n": "Coventry North West",
    "q": -3,
    "r": 4
  },
  {
    "n": "Coventry South",
    "q": -2,
    "r": 4
  },
  {
    "n": "Kenilworth and Southam",
    "q": -1,
    "r": 4
  },
  {
    "n": "South Northamptonshire",
    "q": 0,
    "r": 4
  },
  {
    "n": "Milton Keynes South",
    "q": 1,
    "r": 4
  },
  {
    "n": "Mid Bedfordshire",
    "q": 2,
    "r": 4
  },
  {
    "n": "Luton North",
    "q": 3,
    "r": 4
  },
  {
    "n": "Stevenage",
    "q": 4,
    "r": 4
  },
  {
    "n": "Welwyn Hatfield",
    "q": 5,
    "r": 4
  },
  {
    "n": "Brentwood and Ongar",
    "q": 6,
    "r": 4
  },
  {
    "n": "Chelmsford",
    "q": 7,
    "r": 4
  },
  {
    "n": "Witham",
    "q": 8,
    "r": 4
  },
  {
    "n": "Maldon",
    "q": 9,
    "r": 4
  },
  {
    "n": "Rochford and Southend East",
    "q": 8,
    "r": 5
  },
  {
    "n": "Rayleigh and Wickford",
    "q": 7,
    "r": 5
  },
  {
    "n": "Basildon and Billericay",
    "q": 6,
    "r": 5
  },
  {
    "n": "Hertsmere",
    "q": 5,
    "r": 5
  },
  {
    "n": "St Albans",
    "q": 4,
    "r": 5
  },
  {
    "n": "Hemel Hempstead",
    "q": 3,
    "r": 5
  },
  {
    "n": "Luton South",
    "q": 2,
    "r": 5
  },
  {
    "n": "South West Bedfordshire",
    "q": 1,
    "r": 5
  },
  {
    "n": "Buckingham",
    "q": 0,
    "r": 5
  },
  {
    "n": "Banbury",
    "q": -1,
    "r": 5
  },
  {
    "n": "Oxford East",
    "q": -2,
    "r": 5
  },
  {
    "n": "Warwick and Leamington",
    "q": -3,
    "r": 5
  },
  {
    "n": "Meriden",
    "q": -4,
    "r": 5
  },
  {
    "n": "Birmingham, Selly Oak",
    "q": -5,
    "r": 5
  },
  {
    "n": "Bromsgrove",
    "q": -6,
    "r": 5
  },
  {
    "n": "Mid Worcestershire",
    "q": -7,
    "r": 5
  },
  {
    "n": "Worcester",
    "q": -8,
    "r": 5
  },
  {
    "n": "Hereford and South Herefordshire",
    "q": -9,
    "r": 5
  },
  {
    "n": "Monmouth",
    "q": -10,
    "r": 5
  },
  {
    "n": "Torfaen",
    "q": -11,
    "r": 5
  },
  {
    "n": "Cynon Valley",
    "q": -12,
    "r": 5
  },
  {
    "n": "",
    "q": -12,
    "r": 5
  },
  {
    "n": "",
    "q": -12,
    "r": 5
  },
  {
    "n": "",
    "q": -12,
    "r": 5
  },


      // {
      //   "n": "Ashford",
      //   "q": 12,
      //   "r": -13
      // },
      // {
      //   "n": "Ashton-under-Lyne",
      //   "q": -5,
      //   "r": 6
      // },
      // {
      //   "n": "Aylesbury",
      //   "q": 2,
      //   "r": -6
      // },
      // {
      //   "n": "Banbury",
      //   "q": 1,
      //   "r": -5
      // },
      // {
      //   "n": "Barking",
      //   "q": 8,
      //   "r": -9
      // },
      // {
      //   "n": "Barnsley Central",
      //   "q": -2,
      //   "r": 6
      // },
      // {
      //   "n": "Barnsley East",
      //   "q": -1,
      //   "r": 6
      // },
      // {
      //   "n": "Barrow and Furness",
      //   "q": -5,
      //   "r": 13
      // },
      // {
      //   "n": "Basildon and Billericay",
      //   "q": 8,
      //   "r": -5
      // },
      // {
      //   "n": "Basingstoke",
      //   "q": -3,
      //   "r": -10
      // },
      // {
      //   "n": "Bassetlaw",
      //   "q": 2,
      //   "r": 4
      // },
      // {
      //   "n": "Bath",
      //   "q": -6,
      //   "r": -9
      // },
      // {
      //   "n": "Batley and Spen",
      //   "q": -1,
      //   "r": 8
      // },
      // {
      //   "n": "Battersea",
      //   "q": 4,
      //   "r": -12
      // },
      // {
      //   "n": "Beaconsfield",
      //   "q": -1,
      //   "r": -8
      // },
      // {
      //   "n": "Beckenham",
      //   "q": 7,
      //   "r": -14
      // },
      // {
      //   "n": "Bedford",
      //   "q": 4,
      //   "r": -3
      // },
      // {
      //   "n": "Bermondsey and Old Southwark",
      //   "q": 5,
      //   "r": -11
      // },
      // {
      //   "n": "Berwick-upon-Tweed",
      //   "q": -4,
      //   "r": 17
      // },
      // {
      //   "n": "Bethnal Green and Bow",
      //   "q": 7,
      //   "r": -10
      // },
      // {
      //   "n": "Beverley and Holderness",
      //   "q": 4,
      //   "r": 8
      // },
      // {
      //   "n": "Bexhill and Battle",
      //   "q": 10,
      //   "r": -15
      // },
      // {
      //   "n": "Bexleyheath and Crayford",
      //   "q": 9,
      //   "r": -10
      // },
      // {
      //   "n": "Birkenhead",
      //   "q": -10,
      //   "r": 2
      // },
      // {
      //   "n": "Birmingham, Edgbaston",
      //   "q": -4,
      //   "r": -3
      // },
      // {
      //   "n": "Birmingham, Erdington",
      //   "q": -2,
      //   "r": -2
      // },
      // {
      //   "n": "Birmingham, Hall Green",
      //   "q": -3,
      //   "r": -4
      // },
      // {
      //   "n": "Birmingham, Hodge Hill",
      //   "q": -1,
      //   "r": -2
      // },
      // {
      //   "n": "Birmingham, Ladywood",
      //   "q": -3,
      //   "r": -3
      // },
      // {
      //   "n": "Birmingham, Northfield",
      //   "q": -4,
      //   "r": -4
      // },
      // {
      //   "n": "Birmingham, Perry Barr",
      //   "q": -3,
      //   "r": -2
      // },
      // {
      //   "n": "Birmingham, Selly Oak",
      //   "q": -3,
      //   "r": -5
      // },
      // {
      //   "n": "Birmingham, Yardley",
      //   "q": -2,
      //   "r": -3
      // },
      // {
      //   "n": "Bishop Auckland",
      //   "q": -2,
      //   "r": 12
      // },
      // {
      //   "n": "Blackburn",
      //   "q": -6,
      //   "r": 10
      // },
      // {
      //   "n": "Blackley and Broughton",
      //   "q": -6,
      //   "r": 6
      // },
      // {
      //   "n": "Blackpool North and Cleveleys",
      //   "q": -6,
      //   "r": 12
      // },
      // {
      //   "n": "Blackpool South",
      //   "q": -8,
      //   "r": 11
      // },
      // {
      //   "n": "Blaydon",
      //   "q": -3,
      //   "r": 14
      // },
      // {
      //   "n": "Blyth Valley",
      //   "q": -2,
      //   "r": 17
      // },
      // {
      //   "n": "Bognor Regis and Littlehampton",
      //   "q": 2,
      //   "r": -15
      // },
      // {
      //   "n": "Bolsover",
      //   "q": 0,
      //   "r": 3
      // },
      // {
      //   "n": "Bolton North East",
      //   "q": -7,
      //   "r": 7
      // },
      // {
      //   "n": "Bolton South East",
      //   "q": -7,
      //   "r": 6
      // },
      // {
      //   "n": "Bolton West",
      //   "q": -8,
      //   "r": 7
      // },
      // {
      //   "n": "Bootle",
      //   "q": -10,
      //   "r": 7
      // },
      // {
      //   "n": "Boston and Skegness",
      //   "q": 4,
      //   "r": 5
      // },
      // {
      //   "n": "Bosworth",
      //   "q": 0,
      //   "r": -1
      // },
      // {
      //   "n": "Bournemouth East",
      //   "q": -8,
      //   "r": -13
      // },
      // {
      //   "n": "Bournemouth West",
      //   "q": -8,
      //   "r": -14
      // },
      // {
      //   "n": "Bracknell",
      //   "q": -2,
      //   "r": -10
      // },
      // {
      //   "n": "Bradford East",
      //   "q": -2,
      //   "r": 9
      // },
      // {
      //   "n": "Bradford South",
      //   "q": -2,
      //   "r": 8
      // },
      // {
      //   "n": "Bradford West",
      //   "q": -3,
      //   "r": 9
      // },
      // {
      //   "n": "Braintree",
      //   "q": 8,
      //   "r": -2
      // },
      // {
      //   "n": "Brent Central",
      //   "q": 2,
      //   "r": -9
      // },
      // {
      //   "n": "Brent North",
      //   "q": 1,
      //   "r": -9
      // },
      // {
      //   "n": "Brentford and Isleworth",
      //   "q": 1,
      //   "r": -11
      // },
      // {
      //   "n": "Brentwood and Ongar",
      //   "q": 8,
      //   "r": -4
      // },
      // {
      //   "n": "Bridgwater and West Somerset",
      //   "q": -11,
      //   "r": -12
      // },
      // {
      //   "n": "Brigg and Goole",
      //   "q": 1,
      //   "r": 7
      // },
      // {
      //   "n": "Brighton, Kemptown",
      //   "q": 7,
      //   "r": -15
      // },
      // {
      //   "n": "Brighton, Pavilion",
      //   "q": 6,
      //   "r": -15
      // },
      // {
      //   "n": "Bristol East",
      //   "q": -7,
      //   "r": -9
      // },
      // {
      //   "n": "Bristol North West",
      //   "q": -8,
      //   "r": -9
      // },
      // {
      //   "n": "Bristol South",
      //   "q": -7,
      //   "r": -10
      // },
      // {
      //   "n": "Bristol West",
      //   "q": -8,
      //   "r": -10
      // },
      // {
      //   "n": "Broadland",
      //   "q": 7,
      //   "r": 2
      // },
      // {
      //   "n": "Bromley and Chislehurst",
      //   "q": 8,
      //   "r": -13
      // },
      // {
      //   "n": "Bromsgrove",
      //   "q": -4,
      //   "r": -5
      // },
      // {
      //   "n": "Broxbourne",
      //   "q": 8,
      //   "r": -6
      // },
      // {
      //   "n": "Broxtowe",
      //   "q": 0,
      //   "r": 1
      // },
      // {
      //   "n": "Buckingham",
      //   "q": 2,
      //   "r": -5
      // },
      // {
      //   "n": "Burnley",
      //   "q": -4,
      //   "r": 10
      // },
      // {
      //   "n": "Burton",
      //   "q": -3,
      //   "r": 1
      // },
      // {
      //   "n": "Bury North",
      //   "q": -6,
      //   "r": 9
      // },
      // {
      //   "n": "Bury South",
      //   "q": -6,
      //   "r": 8
      // },
      // {
      //   "n": "Bury St Edmunds",
      //   "q": 9,
      //   "r": -2
      // },
      // {
      //   "n": "Calder Valley",
      //   "q": -4,
      //   "r": 9
      // },
      // {
      //   "n": "Camberwell and Peckham",
      //   "q": 6,
      //   "r": -12
      // },
      // {
      //   "n": "Camborne and Redruth",
      //   "q": -16,
      //   "r": -15
      // },
      // {
      //   "n": "Cambridge",
      //   "q": 6,
      //   "r": -1
      // },
      // {
      //   "n": "Cannock Chase",
      //   "q": -4,
      //   "r": -1
      // },
      // {
      //   "n": "Canterbury",
      //   "q": 12,
      //   "r": -12
      // },
      // {
      //   "n": "Carlisle",
      //   "q": -4,
      //   "r": 14
      // },
      // {
      //   "n": "Carshalton and Wallington",
      //   "q": 4,
      //   "r": -14
      // },
      // {
      //   "n": "Castle Point",
      //   "q": 10,
      //   "r": -7
      // },
      // {
      //   "n": "Central Devon",
      //   "q": -13,
      //   "r": -13
      // },
      // {
      //   "n": "Central Suffolk and North Ipswich",
      //   "q": 10,
      //   "r": 0
      // },
      // {
      //   "n": "Charnwood",
      //   "q": 3,
      //   "r": 0
      // },
      // {
      //   "n": "Chatham and Aylesford",
      //   "q": 10,
      //   "r": -11
      // },
      // {
      //   "n": "Cheadle",
      //   "q": -5,
      //   "r": 3
      // },
      // {
      //   "n": "Chelmsford",
      //   "q": 9,
      //   "r": -4
      // },
      // {
      //   "n": "Chelsea and Fulham",
      //   "q": 2,
      //   "r": -11
      // },
      // {
      //   "n": "Cheltenham",
      //   "q": -7,
      //   "r": -7
      // },
      // {
      //   "n": "Chesham and Amersham",
      //   "q": 0,
      //   "r": -7
      // },
      // {
      //   "n": "Chesterfield",
      //   "q": -1,
      //   "r": 3
      // },
      // {
      //   "n": "Chichester",
      //   "q": -1,
      //   "r": -15
      // },
      // {
      //   "n": "Chingford and Woodford Green",
      //   "q": 6,
      //   "r": -6
      // },
      // {
      //   "n": "Chippenham",
      //   "q": -5,
      //   "r": -9
      // },
      // {
      //   "n": "Chipping Barnet",
      //   "q": 3,
      //   "r": -7
      // },
      // {
      //   "n": "Chorley",
      //   "q": -7,
      //   "r": 9
      // },
      // {
      //   "n": "Christchurch",
      //   "q": -7,
      //   "r": -13
      // },
      // {
      //   "n": "Cities of London and Westminster",
      //   "q": 4,
      //   "r": -11
      // },
      // {
      //   "n": "City of Chester",
      //   "q": -8,
      //   "r": 1
      // },
      // {
      //   "n": "City of Durham",
      //   "q": -2,
      //   "r": 13
      // },
      // {
      //   "n": "Clacton",
      //   "q": 10,
      //   "r": -3
      // },
      // {
      //   "n": "Cleethorpes",
      //   "q": 2,
      //   "r": 7
      // },
      // {
      //   "n": "Colchester",
      //   "q": 9,
      //   "r": -3
      // },
      // {
      //   "n": "Colne Valley",
      //   "q": -4,
      //   "r": 7
      // },
      // {
      //   "n": "Congleton",
      //   "q": -5,
      //   "r": 2
      // },
      // {
      //   "n": "Copeland",
      //   "q": -6,
      //   "r": 13
      // },
      // {
      //   "n": "Corby",
      //   "q": 4,
      //   "r": 1
      // },
      // {
      //   "n": "Coventry North East",
      //   "q": -1,
      //   "r": -3
      // },
      // {
      //   "n": "Coventry North West",
      //   "q": -1,
      //   "r": -4
      // },
      // {
      //   "n": "Coventry South",
      //   "q": 0,
      //   "r": -4
      // },
      // {
      //   "n": "Crawley",
      //   "q": 1,
      //   "r": -14
      // },
      // {
      //   "n": "Crewe and Nantwich",
      //   "q": -6,
      //   "r": 1
      // },
      // {
      //   "n": "Croydon Central",
      //   "q": 6,
      //   "r": -14
      // },
      // {
      //   "n": "Croydon North",
      //   "q": 6,
      //   "r": -13
      // },
      // {
      //   "n": "Croydon South",
      //   "q": 5,
      //   "r": -14
      // },
      // {
      //   "n": "Dagenham and Rainham",
      //   "q": 9,
      //   "r": -8
      // },
      // {
      //   "n": "Darlington",
      //   "q": -1,
      //   "r": 12
      // },
      // {
      //   "n": "Dartford",
      //   "q": 9,
      //   "r": -11
      // },
      // {
      //   "n": "Daventry",
      //   "q": 1,
      //   "r": -3
      // },
      // {
      //   "n": "Denton and Reddish",
      //   "q": -4,
      //   "r": 5
      // },
      // {
      //   "n": "Derby North",
      //   "q": -1,
      //   "r": 2
      // },
      // {
      //   "n": "Derby South",
      //   "q": -1,
      //   "r": 1
      // },
      // {
      //   "n": "Derbyshire Dales",
      //   "q": -3,
      //   "r": 3
      // },
      // {
      //   "n": "Devizes",
      //   "q": -5,
      //   "r": -10
      // },
      // {
      //   "n": "Dewsbury",
      //   "q": -2,
      //   "r": 7
      // },
      // {
      //   "n": "Don Valley",
      //   "q": 1,
      //   "r": 5
      // },
      // {
      //   "n": "Doncaster Central",
      //   "q": 1,
      //   "r": 6
      // },
      // {
      //   "n": "Doncaster North",
      //   "q": 0,
      //   "r": 6
      // },
      // {
      //   "n": "Dover",
      //   "q": 13,
      //   "r": -12
      // },
      // {
      //   "n": "Dudley North",
      //   "q": -7,
      //   "r": -3
      // },
      // {
      //   "n": "Dudley South",
      //   "q": -6,
      //   "r": -4
      // },
      // {
      //   "n": "Dulwich and West Norwood",
      //   "q": 5,
      //   "r": -13
      // },
      // {
      //   "n": "Ealing Central and Acton",
      //   "q": 1,
      //   "r": -10
      // },
      // {
      //   "n": "Ealing North",
      //   "q": 0,
      //   "r": -9
      // },
      // {
      //   "n": "Ealing, Southall",
      //   "q": 0,
      //   "r": -10
      // },
      // {
      //   "n": "Easington",
      //   "q": 0,
      //   "r": 14
      // },
      // {
      //   "n": "East Devon",
      //   "q": -11,
      //   "r": -14
      // },
      // {
      //   "n": "East Ham",
      //   "q": 7,
      //   "r": -9
      // },
      // {
      //   "n": "East Hampshire",
      //   "q": -3,
      //   "r": -12
      // },
      // {
      //   "n": "East Surrey",
      //   "q": 9,
      //   "r": -14
      // },
      // {
      //   "n": "East Worthing and Shoreham",
      //   "q": 4,
      //   "r": -15
      // },
      // {
      //   "n": "East Yorkshire",
      //   "q": 3,
      //   "r": 10
      // },
      // {
      //   "n": "Eastbourne",
      //   "q": 9,
      //   "r": -15
      // },
      // {
      //   "n": "Eastleigh",
      //   "q": -4,
      //   "r": -12
      // },
      // {
      //   "n": "Eddisbury",
      //   "q": -7,
      //   "r": 1
      // },
      // {
      //   "n": "Edmonton",
      //   "q": 5,
      //   "r": -7
      // },
      // {
      //   "n": "Ellesmere Port and Neston",
      //   "q": -9,
      //   "r": 1
      // },
      // {
      //   "n": "Elmet and Rothwell",
      //   "q": 2,
      //   "r": 10
      // },
      // {
      //   "n": "Eltham",
      //   "q": 8,
      //   "r": -12
      // },
      // {
      //   "n": "Enfield North",
      //   "q": 5,
      //   "r": -6
      // },
      // {
      //   "n": "Enfield, Southgate",
      //   "q": 4,
      //   "r": -6
      // },
      // {
      //   "n": "Epping Forest",
      //   "q": 9,
      //   "r": -6
      // },
      // {
      //   "n": "Epsom and Ewell",
      //   "q": 1,
      //   "r": -13
      // },
      // {
      //   "n": "Erewash",
      //   "q": 1,
      //   "r": 0
      // },
      // {
      //   "n": "Erith and Thamesmead",
      //   "q": 8,
      //   "r": -11
      // },
      // {
      //   "n": "Esher and Walton",
      //   "q": -1,
      //   "r": -13
      // },
      // {
      //   "n": "Exeter",
      //   "q": -12,
      //   "r": -13
      // },
      // {
      //   "n": "Fareham",
      //   "q": -4,
      //   "r": -14
      // },
      // {
      //   "n": "Faversham and Mid Kent",
      //   "q": 12,
      //   "r": -11
      // },
      // {
      //   "n": "Feltham and Heston",
      //   "q": 0,
      //   "r": -11
      // },
      // {
      //   "n": "Filton and Bradley Stoke",
      //   "q": -8,
      //   "r": -8
      // },
      // {
      //   "n": "Finchley and Golders Green",
      //   "q": 3,
      //   "r": -8
      // },
      // {
      //   "n": "Folkestone and Hythe",
      //   "q": 12,
      //   "r": -14
      // },
      // {
      //   "n": "Forest of Dean",
      //   "q": -7,
      //   "r": -6
      // },
      // {
      //   "n": "Fylde",
      //   "q": -7,
      //   "r": 10
      // },
      // {
      //   "n": "Gainsborough",
      //   "q": 2,
      //   "r": 5
      // },
      // {
      //   "n": "Garston and Halewood",
      //   "q": -9,
      //   "r": 3
      // },
      // {
      //   "n": "Gateshead",
      //   "q": -3,
      //   "r": 15
      // },
      // {
      //   "n": "Gedling",
      //   "q": 3,
      //   "r": 2
      // },
      // {
      //   "n": "Gillingham and Rainham",
      //   "q": 11,
      //   "r": -11
      // },
      // {
      //   "n": "Gloucester",
      //   "q": -7,
      //   "r": -8
      // },
      // {
      //   "n": "Gosport",
      //   "q": -3,
      //   "r": -14
      // },
      // {
      //   "n": "Grantham and Stamford",
      //   "q": 3,
      //   "r": 3
      // },
      // {
      //   "n": "Gravesham",
      //   "q": 10,
      //   "r": -10
      // },
      // {
      //   "n": "Great Grimsby",
      //   "q": 3,
      //   "r": 6
      // },
      // {
      //   "n": "Great Yarmouth",
      //   "q": 8,
      //   "r": 2
      // },
      // {
      //   "n": "Greenwich and Woolwich",
      //   "q": 7,
      //   "r": -11
      // },
      // {
      //   "n": "Guildford",
      //   "q": -2,
      //   "r": -13
      // },
      // {
      //   "n": "Hackney North and Stoke Newington",
      //   "q": 5,
      //   "r": -9
      // },
      // {
      //   "n": "Hackney South and Shoreditch",
      //   "q": 6,
      //   "r": -10
      // },
      // {
      //   "n": "Halesowen and Rowley Regis",
      //   "q": -6,
      //   "r": -3
      // },
      // {
      //   "n": "Halifax",
      //   "q": -3,
      //   "r": 8
      // },
      // {
      //   "n": "Haltemprice and Howden",
      //   "q": 2,
      //   "r": 9
      // },
      // {
      //   "n": "Halton",
      //   "q": -8,
      //   "r": 2
      // },
      // {
      //   "n": "Hammersmith",
      //   "q": 2,
      //   "r": -10
      // },
      // {
      //   "n": "Hampstead and Kilburn",
      //   "q": 3,
      //   "r": -9
      // },
      // {
      //   "n": "Harborough",
      //   "q": 3,
      //   "r": -1
      // },
      // {
      //   "n": "Harlow",
      //   "q": 8,
      //   "r": -3
      // },
      // {
      //   "n": "Harrogate and Knaresborough",
      //   "q": -2,
      //   "r": 11
      // },
      // {
      //   "n": "Harrow East",
      //   "q": 2,
      //   "r": -8
      // },
      // {
      //   "n": "Harrow West",
      //   "q": 1,
      //   "r": -8
      // },
      // {
      //   "n": "Hartlepool",
      //   "q": 1,
      //   "r": 14
      // },
      // {
      //   "n": "Harwich and North Essex",
      //   "q": 10,
      //   "r": -2
      // },
      // {
      //   "n": "Hastings and Rye",
      //   "q": 11,
      //   "r": -14
      // },
      // {
      //   "n": "Havant",
      //   "q": -1,
      //   "r": -14
      // },
      // {
      //   "n": "Hayes and Harlington",
      //   "q": -1,
      //   "r": -9
      // },
      // {
      //   "n": "Hazel Grove",
      //   "q": -4,
      //   "r": 4
      // },
      // {
      //   "n": "Hemel Hempstead",
      //   "q": 5,
      //   "r": -5
      // },
      // {
      //   "n": "Hemsworth",
      //   "q": 0,
      //   "r": 7
      // },
      // {
      //   "n": "Hendon",
      //   "q": 2,
      //   "r": -7
      // },
      // {
      //   "n": "Henley",
      //   "q": 1,
      //   "r": -6
      // },
      // {
      //   "n": "Hereford and South Herefordshire",
      //   "q": -7,
      //   "r": -5
      // },
      // {
      //   "n": "Hertford and Stortford",
      //   "q": 7,
      //   "r": -3
      // },
      // {
      //   "n": "Hertsmere",
      //   "q": 7,
      //   "r": -5
      // },
      // {
      //   "n": "Hexham",
      //   "q": -4,
      //   "r": 16
      // },
      // {
      //   "n": "Heywood and Middleton",
      //   "q": -5,
      //   "r": 8
      // },
      // {
      //   "n": "High Peak",
      //   "q": -3,
      //   "r": 4
      // },
      // {
      //   "n": "Hitchin and Harpenden",
      //   "q": 5,
      //   "r": -3
      // },
      // {
      //   "n": "Holborn and St Pancras",
      //   "q": 4,
      //   "r": -10
      // },
      // {
      //   "n": "Hornchurch and Upminster",
      //   "q": 8,
      //   "r": -8
      // },
      // {
      //   "n": "Hornsey and Wood Green",
      //   "q": 4,
      //   "r": -7
      // },
      // {
      //   "n": "Horsham",
      //   "q": 1,
      //   "r": -15
      // },
      // {
      //   "n": "Houghton and Sunderland South",
      //   "q": -1,
      //   "r": 14
      // },
      // {
      //   "n": "Hove",
      //   "q": 5,
      //   "r": -15
      // },
      // {
      //   "n": "Huddersfield",
      //   "q": -3,
      //   "r": 7
      // },
      // {
      //   "n": "Huntingdon",
      //   "q": 5,
      //   "r": -2
      // },
      // {
      //   "n": "Hyndburn",
      //   "q": -5,
      //   "r": 10
      // },
      // {
      //   "n": "Ilford North",
      //   "q": 6,
      //   "r": -7
      // },
      // {
      //   "n": "Ilford South",
      //   "q": 7,
      //   "r": -8
      // },
      // {
      //   "n": "Ipswich",
      //   "q": 9,
      //   "r": -1
      // },
      // {
      //   "n": "Isle of Wight",
      //   "q": -6,
      //   "r": -15
      // },
      // {
      //   "n": "Islington North",
      //   "q": 4,
      //   "r": -9
      // },
      // {
      //   "n": "Islington South and Finsbury",
      //   "q": 5,
      //   "r": -10
      // },
      // {
      //   "n": "Jarrow",
      //   "q": -1,
      //   "r": 15
      // },
      // {
      //   "n": "Keighley",
      //   "q": -3,
      //   "r": 10
      // },
      // {
      //   "n": "Kenilworth and Southam",
      //   "q": 1,
      //   "r": -4
      // },
      // {
      //   "n": "Kensington",
      //   "q": 3,
      //   "r": -10
      // },
      // {
      //   "n": "Kettering",
      //   "q": 4,
      //   "r": 0
      // },
      // {
      //   "n": "Kingston and Surbiton",
      //   "q": 0,
      //   "r": -13
      // },
      // {
      //   "n": "Kingston upon Hull East",
      //   "q": 3,
      //   "r": 7
      // },
      // {
      //   "n": "Kingston upon Hull North",
      //   "q": 3,
      //   "r": 9
      // },
      // {
      //   "n": "Kingston upon Hull West and Hessle",
      //   "q": 3,
      //   "r": 8
      // },
      // {
      //   "n": "Kingswood",
      //   "q": -6,
      //   "r": -8
      // },
      // {
      //   "n": "Knowsley",
      //   "q": -9,
      //   "r": 6
      // },
      // {
      //   "n": "Lancaster and Fleetwood",
      //   "q": -4,
      //   "r": 12
      // },
      // {
      //   "n": "Leeds Central",
      //   "q": 0,
      //   "r": 9
      // },
      // {
      //   "n": "Leeds East",
      //   "q": 1,
      //   "r": 9
      // },
      // {
      //   "n": "Leeds North East",
      //   "q": 1,
      //   "r": 10
      // },
      // {
      //   "n": "Leeds North West",
      //   "q": 0,
      //   "r": 10
      // },
      // {
      //   "n": "Leeds West",
      //   "q": -1,
      //   "r": 9
      // },
      // {
      //   "n": "Leicester East",
      //   "q": 2,
      //   "r": -1
      // },
      // {
      //   "n": "Leicester South",
      //   "q": 2,
      //   "r": -2
      // },
      // {
      //   "n": "Leicester West",
      //   "q": 1,
      //   "r": -1
      // },
      // {
      //   "n": "Leigh",
      //   "q": -8,
      //   "r": 6
      // },
      // {
      //   "n": "Lewes",
      //   "q": 8,
      //   "r": -15
      // },
      // {
      //   "n": "Lewisham East",
      //   "q": 7,
      //   "r": -13
      // },
      // {
      //   "n": "Lewisham West and Penge",
      //   "q": 7,
      //   "r": -12
      // },
      // {
      //   "n": "Lewisham, Deptford",
      //   "q": 6,
      //   "r": -11
      // },
      // {
      //   "n": "Leyton and Wanstead",
      //   "q": 6,
      //   "r": -8
      // },
      // {
      //   "n": "Lichfield",
      //   "q": -2,
      //   "r": 0
      // },
      // {
      //   "n": "Lincoln",
      //   "q": 3,
      //   "r": 5
      // },
      // {
      //   "n": "Liverpool, Riverside",
      //   "q": -10,
      //   "r": 4
      // },
      // {
      //   "n": "Liverpool, Walton",
      //   "q": -10,
      //   "r": 6
      // },
      // {
      //   "n": "Liverpool, Wavertree",
      //   "q": -10,
      //   "r": 3
      // },
      // {
      //   "n": "Liverpool, West Derby",
      //   "q": -10,
      //   "r": 5
      // },
      // {
      //   "n": "Loughborough",
      //   "q": 2,
      //   "r": 0
      // },
      // {
      //   "n": "Louth and Horncastle",
      //   "q": 4,
      //   "r": 6
      // },
      // {
      //   "n": "Ludlow",
      //   "q": -8,
      //   "r": -2
      // },
      // {
      //   "n": "Luton North",
      //   "q": 5,
      //   "r": -4
      // },
      // {
      //   "n": "Luton South",
      //   "q": 4,
      //   "r": -5
      // },
      // {
      //   "n": "Macclesfield",
      //   "q": -4,
      //   "r": 3
      // },
      // {
      //   "n": "Maidenhead",
      //   "q": -2,
      //   "r": -7
      // },
      // {
      //   "n": "Maidstone and The Weald",
      //   "q": 11,
      //   "r": -12
      // },
      // {
      //   "n": "Makerfield",
      //   "q": -9,
      //   "r": 7
      // },
      // {
      //   "n": "Maldon",
      //   "q": 11,
      //   "r": -4
      // },
      // {
      //   "n": "Manchester Central",
      //   "q": -6,
      //   "r": 5
      // },
      // {
      //   "n": "Manchester, Gorton",
      //   "q": -5,
      //   "r": 5
      // },
      // {
      //   "n": "Manchester, Withington",
      //   "q": -6,
      //   "r": 4
      // },
      // {
      //   "n": "Mansfield",
      //   "q": 1,
      //   "r": 3
      // },
      // {
      //   "n": "Meon Valley",
      //   "q": -4,
      //   "r": -13
      // },
      // {
      //   "n": "Meriden",
      //   "q": -2,
      //   "r": -5
      // },
      // {
      //   "n": "Mid Bedfordshire",
      //   "q": 4,
      //   "r": -4
      // },
      // {
      //   "n": "Mid Derbyshire",
      //   "q": -2,
      //   "r": 2
      // },
      // {
      //   "n": "Mid Dorset and North Poole",
      //   "q": -8,
      //   "r": -12
      // },
      // {
      //   "n": "Mid Norfolk",
      //   "q": 6,
      //   "r": 1
      // },
      // {
      //   "n": "Mid Sussex",
      //   "q": 10,
      //   "r": -14
      // },
      // {
      //   "n": "Mid Worcestershire",
      //   "q": -5,
      //   "r": -5
      // },
      // {
      //   "n": "Middlesbrough",
      //   "q": 1,
      //   "r": 12
      // },
      // {
      //   "n": "Middlesbrough South and East Cleveland",
      //   "q": 2,
      //   "r": 12
      // },
      // {
      //   "n": "Milton Keynes North",
      //   "q": 3,
      //   "r": -3
      // },
      // {
      //   "n": "Milton Keynes South",
      //   "q": 3,
      //   "r": -4
      // },
      // {
      //   "n": "Mitcham and Morden",
      //   "q": 3,
      //   "r": -14
      // },
      // {
      //   "n": "Mole Valley",
      //   "q": 0,
      //   "r": -14
      // },
      // {
      //   "n": "Morecambe and Lunesdale",
      //   "q": -5,
      //   "r": 12
      // },
      // {
      //   "n": "Morley and Outwood",
      //   "q": 0,
      //   "r": 8
      // },
      // {
      //   "n": "New Forest East",
      //   "q": -6,
      //   "r": -13
      // },
      // {
      //   "n": "New Forest West",
      //   "q": -6,
      //   "r": -12
      // },
      // {
      //   "n": "Newark",
      //   "q": 3,
      //   "r": 4
      // },
      // {
      //   "n": "Newbury",
      //   "q": -4,
      //   "r": -7
      // },
      // {
      //   "n": "Newcastle upon Tyne Central",
      //   "q": -4,
      //   "r": 15
      // },
      // {
      //   "n": "Newcastle upon Tyne East",
      //   "q": -2,
      //   "r": 16
      // },
      // {
      //   "n": "Newcastle upon Tyne North",
      //   "q": -3,
      //   "r": 16
      // },
      // {
      //   "n": "Newcastle-under-Lyme",
      //   "q": -5,
      //   "r": 1
      // },
      // {
      //   "n": "Newton Abbot",
      //   "q": -12,
      //   "r": -14
      // },
      // {
      //   "n": "Normanton, Pontefract and Castleford",
      //   "q": 1,
      //   "r": 8
      // },
      // {
      //   "n": "North Cornwall",
      //   "q": -14,
      //   "r": -14
      // },
      // {
      //   "n": "North Devon",
      //   "q": -12,
      //   "r": -12
      // },
      // {
      //   "n": "North Dorset",
      //   "q": -7,
      //   "r": -12
      // },
      // {
      //   "n": "North Durham",
      //   "q": -2,
      //   "r": 14
      // },
      // {
      //   "n": "North East Bedfordshire",
      //   "q": 4,
      //   "r": -2
      // },
      // {
      //   "n": "North East Cambridgeshire",
      //   "q": 6,
      //   "r": 0
      // },
      // {
      //   "n": "North East Derbyshire",
      //   "q": -2,
      //   "r": 3
      // },
      // {
      //   "n": "North East Hampshire",
      //   "q": -3,
      //   "r": -9
      // },
      // {
      //   "n": "North East Hertfordshire",
      //   "q": 6,
      //   "r": -3
      // },
      // {
      //   "n": "North East Somerset",
      //   "q": -6,
      //   "r": -10
      // },
      // {
      //   "n": "North Herefordshire",
      //   "q": -8,
      //   "r": -4
      // },
      // {
      //   "n": "North Norfolk",
      //   "q": 6,
      //   "r": 2
      // },
      // {
      //   "n": "North Shropshire",
      //   "q": -8,
      //   "r": 0
      // },
      // {
      //   "n": "North Somerset",
      //   "q": -9,
      //   "r": -11
      // },
      // {
      //   "n": "North Swindon",
      //   "q": -5,
      //   "r": -7
      // },
      // {
      //   "n": "North Thanet",
      //   "q": 13,
      //   "r": -10
      // },
      // {
      //   "n": "North Tyneside",
      //   "q": -1,
      //   "r": 16
      // },
      // {
      //   "n": "North Warwickshire",
      //   "q": -1,
      //   "r": -1
      // },
      // {
      //   "n": "North West Cambridgeshire",
      //   "q": 5,
      //   "r": -1
      // },
      // {
      //   "n": "North West Durham",
      //   "q": -3,
      //   "r": 13
      // },
      // {
      //   "n": "North West Hampshire",
      //   "q": -4,
      //   "r": -10
      // },
      // {
      //   "n": "North West Leicestershire",
      //   "q": 0,
      //   "r": 0
      // },
      // {
      //   "n": "North West Norfolk",
      //   "q": 5,
      //   "r": 1
      // },
      // {
      //   "n": "North Wiltshire",
      //   "q": -5,
      //   "r": -8
      // },
      // {
      //   "n": "Northampton North",
      //   "q": 3,
      //   "r": -2
      // },
      // {
      //   "n": "Northampton South",
      //   "q": 2,
      //   "r": -3
      // },
      // {
      //   "n": "Norwich North",
      //   "q": 7,
      //   "r": 1
      // },
      // {
      //   "n": "Norwich South",
      //   "q": 8,
      //   "r": 0
      // },
      // {
      //   "n": "Nottingham East",
      //   "q": 2,
      //   "r": 1
      // },
      // {
      //   "n": "Nottingham North",
      //   "q": 2,
      //   "r": 2
      // },
      // {
      //   "n": "Nottingham South",
      //   "q": 1,
      //   "r": 1
      // },
      // {
      //   "n": "Nuneaton",
      //   "q": 0,
      //   "r": -2
      // },
      // {
      //   "n": "Old Bexley and Sidcup",
      //   "q": 9,
      //   "r": -12
      // },
      // {
      //   "n": "Oldham East and Saddleworth",
      //   "q": -5,
      //   "r": 7
      // },
      // {
      //   "n": "Oldham West and Royton",
      //   "q": -6,
      //   "r": 7
      // },
      // {
      //   "n": "Orpington",
      //   "q": 8,
      //   "r": -14
      // },
      // {
      //   "n": "Oxford East",
      //   "q": 0,
      //   "r": -5
      // },
      // {
      //   "n": "Oxford West and Abingdon",
      //   "q": 0,
      //   "r": -6
      // },
      // {
      //   "n": "Pendle",
      //   "q": -5,
      //   "r": 11
      // },
      // {
      //   "n": "Penistone and Stocksbridge",
      //   "q": -3,
      //   "r": 6
      // },
      // {
      //   "n": "Penrith and The Border",
      //   "q": -5,
      //   "r": 15
      // },
      // {
      //   "n": "Peterborough",
      //   "q": 5,
      //   "r": 0
      // },
      // {
      //   "n": "Plymouth, Moor View",
      //   "q": -13,
      //   "r": -15
      // },
      // {
      //   "n": "Plymouth, Sutton and Devonport",
      //   "q": -13,
      //   "r": -16
      // },
      // {
      //   "n": "Poole",
      //   "q": -9,
      //   "r": -13
      // },
      // {
      //   "n": "Poplar and Limehouse",
      //   "q": 8,
      //   "r": -10
      // },
      // {
      //   "n": "Portsmouth North",
      //   "q": -3,
      //   "r": -13
      // },
      // {
      //   "n": "Portsmouth South",
      //   "q": -2,
      //   "r": -14
      // },
      // {
      //   "n": "Preston",
      //   "q": -7,
      //   "r": 11
      // },
      // {
      //   "n": "Pudsey",
      //   "q": -1,
      //   "r": 10
      // },
      // {
      //   "n": "Putney",
      //   "q": 3,
      //   "r": -12
      // },
      // {
      //   "n": "Rayleigh and Wickford",
      //   "q": 9,
      //   "r": -5
      // },
      // {
      //   "n": "Reading East",
      //   "q": -3,
      //   "r": -7
      // },
      // {
      //   "n": "Reading West",
      //   "q": -3,
      //   "r": -8
      // },
      // {
      //   "n": "Redcar",
      //   "q": 1,
      //   "r": 13
      // },
      // {
      //   "n": "Redditch",
      //   "q": -4,
      //   "r": -6
      // },
      // {
      //   "n": "Reigate",
      //   "q": 2,
      //   "r": -14
      // },
      // {
      //   "n": "Ribble Valley",
      //   "q": -3,
      //   "r": 12
      // },
      // {
      //   "n": "Richmond (Yorks)",
      //   "q": -3,
      //   "r": 11
      // },
      // {
      //   "n": "Richmond Park",
      //   "q": 1,
      //   "r": -12
      // },
      // {
      //   "n": "Rochdale",
      //   "q": -4,
      //   "r": 8
      // },
      // {
      //   "n": "Rochester and Strood",
      //   "q": 11,
      //   "r": -10
      // },
      // {
      //   "n": "Rochford and Southend East",
      //   "q": 10,
      //   "r": -5
      // },
      // {
      //   "n": "Romford",
      //   "q": 7,
      //   "r": -7
      // },
      // {
      //   "n": "Romsey and Southampton North",
      //   "q": -5,
      //   "r": -11
      // },
      // {
      //   "n": "Rossendale and Darwen",
      //   "q": -5,
      //   "r": 9
      // },
      // {
      //   "n": "Rother Valley",
      //   "q": 1,
      //   "r": 4
      // },
      // {
      //   "n": "Rotherham",
      //   "q": 0,
      //   "r": 5
      // },
      // {
      //   "n": "Rugby",
      //   "q": 0,
      //   "r": -3
      // },
      // {
      //   "n": "Ruislip, Northwood and Pinner",
      //   "q": 1,
      //   "r": -7
      // },
      // {
      //   "n": "Runnymede and Weybridge",
      //   "q": -1,
      //   "r": -12
      // },
      // {
      //   "n": "Rushcliffe",
      //   "q": 3,
      //   "r": 1
      // },
      // {
      //   "n": "Rutland and Melton",
      //   "q": 4,
      //   "r": 2
      // },
      // {
      //   "n": "Saffron Walden",
      //   "q": 7,
      //   "r": -2
      // },
      // {
      //   "n": "Salford and Eccles",
      //   "q": -7,
      //   "r": 5
      // },
      // {
      //   "n": "Salisbury",
      //   "q": -6,
      //   "r": -11
      // },
      // {
      //   "n": "Scarborough and Whitby",
      //   "q": 2,
      //   "r": 11
      // },
      // {
      //   "n": "Scunthorpe",
      //   "q": 2,
      //   "r": 6
      // },
      // {
      //   "n": "Sedgefield",
      //   "q": -1,
      //   "r": 13
      // },
      // {
      //   "n": "Sefton Central",
      //   "q": -9,
      //   "r": 8
      // },
      // {
      //   "n": "Selby and Ainsty",
      //   "q": 2,
      //   "r": 8
      // },
      // {
      //   "n": "Sevenoaks",
      //   "q": 9,
      //   "r": -13
      // },
      // {
      //   "n": "Sheffield Central",
      //   "q": -1,
      //   "r": 4
      // },
      // {
      //   "n": "Sheffield South East",
      //   "q": 0,
      //   "r": 4
      // },
      // {
      //   "n": "Sheffield, Brightside and Hillsborough",
      //   "q": -2,
      //   "r": 5
      // },
      // {
      //   "n": "Sheffield, Hallam",
      //   "q": -3,
      //   "r": 5
      // },
      // {
      //   "n": "Sheffield, Heeley",
      //   "q": -2,
      //   "r": 4
      // },
      // {
      //   "n": "Sherwood",
      //   "q": 2,
      //   "r": 3
      // },
      // {
      //   "n": "Shipley",
      //   "q": -2,
      //   "r": 10
      // },
      // {
      //   "n": "Shrewsbury and Atcham",
      //   "q": -9,
      //   "r": -1
      // },
      // {
      //   "n": "Sittingbourne and Sheppey",
      //   "q": 12,
      //   "r": -10
      // },
      // {
      //   "n": "Skipton and Ripon",
      //   "q": -4,
      //   "r": 11
      // },
      // {
      //   "n": "Sleaford and North Hykeham",
      //   "q": 4,
      //   "r": 4
      // },
      // {
      //   "n": "Slough",
      //   "q": -2,
      //   "r": -8
      // },
      // {
      //   "n": "Solihull",
      //   "q": -2,
      //   "r": -4
      // },
      // {
      //   "n": "Somerton and Frome",
      //   "q": -8,
      //   "r": -11
      // },
      // {
      //   "n": "South Basildon and East Thurrock",
      //   "q": 9,
      //   "r": -7
      // },
      // {
      //   "n": "South Cambridgeshire",
      //   "q": 6,
      //   "r": -2
      // },
      // {
      //   "n": "South Derbyshire",
      //   "q": -2,
      //   "r": 1
      // },
      // {
      //   "n": "South Dorset",
      //   "q": -9,
      //   "r": -15
      // },
      // {
      //   "n": "South East Cambridgeshire",
      //   "q": 7,
      //   "r": -1
      // },
      // {
      //   "n": "South East Cornwall",
      //   "q": -14,
      //   "r": -15
      // },
      // {
      //   "n": "South Holland and The Deepings",
      //   "q": 4,
      //   "r": 3
      // },
      // {
      //   "n": "South Leicestershire",
      //   "q": 1,
      //   "r": -2
      // },
      // {
      //   "n": "South Norfolk",
      //   "q": 9,
      //   "r": 0
      // },
      // {
      //   "n": "South Northamptonshire",
      //   "q": 2,
      //   "r": -4
      // },
      // {
      //   "n": "South Ribble",
      //   "q": -8,
      //   "r": 9
      // },
      // {
      //   "n": "South Shields",
      //   "q": 0,
      //   "r": 16
      // },
      // {
      //   "n": "South Staffordshire",
      //   "q": -6,
      //   "r": 0
      // },
      // {
      //   "n": "South Suffolk",
      //   "q": 10,
      //   "r": -1
      // },
      // {
      //   "n": "South Swindon",
      //   "q": -4,
      //   "r": -8
      // },
      // {
      //   "n": "South Thanet",
      //   "q": 13,
      //   "r": -11
      // },
      // {
      //   "n": "South West Bedfordshire",
      //   "q": 3,
      //   "r": -5
      // },
      // {
      //   "n": "South West Devon",
      //   "q": -13,
      //   "r": -14
      // },
      // {
      //   "n": "South West Hertfordshire",
      //   "q": 3,
      //   "r": -6
      // },
      // {
      //   "n": "South West Norfolk",
      //   "q": 7,
      //   "r": 0
      // },
      // {
      //   "n": "South West Surrey",
      //   "q": -2,
      //   "r": -12
      // },
      // {
      //   "n": "South West Wiltshire",
      //   "q": -7,
      //   "r": -11
      // },
      // {
      //   "n": "Southampton, Itchen",
      //   "q": -5,
      //   "r": -13
      // },
      // {
      //   "n": "Southampton, Test",
      //   "q": -5,
      //   "r": -12
      // },
      // {
      //   "n": "Southend West",
      //   "q": 10,
      //   "r": -6
      // },
      // {
      //   "n": "Southport",
      //   "q": -9,
      //   "r": 9
      // },
      // {
      //   "n": "Spelthorne",
      //   "q": -1,
      //   "r": -11
      // },
      // {
      //   "n": "St Albans",
      //   "q": 6,
      //   "r": -5
      // },
      // {
      //   "n": "St Austell and Newquay",
      //   "q": -15,
      //   "r": -15
      // },
      // {
      //   "n": "St Helens North",
      //   "q": -9,
      //   "r": 5
      // },
      // {
      //   "n": "St Helens South and Whiston",
      //   "q": -9,
      //   "r": 4
      // },
      // {
      //   "n": "St Ives",
      //   "q": -40,
      //   "r": 40
      // },
      // {
      //   "n": "Stafford",
      //   "q": -4,
      //   "r": 0
      // },
      // {
      //   "n": "Staffordshire Moorlands",
      //   "q": -3,
      //   "r": 2
      // },
      // {
      //   "n": "Stalybridge and Hyde",
      //   "q": -4,
      //   "r": 6
      // },
      // {
      //   "n": "Stevenage",
      //   "q": 6,
      //   "r": -4
      // },
      // {
      //   "n": "Stockport",
      //   "q": -5,
      //   "r": 4
      // },
      // {
      //   "n": "Stockton North",
      //   "q": 0,
      //   "r": 13
      // },
      // {
      //   "n": "Stockton South",
      //   "q": 0,
      //   "r": 12
      // },
      // {
      //   "n": "Stoke-on-Trent Central",
      //   "q": -4,
      //   "r": 1
      // },
      // {
      //   "n": "Stoke-on-Trent North",
      //   "q": -4,
      //   "r": 2
      // },
      // {
      //   "n": "Stoke-on-Trent South",
      //   "q": -3,
      //   "r": 0
      // },
      // {
      //   "n": "Stone",
      //   "q": -5,
      //   "r": 0
      // },
      // {
      //   "n": "Stourbridge",
      //   "q": -5,
      //   "r": -4
      // },
      // {
      //   "n": "Stratford-on-Avon",
      //   "q": -3,
      //   "r": -6
      // },
      // {
      //   "n": "Streatham",
      //   "q": 4,
      //   "r": -13
      // },
      // {
      //   "n": "Stretford and Urmston",
      //   "q": -7,
      //   "r": 4
      // },
      // {
      //   "n": "Stroud",
      //   "q": -6,
      //   "r": -7
      // },
      // {
      //   "n": "Suffolk Coastal",
      //   "q": 9,
      //   "r": 1
      // },
      // {
      //   "n": "Sunderland Central",
      //   "q": 0,
      //   "r": 15
      // },
      // {
      //   "n": "Surrey Heath",
      //   "q": -1,
      //   "r": -10
      // },
      // {
      //   "n": "Sutton and Cheam",
      //   "q": 2,
      //   "r": -13
      // },
      // {
      //   "n": "Sutton Coldfield",
      //   "q": -2,
      //   "r": -1
      // },
      // {
      //   "n": "Tamworth",
      //   "q": -1,
      //   "r": 0
      // },
      // {
      //   "n": "Tatton",
      //   "q": -6,
      //   "r": 2
      // },
      // {
      //   "n": "Taunton Deane",
      //   "q": -10,
      //   "r": -13
      // },
      // {
      //   "n": "Telford",
      //   "q": -8,
      //   "r": -1
      // },
      // {
      //   "n": "Tewkesbury",
      //   "q": -6,
      //   "r": -6
      // },
      // {
      //   "n": "The Cotswolds",
      //   "q": -5,
      //   "r": -6
      // },
      // {
      //   "n": "The Wrekin",
      //   "q": -7,
      //   "r": 0
      // },
      // {
      //   "n": "Thirsk and Malton",
      //   "q": 1,
      //   "r": 11
      // },
      // {
      //   "n": "Thornbury and Yate",
      //   "q": -8,
      //   "r": -7
      // },
      // {
      //   "n": "Thurrock",
      //   "q": 8,
      //   "r": -7
      // },
      // {
      //   "n": "Tiverton and Honiton",
      //   "q": -11,
      //   "r": -13
      // },
      // {
      //   "n": "Tonbridge and Malling",
      //   "q": 10,
      //   "r": -12
      // },
      // {
      //   "n": "Tooting",
      //   "q": 3,
      //   "r": -13
      // },
      // {
      //   "n": "Torbay",
      //   "q": -12,
      //   "r": -15
      // },
      // {
      //   "n": "Torridge and West Devon",
      //   "q": -14,
      //   "r": -13
      // },
      // {
      //   "n": "Totnes",
      //   "q": -12,
      //   "r": -16
      // },
      // {
      //   "n": "Tottenham",
      //   "q": 4,
      //   "r": -8
      // },
      // {
      //   "n": "Truro and Falmouth",
      //   "q": -15,
      //   "r": -16
      // },
      // {
      //   "n": "Tunbridge Wells",
      //   "q": 10,
      //   "r": -13
      // },
      // {
      //   "n": "Twickenham",
      //   "q": 0,
      //   "r": -12
      // },
      // {
      //   "n": "Tynemouth",
      //   "q": -1,
      //   "r": 17
      // },
      // {
      //   "n": "Uxbridge and South Ruislip",
      //   "q": 0,
      //   "r": -8
      // },
      // {
      //   "n": "Vauxhall",
      //   "q": 5,
      //   "r": -12
      // },
      // {
      //   "n": "Wakefield",
      //   "q": -1,
      //   "r": 7
      // },
      // {
      //   "n": "Wallasey",
      //   "q": -11,
      //   "r": 3
      // },
      // {
      //   "n": "Walsall North",
      //   "q": -6,
      //   "r": -1
      // },
      // {
      //   "n": "Walsall South",
      //   "q": -5,
      //   "r": -1
      // },
      // {
      //   "n": "Walthamstow",
      //   "q": 5,
      //   "r": -8
      // },
      // {
      //   "n": "Wansbeck",
      //   "q": -3,
      //   "r": 17
      // },
      // {
      //   "n": "Wantage",
      //   "q": -2,
      //   "r": -6
      // },
      // {
      //   "n": "Warley",
      //   "q": -5,
      //   "r": -3
      // },
      // {
      //   "n": "Warrington North",
      //   "q": -8,
      //   "r": 4
      // },
      // {
      //   "n": "Warrington South",
      //   "q": -8,
      //   "r": 3
      // },
      // {
      //   "n": "Warwick and Leamington",
      //   "q": -1,
      //   "r": -5
      // },
      // {
      //   "n": "Washington and Sunderland West",
      //   "q": -2,
      //   "r": 15
      // },
      // {
      //   "n": "Watford",
      //   "q": 7,
      //   "r": -6
      // },
      // {
      //   "n": "Waveney",
      //   "q": 8,
      //   "r": 1
      // },
      // {
      //   "n": "Wealden",
      //   "q": 11,
      //   "r": -13
      // },
      // {
      //   "n": "Weaver Vale",
      //   "q": -7,
      //   "r": 2
      // },
      // {
      //   "n": "Wellingborough",
      //   "q": 4,
      //   "r": -1
      // },
      // {
      //   "n": "Wells",
      //   "q": -10,
      //   "r": -12
      // },
      // {
      //   "n": "Welwyn Hatfield",
      //   "q": 7,
      //   "r": -4
      // },
      // {
      //   "n": "Wentworth and Dearne",
      //   "q": -1,
      //   "r": 5
      // },
      // {
      //   "n": "West Bromwich East",
      //   "q": -4,
      //   "r": -2
      // },
      // {
      //   "n": "West Bromwich West",
      //   "q": -5,
      //   "r": -2
      // },
      // {
      //   "n": "West Dorset",
      //   "q": -9,
      //   "r": -14
      // },
      // {
      //   "n": "West Ham",
      //   "q": 6,
      //   "r": -9
      // },
      // {
      //   "n": "West Lancashire",
      //   "q": -8,
      //   "r": 8
      // },
      // {
      //   "n": "West Suffolk",
      //   "q": 8,
      //   "r": -1
      // },
      // {
      //   "n": "West Worcestershire",
      //   "q": -7,
      //   "r": -4
      // },
      // {
      //   "n": "Westminster North",
      //   "q": 3,
      //   "r": -11
      // },
      // {
      //   "n": "Westmorland and Lonsdale",
      //   "q": -4,
      //   "r": 13
      // },
      // {
      //   "n": "Weston-Super-Mare",
      //   "q": -9,
      //   "r": -12
      // },
      // {
      //   "n": "Wigan",
      //   "q": -7,
      //   "r": 8
      // },
      // {
      //   "n": "Wimbledon",
      //   "q": 2,
      //   "r": -12
      // },
      // {
      //   "n": "Winchester",
      //   "q": -4,
      //   "r": -11
      // },
      // {
      //   "n": "Windsor",
      //   "q": -2,
      //   "r": -9
      // },
      // {
      //   "n": "Wirral South",
      //   "q": -9,
      //   "r": 2
      // },
      // {
      //   "n": "Wirral West",
      //   "q": -11,
      //   "r": 2
      // },
      // {
      //   "n": "Witham",
      //   "q": 10,
      //   "r": -4
      // },
      // {
      //   "n": "Witney",
      //   "q": -1,
      //   "r": -6
      // },
      // {
      //   "n": "Woking",
      //   "q": -2,
      //   "r": -11
      // },
      // {
      //   "n": "Wokingham",
      //   "q": -4,
      //   "r": -9
      // },
      // {
      //   "n": "Wolverhampton North East",
      //   "q": -7,
      //   "r": -1
      // },
      // {
      //   "n": "Wolverhampton South East",
      //   "q": -6,
      //   "r": -2
      // },
      // {
      //   "n": "Wolverhampton South West",
      //   "q": -7,
      //   "r": -2
      // },
      // {
      //   "n": "Worcester",
      //   "q": -6,
      //   "r": -5
      // },
      // {
      //   "n": "Workington",
      //   "q": -5,
      //   "r": 14
      // },
      // {
      //   "n": "Worsley and Eccles South",
      //   "q": -8,
      //   "r": 5
      // },
      // {
      //   "n": "Worthing West",
      //   "q": 3,
      //   "r": -15
      // },
      // {
      //   "n": "Wycombe",
      //   "q": -1,
      //   "r": -7
      // },
      // {
      //   "n": "Wyre and Preston North",
      //   "q": -6,
      //   "r": 11
      // },
      // {
      //   "n": "Wyre Forest",
      //   "q": -8,
      //   "r": -3
      // },
      // {
      //   "n": "Wythenshawe and Sale East",
      //   "q": -6,
      //   "r": 3
      // },
      // {
      //   "n": "Yeovil",
      //   "q": -10,
      //   "r": -14
      // },
      // {
      //   "n": "York Central",
      //   "q": 0,
      //   "r": 11
      // },
      // {
      //   "n": "York Outer",
      //   "q": -1,
      //   "r": 11
      // },
      // {
      //   "n": "Belfast East",
      //   "q": -14,
      //   "r": 13
      // },
      // {
      //   "n": "Belfast North",
      //   "q": -14,
      //   "r": 14
      // },
      // {
      //   "n": "Belfast South",
      //   "q": -14,
      //   "r": 12
      // },
      // {
      //   "n": "Belfast West",
      //   "q": -15,
      //   "r": 13
      // },
      // {
      //   "n": "East Antrim",
      //   "q": -14,
      //   "r": 15
      // },
      // {
      //   "n": "East Londonderry",
      //   "q": -16,
      //   "r": 15
      // },
      // {
      //   "n": "Fermanagh and South Tyrone",
      //   "q": -17,
      //   "r": 13
      // },
      // {
      //   "n": "Foyle",
      //   "q": -17,
      //   "r": 15
      // },
      // {
      //   "n": "Lagan Valley",
      //   "q": -15,
      //   "r": 12
      // },
      // {
      //   "n": "Mid Ulster",
      //   "q": -16,
      //   "r": 14
      // },
      // {
      //   "n": "Newry and Armagh",
      //   "q": -15,
      //   "r": 11
      // },
      // {
      //   "n": "North Antrim",
      //   "q": -15,
      //   "r": 15
      // },
      // {
      //   "n": "North Down",
      //   "q": -13,
      //   "r": 14
      // },
      // {
      //   "n": "South Antrim",
      //   "q": -15,
      //   "r": 14
      // },
      // {
      //   "n": "South Down",
      //   "q": -13,
      //   "r": 12
      // },
      // {
      //   "n": "Strangford",
      //   "q": -13,
      //   "r": 13
      // },
      // {
      //   "n": "Upper Bann",
      //   "q": -16,
      //   "r": 12
      // },
      // {
      //   "n": "West Tyrone",
      //   "q": -17,
      //   "r": 14
      // },
      // {
      //   "n": "Aberdeen North",
      //   "q": -4,
      //   "r": 25
      // },
      // {
      //   "n": "Aberdeen South",
      //   "q": -3,
      //   "r": 24
      // },
      // {
      //   "n": "Airdrie and Shotts",
      //   "q": -7,
      //   "r": 20
      // },
      // {
      //   "n": "Angus",
      //   "q": -5,
      //   "r": 23
      // },
      // {
      //   "n": "Argyll and Bute",
      //   "q": -8,
      //   "r": 23
      // },
      // {
      //   "n": "Ayr, Carrick and Cumnock",
      //   "q": -8,
      //   "r": 16
      // },
      // {
      //   "n": "Banff and Buchan",
      //   "q": -5,
      //   "r": 24
      // },
      // {
      //   "n": "Berwickshire, Roxburgh and Selkirk",
      //   "q": -5,
      //   "r": 17
      // },
      // {
      //   "n": "Caithness, Sutherland and Easter Ross",
      //   "q": -6,
      //   "r": 26
      // },
      // {
      //   "n": "Central Ayrshire",
      //   "q": -10,
      //   "r": 17
      // },
      // {
      //   "n": "Coatbridge, Chryston and Bellshill",
      //   "q": -8,
      //   "r": 20
      // },
      // {
      //   "n": "Cumbernauld, Kilsyth and Kirkintilloch East",
      //   "q": -8,
      //   "r": 21
      // },
      // {
      //   "n": "Dumfries and Galloway",
      //   "q": -6,
      //   "r": 16
      // },
      // {
      //   "n": "Dumfriesshire, Clydesdale and Tweeddale",
      //   "q": -5,
      //   "r": 16
      // },
      // {
      //   "n": "Dundee East",
      //   "q": -5,
      //   "r": 22
      // },
      // {
      //   "n": "Dundee West",
      //   "q": -6,
      //   "r": 23
      // },
      // {
      //   "n": "Dunfermline and West Fife",
      //   "q": -6,
      //   "r": 21
      // },
      // {
      //   "n": "East Dunbartonshire",
      //   "q": -8,
      //   "r": 22
      // },
      // {
      //   "n": "East Kilbride, Strathaven and Lesmahagow",
      //   "q": -8,
      //   "r": 17
      // },
      // {
      //   "n": "East Lothian",
      //   "q": -4,
      //   "r": 18
      // },
      // {
      //   "n": "East Renfrewshire",
      //   "q": -10,
      //   "r": 18
      // },
      // {
      //   "n": "Edinburgh East",
      //   "q": -5,
      //   "r": 19
      // },
      // {
      //   "n": "Edinburgh North and Leith",
      //   "q": -6,
      //   "r": 19
      // },
      // {
      //   "n": "Edinburgh South",
      //   "q": -5,
      //   "r": 18
      // },
      // {
      //   "n": "Edinburgh South West",
      //   "q": -6,
      //   "r": 18
      // },
      // {
      //   "n": "Edinburgh West",
      //   "q": -7,
      //   "r": 19
      // },
      // {
      //   "n": "Na h-Eileanan an Iar",
      //   "q": -8,
      //   "r": 26
      // },
      // {
      //   "n": "Falkirk",
      //   "q": -7,
      //   "r": 21
      // },
      // {
      //   "n": "Glasgow Central",
      //   "q": -9,
      //   "r": 19
      // },
      // {
      //   "n": "Glasgow East",
      //   "q": -8,
      //   "r": 18
      // },
      // {
      //   "n": "Glasgow North",
      //   "q": -9,
      //   "r": 20
      // },
      // {
      //   "n": "Glasgow North East",
      //   "q": -9,
      //   "r": 21
      // },
      // {
      //   "n": "Glasgow North West",
      //   "q": -10,
      //   "r": 21
      // },
      // {
      //   "n": "Glasgow South",
      //   "q": -9,
      //   "r": 18
      // },
      // {
      //   "n": "Glasgow South West",
      //   "q": -10,
      //   "r": 19
      // },
      // {
      //   "n": "Glenrothes",
      //   "q": -4,
      //   "r": 22
      // },
      // {
      //   "n": "Gordon",
      //   "q": -5,
      //   "r": 25
      // },
      // {
      //   "n": "Inverclyde",
      //   "q": -11,
      //   "r": 21
      // },
      // {
      //   "n": "Inverness, Nairn, Badenoch and Strathspey",
      //   "q": -7,
      //   "r": 25
      // },
      // {
      //   "n": "Kilmarnock and Loudoun",
      //   "q": -7,
      //   "r": 16
      // },
      // {
      //   "n": "Kirkcaldy and Cowdenbeath",
      //   "q": -5,
      //   "r": 21
      // },
      // {
      //   "n": "Lanark and Hamilton East",
      //   "q": -7,
      //   "r": 17
      // },
      // {
      //   "n": "Linlithgow and East Falkirk",
      //   "q": -6,
      //   "r": 20
      // },
      // {
      //   "n": "Livingston",
      //   "q": -7,
      //   "r": 18
      // },
      // {
      //   "n": "Midlothian",
      //   "q": -6,
      //   "r": 17
      // },
      // {
      //   "n": "Moray",
      //   "q": -6,
      //   "r": 24
      // },
      // {
      //   "n": "Motherwell and Wishaw",
      //   "q": -8,
      //   "r": 19
      // },
      // {
      //   "n": "North Ayrshire and Arran",
      //   "q": -11,
      //   "r": 18
      // },
      // {
      //   "n": "North East Fife",
      //   "q": -4,
      //   "r": 23
      // },
      // {
      //   "n": "Ochil and South Perthshire",
      //   "q": -6,
      //   "r": 22
      // },
      // {
      //   "n": "Orkney and Shetland",
      //   "q": -5,
      //   "r": 28
      // },
      // {
      //   "n": "Paisley and Renfrewshire North",
      //   "q": -10,
      //   "r": 20
      // },
      // {
      //   "n": "Paisley and Renfrewshire South",
      //   "q": -11,
      //   "r": 19
      // },
      // {
      //   "n": "Perth and North Perthshire",
      //   "q": -7,
      //   "r": 23
      // },
      // {
      //   "n": "Ross, Skye and Lochaber",
      //   "q": -7,
      //   "r": 24
      // },
      // {
      //   "n": "Rutherglen and Hamilton West",
      //   "q": -9,
      //   "r": 17
      // },
      // {
      //   "n": "Stirling",
      //   "q": -7,
      //   "r": 22
      // },
      // {
      //   "n": "West Aberdeenshire and Kincardine",
      //   "q": -4,
      //   "r": 24
      // },
      // {
      //   "n": "West Dunbartonshire",
      //   "q": -9,
      //   "r": 22
      // },
      // {
      //   "n": "Ynys Môn",
      //   "q": -14,
      //   "r": 1
      // },
      // {
      //   "n": "Delyn",
      //   "q": -11,
      //   "r": 1
      // },
      // {
      //   "n": "Alyn and Deeside",
      //   "q": -10,
      //   "r": 1
      // },
      // {
      //   "n": "Wrexham",
      //   "q": -9,
      //   "r": 0
      // },
      // {
      //   "n": "Llanelli",
      //   "q": -14,
      //   "r": -8
      // },
      // {
      //   "n": "Gower",
      //   "q": -14,
      //   "r": -9
      // },
      // {
      //   "n": "Swansea West",
      //   "q": -13,
      //   "r": -8
      // },
      // {
      //   "n": "Swansea East",
      //   "q": -13,
      //   "r": -7
      // },
      // {
      //   "n": "Aberavon",
      //   "q": -12,
      //   "r": -8
      // },
      // {
      //   "n": "Cardiff Central",
      //   "q": -9,
      //   "r": -8
      // },
      // {
      //   "n": "Cardiff North",
      //   "q": -10,
      //   "r": -7
      // },
      // {
      //   "n": "Rhondda",
      //   "q": -11,
      //   "r": -6
      // },
      // {
      //   "n": "Torfaen",
      //   "q": -9,
      //   "r": -5
      // },
      // {
      //   "n": "Monmouth",
      //   "q": -8,
      //   "r": -5
      // },
      // {
      //   "n": "Newport East",
      //   "q": -8,
      //   "r": -6
      // },
      // {
      //   "n": "Newport West",
      //   "q": -9,
      //   "r": -7
      // },
      // {
      //   "n": "Arfon",
      //   "q": -13,
      //   "r": -1
      // },
      // {
      //   "n": "Aberconwy",
      //   "q": -12,
      //   "r": 0
      // },
      // {
      //   "n": "Clwyd West",
      //   "q": -11,
      //   "r": 0
      // },
      // {
      //   "n": "Vale of Clwyd",
      //   "q": -10,
      //   "r": 0
      // },
      // {
      //   "n": "Dwyfor Meirionnydd",
      //   "q": -12,
      //   "r": -1
      // },
      // {
      //   "n": "Clwyd South",
      //   "q": -10,
      //   "r": -1
      // },
      // {
      //   "n": "Montgomeryshire",
      //   "q": -11,
      //   "r": -1
      // },
      // {
      //   "n": "Ceredigion",
      //   "q": -12,
      //   "r": -6
      // },
      // {
      //   "n": "Preseli Pembrokeshire",
      //   "q": -15,
      //   "r": -7
      // },
      // {
      //   "n": "Carmarthen West and South Pembrokeshire",
      //   "q": -15,
      //   "r": -8
      // },
      // {
      //   "n": "Carmarthen East and Dinefwr",
      //   "q": -14,
      //   "r": -7
      // },
      // {
      //   "n": "Brecon and Radnorshire",
      //   "q": -9,
      //   "r": -2
      // },
      // {
      //   "n": "Neath",
      //   "q": -12,
      //   "r": -7
      // },
      // {
      //   "n": "Cynon Valley",
      //   "q": -10,
      //   "r": -5
      // },
      // {
      //   "n": "Merthyr Tydfil and Rhymney",
      //   "q": -9,
      //   "r": -4
      // },
      // {
      //   "n": "Blaenau Gwent",
      //   "q": -9,
      //   "r": -3
      // },
      // {
      //   "n": "Bridgend",
      //   "q": -12,
      //   "r": -9
      // },
      // {
      //   "n": "Ogmore",
      //   "q": -11,
      //   "r": -8
      // },
      // {
      //   "n": "Pontypridd",
      //   "q": -11,
      //   "r": -7
      // },
      // {
      //   "n": "Caerphilly",
      //   "q": -10,
      //   "r": -6
      // },
      // {
      //   "n": "Islwyn",
      //   "q": -9,
      //   "r": -6
      // },
      // {
      //   "n": "Vale of Glamorgan",
      //   "q": -11,
      //   "r": -9
      // },
      // {
      //   "n": "Cardiff West",
      //   "q": -10,
      //   "r": -8
      // },
      // {
      //   "n": "Cardiff South and Penarth",
      //   "q": -10,
      //   "r": -9
      // }
    
  ]

    export default hexes