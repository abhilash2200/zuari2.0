const plotData = [
    // { id: "01", x: 13.2, y: 23, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "02", x: 13.2, y: 27.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "03", x: 13.2, y: 32.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "04", x: 13.2, y: 36.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    // { id: "05", x: 16.2, y: 23, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "06", x: 16.2, y: 27.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "07", x: 16.2, y: 32.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    // { id: "08", x: 16.2, y: 36.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "185", x: 21, y: 23, w: 2.2, h: 4, facing: "East", SBA : "998", plot_type: "Corner", corner_type: "Footpath - North-East",  road_size : "",  view :"Amenities - Garden",  PLU_Type : "Super Premium" ,  PLU_Rate_Sqft  : "300"},
    { id: "184", x: 21, y: 25.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "183", x: 21, y: 29.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "182", x: 21, y: 32.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "181", x: 21, y: 36.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "186", x: 25, y: 22.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "187", x: 25, y: 25.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "188", x: 25, y: 29.2, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "189", x: 25, y: 32.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "190", x: 25, y: 36.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "195", x: 27.5, y: 22, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "194", x: 27.5, y: 25.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "193", x: 27.5, y: 29.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "192", x: 27.5, y: 32.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "191", x: 27.5, y: 36.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "196", x: 31.5, y: 22, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "197", x: 31.5, y: 25.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "198", x: 31.5, y: 29.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "199", x: 31.5, y: 32.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "200", x: 31.5, y: 36.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "206", x: 34.2, y: 19, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "205", x: 34.2, y: 22.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "204", x: 34.2, y: 26.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "203", x: 34.2, y: 29.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Sold Out" },
    { id: "202", x: 34.2, y: 33.5, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Sold Out" },
    { id: "201", x: 34.2, y: 36.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Sold Out" },
    { id: "207", x: 38.2, y: 19, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "208", x: 38.2, y: 22.6, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "209", x: 38.2, y: 26.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "210", x: 38.2, y: 29.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "211", x: 38.2, y: 32.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "212", x: 38.2, y: 36.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "218", x: 40.7, y: 19, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "217", x: 40.7, y: 22.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "216", x: 40.7, y: 26.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "215", x: 40.7, y: 29.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "214", x: 40.7, y: 32.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "213", x: 40.7, y: 36.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "219", x: 45.5, y: 16, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "220", x: 45.5, y: 19.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "221", x: 45.5, y: 22.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "222", x: 45.5, y: 25.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "223", x: 45.5, y: 29.2, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "224", x: 45.5, y: 32.9, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "225", x: 45.5, y: 36.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "232", x: 47.5, y: 16, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "231", x: 47.5, y: 19.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "230", x: 47.5, y: 22.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "229", x: 47.5, y: 25.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "228", x: 47.5, y: 29.2, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "227", x: 47.5, y: 32.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "226", x: 47.5, y: 36.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "233", x: 51.5, y: 16.2, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "234", x: 51.5, y: 19.8, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "235", x: 51.5, y: 23.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "236", x: 51.5, y: 26.2, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "237", x: 51.5, y: 29.5, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "238", x: 51.5, y: 33.2, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "239", x: 51.5, y: 36.9, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "246", x: 54, y: 16, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "245", x: 54, y: 19.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "244", x: 54, y: 22.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "243", x: 54, y: 26.5, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "242", x: 54, y: 29.5, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "241", x: 54, y: 33.5, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "240", x: 54, y: 37.1, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "247", x: 58.5, y: 16, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "248", x: 58.5, y: 19.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "249", x: 58.5, y: 23.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "250", x: 58.5, y: 26.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Sold Out" },
    { id: "251", x: 58.5, y: 29.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Sold Out" },
    // { id: "57", x: 67, y: 23, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "58", x: 67, y: 27.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "59", x: 67, y: 32.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "60", x: 67, y: 36.8, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    // { id: "61", x: 74.5, y: 23, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "62", x: 74.5, y: 27.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "63", x: 74.5, y: 32.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    // { id: "64", x: 74.5, y: 36.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    // { id: "65", x: 78.5, y: 23, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "66", x: 78.5, y: 27.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "67", x: 78.5, y: 32.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "68", x: 78.5, y: 36.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    // { id: "69", x: 82.5, y: 23, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "70", x: 82.5, y: 27.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    // { id: "71", x: 82.5, y: 32.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "72", x: 82.5, y: 36.8, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    // { id: "73", x: 85.5, y: 23, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "74", x: 85.5, y: 27.6, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    // { id: "75", x: 85.5, y: 32.2, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    // { id: "76", x: 85.5, y: 36.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "180", x: 7.5, y: 45.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "179", x: 7.5, y: 49.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "178", x: 7.2, y: 53.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "177", x: 7.2, y: 56.7, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "176", x: 7.2, y: 60.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "175", x: 7.2, y: 63.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "174", x: 7.2, y: 66.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "173", x: 7.5, y: 70.3, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Sold Out" },
    { id: "172", x: 7.5, y: 74.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "163", x: 11.2, y: 45.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "164", x: 11.2, y: 49.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "165", x: 11.2, y: 53.3, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "166", x: 11.2, y: 56.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "167", x: 11.2, y: 60.1, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "168", x: 11.2, y: 63.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "169", x: 11.2, y: 66.9, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "170", x: 11.2, y: 70.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "171", x: 11.2, y: 74.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "162", x: 14.1, y: 45.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "161", x: 14.1, y: 49.9, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "160", x: 14.1, y: 53.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "159", x: 14.1, y: 56.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "158", x: 14.1, y: 60.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "157", x: 14.1, y: 63.5, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "156", x: 14.1, y: 66.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "155", x: 14.1, y: 70.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "154", x: 14.1, y: 74.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "145", x: 18, y: 45.5, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "146", x: 18, y: 49.9, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Sold Out" },
    { id: "147", x: 18, y: 53.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "148", x: 18, y: 56.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "149", x: 18, y: 60.1, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "150", x: 18, y: 63.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "151", x: 18, y: 66.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "152", x: 18, y: 70.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "153", x: 18, y: 74.7, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Sold Out" },
    { id: "144", x: 20.7, y: 46.0, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "143", x: 20.7, y: 49.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "142", x: 20.7, y: 53.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "141", x: 20.7, y: 56.7, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "140", x: 20.7, y: 60.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "139", x: 20.7, y: 63.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "138", x: 20.7, y: 66.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "137", x: 20.7, y: 70.8, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "136", x: 20.7, y: 74.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "127", x: 24.5, y: 46.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "128", x: 24.5, y: 49.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "129", x: 24.5, y: 53.3, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "130", x: 24.5, y: 56.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "131", x: 24.5, y: 60.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "132", x: 24.5, y: 63.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "133", x: 24.5, y: 66.9, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "134", x: 24.5, y: 70.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "135", x: 24.5, y: 74.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "126", x: 27.5, y: 46.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "125", x: 27.5, y: 49.9, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "124", x: 27.5, y: 53.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "123", x: 27.5, y: 56.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "122", x: 27.5, y: 60.1, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "121", x: 27.5, y: 63.5, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "120", x: 27.5, y: 66.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "119", x: 27.5, y: 70.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "118", x: 27.5, y: 74.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "109", x: 31.2, y: 46.5, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Sold Out" },
    { id: "110", x: 31.2, y: 49.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "111", x: 31.2, y: 53.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "112", x: 31.2, y: 56.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "113", x: 31.2, y: 60.1, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "114", x: 31.2, y: 63.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "115", x: 31.2, y: 67.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "116", x: 31.2, y: 71.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "117", x: 31.2, y: 74.7, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "108", x: 34.2, y: 46.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "107", x: 34.2, y: 49.9, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "106", x: 34.2, y: 53.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "105", x: 34.2, y: 56.7, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "104", x: 34.2, y: 60.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "103", x: 34.2, y: 63.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "102", x: 34.2, y: 67.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "101", x: 34.2, y: 71.3, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "100", x: 34.2, y: 74.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "91", x: 38, y: 46.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "92", x: 38, y: 50.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "93", x: 38, y: 54.0, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "94", x: 38, y: 57.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "95", x: 38, y: 61.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "96", x: 38, y: 64.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "97", x: 38, y: 67.9, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "98", x: 38, y: 71.3, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "99", x: 38, y: 75.3, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "90", x: 40.5, y: 46.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "89", x: 40.5, y: 49.9, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Sold Out" },
    { id: "88", x: 40.5, y: 54.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "87", x: 40.5, y: 57.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "86", x: 40.5, y: 61.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "85", x: 40.5, y: 64.5, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "84", x: 40.5, y: 67.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "83", x: 40.5, y: 71.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "82", x: 40.5, y: 74.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "73", x: 45.3, y: 46.5, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "74", x: 45.3, y: 50.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "75", x: 45.3, y: 53.8, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "76", x: 45.2, y: 56.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "77", x: 45.2, y: 61.1, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "78", x: 45.2, y: 64.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "79", x: 45.2, y: 67.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "80", x: 45.2, y: 71.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "81", x: 45.2, y: 74.7, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "72", x: 47.5, y: 46.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "71", x: 47.5, y: 50.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "70", x: 47.5, y: 53.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "69", x: 47.5, y: 57.3, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "68", x: 47.5, y: 60.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "67", x: 47.5, y: 64.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "66", x: 47.5, y: 67.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "65", x: 47.5, y: 71.3, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "64", x: 47.5, y: 75.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "55", x: 51.5, y: 46.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "56", x: 51.5, y: 50.5, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "57", x: 51.5, y: 53.8, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Sold Out" },
    { id: "58", x: 51.5, y: 57.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "59", x: 51.5, y: 61.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "60", x: 51.5, y: 64.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "61", x: 51.5, y: 67.9, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "62", x: 51.5, y: 71.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "63", x: 51.5, y: 75.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "54", x: 54, y: 46.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "53", x: 54, y: 50.5, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "52", x: 54, y: 54.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "51", x: 54, y: 57.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "50", x: 54, y: 61.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "49", x: 54, y: 64.5, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "48", x: 54, y: 67.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "47", x: 54, y: 71.3, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Sold Out" },
    { id: "46", x: 54, y: 75.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "37", x: 58, y: 46.5, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "38", x: 58, y: 50.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "39", x: 58, y: 53.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "40", x: 58, y: 57.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "41", x: 58, y: 61.1, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "42", x: 58, y: 64.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "43", x: 58, y: 67.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "44", x: 58, y: 71.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "45", x: 58, y: 75.7, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "36", x: 61, y: 46.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "35", x: 61, y: 50.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "34", x: 61, y: 54.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "33", x: 61, y: 57.7, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Sold Out" },
    { id: "32", x: 61, y: 61.1, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "31", x: 61, y: 64.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "30", x: 61, y: 67.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "29", x: 61, y: 71.3, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "28", x: 61, y: 75.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "19", x: 64.5, y: 47.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "29", x: 64.5, y: 50.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "21", x: 64.5, y: 54.3, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "22", x: 64.5, y: 57.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "23", x: 64.5, y: 61.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "24", x: 64.5, y: 64.5, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "25", x: 64.5, y: 67.9, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "26", x: 64.5, y: 71.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "27", x: 64.5, y: 74.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "18", x: 67.5, y: 47.2, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "17", x: 67.5, y: 50.9, w: 2.2, h: 4, type: "Exclusive", desc: "Ultra luxury", size: "~1800", status: "Available" },
    { id: "16", x: 67.5, y: 54.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "15", x: 67.5, y: 57.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "14", x: 67.5, y: 61.1, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "13", x: 67.5, y: 64.5, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Available" },
    { id: "12", x: 67.5, y: 67.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Sold Out" },
    { id: "11", x: 67.5, y: 71.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "10", x: 67.5, y: 74.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "01", x: 71.5, y: 47.2, w: 2.2, h: 4, type: "Super Premium", desc: "Super luxury", size: "~1500", status: "Available" },
    { id: "02", x: 71.5, y: 50.9, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "03", x: 71.5, y: 54.3, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "04", x: 71.5, y: 57.7, w: 2.2, h: 4, type: "Classic", desc: "Standard", size: "<1000", status: "Available" },
    { id: "05", x: 71.5, y: 61.1, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Sold Out" },
    { id: "06", x: 71.5, y: 64.5, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Sold Out" },
    { id: "07", x: 71.5, y: 67.9, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Sold Out" },
    { id: "08", x: 71.5, y: 72.3, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Sold Out" },
    { id: "09", x: 71.5, y: 75.7, w: 2.2, h: 4, type: "Premium", desc: "Luxury", size: "~1200", status: "Sold Out" },
];

const PLOT_DEBUG_MODE = true; // Set to true to show plot boxes and numbers, false for invisible interactive hotspots

document.addEventListener('DOMContentLoaded', function() {
    const lbImg = document.getElementById('inline-plot-img');
    const hotspotsContainer = document.getElementById('inline-hotspots-container');
    if (!lbImg || !hotspotsContainer) return;

    const tooltip = document.getElementById('plot-tooltip');
    if (!tooltip) return;

    console.log(`[Plot Mapper] Initializing ${plotData.length} hotspots...`);
    plotData.forEach(plot => {
        const hotspot = document.createElement('div');
        if (PLOT_DEBUG_MODE) {
            let bgClass = 'bg-red-500/40 border-red-500/60';
            if (plot.type === 'Exclusive') bgClass = 'bg-blue-500/40 border-blue-500/60';
            else if (plot.type === 'Premium') bgClass = 'bg-orange-500/40 border-orange-500/60';
            else if (plot.type === 'Super Premium') bgClass = 'bg-purple-500/40 border-purple-500/60';
            
            hotspot.className = `absolute cursor-pointer border ${bgClass} hover:border-[#ebd373] hover:bg-[#ebd373]/60 transition-all duration-300 rounded-[2px] shadow-[0_0_10px_rgba(235,211,115,0)] hover:shadow-[0_0_15px_rgba(235,211,115,0.6)] group pointer-events-auto z-40 flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white/80 hover:text-white`;
            hotspot.innerText = plot.id;
        } else {
            hotspot.className = `absolute cursor-pointer z-40`;
        }
        hotspot.style.left = `${plot.x}%`;
        hotspot.style.top = `${plot.y}%`;
        hotspot.style.width = `${plot.w}%`;
        hotspot.style.height = `${plot.h}%`;
        
        hotspot.addEventListener('mouseenter', (e) => showTooltip(e, plot));
        hotspot.addEventListener('mousemove', moveTooltip);
        hotspot.addEventListener('mouseleave', hideTooltip);
        hotspot.addEventListener('touchstart', (e) => {
            e.preventDefault();
            showTooltip(e.touches[0], plot);
        });

        hotspotsContainer.appendChild(hotspot);
    });

    function showTooltip(e, plot) {
        let typeBg = 'bg-gray-500';
        if (plot.type === 'Premium') typeBg = 'bg-yellow-100 text-yellow-900';
        else if (plot.type === 'Super Premium') typeBg = 'bg-slate-600 text-white';
        else if (plot.type === 'Exclusive') typeBg = 'bg-orange-300 text-orange-900';
        else if (plot.type === 'Classic') typeBg = 'bg-[#c3c3c3] text-black';

        let descColor = 'text-white';
        if (plot.desc === 'Standard') descColor = 'text-blue-400';
        else if (plot.desc === 'Luxury') descColor = 'text-gray-300';
        else if (plot.desc === 'Super luxury') descColor = 'text-red-500';
        else if (plot.desc === 'Ultra luxury') descColor = 'text-fuchsia-500';

        let statusBadge = plot.status === 'Sold Out' ? `<span class="bg-green-600/20 text-green-400 px-2 py-0.5 rounded text-xs border border-green-500/30">Sold Out</span>` : `<span class="bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded text-xs border border-blue-500/30">Available</span>`;

        tooltip.innerHTML = `
            <div class="flex justify-between items-start mb-2 border-b border-gray-700 pb-2 gap-4">
                <div>
                    <h4 class="text-2xl font-serif text-[#ebd373] leading-none mb-1">Plot ${plot.id}</h4>
                    <span class="text-xs font-medium px-2 py-0.5 rounded ${typeBg}">${plot.type}</span>
                </div>
                ${statusBadge}
            </div>
            <div class="space-y-1 mt-3">
                <div class="flex justify-between text-sm gap-4">
                    <span class="text-gray-400">Category:</span>
                    <span class="font-medium ${descColor}">${plot.desc}</span>
                </div>
                <div class="flex justify-between text-sm gap-4">
                    <span class="text-gray-400">Size:</span>
                    <span class="font-medium text-white">${plot.size} sq.ft</span>
                </div>
            </div>
        `;
        
        tooltip.style.display = 'block';
        tooltip.offsetWidth; 
        tooltip.style.opacity = '1';
        moveTooltip(e);
    }

    function moveTooltip(e) {
        let x = e.clientX + 20;
        let y = e.clientY + 20;
        
        if (x + tooltip.offsetWidth > window.innerWidth) {
            x = window.innerWidth - tooltip.offsetWidth - 20;
        }
        if (y + tooltip.offsetHeight > window.innerHeight) {
            y = window.innerHeight - tooltip.offsetHeight - 20;
        }

        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
    }

    function hideTooltip() {
        tooltip.style.opacity = '0';
        setTimeout(() => {
            if (tooltip.style.opacity === '0') {
                tooltip.style.display = 'none';
            }
        }, 200);
    }

    let lastRenderWidth = 0;
    let lastRenderHeight = 0;

    function updateHotspotsOverlay() {
        const isActive = lbImg.offsetParent !== null;
        if (isActive) {
            hotspotsContainer.classList.remove('hidden');
            const naturalWidth = lbImg.naturalWidth;
            const naturalHeight = lbImg.naturalHeight;
            if (naturalWidth && naturalHeight) {
                const imgRatio = naturalWidth / naturalHeight;
                const containerWidth = lbImg.clientWidth;
                const containerHeight = lbImg.clientHeight;
                const containerRatio = containerWidth / containerHeight;
                
                let renderWidth, renderHeight;
                if (imgRatio > containerRatio) {
                    renderWidth = containerWidth;
                    renderHeight = containerWidth / imgRatio;
                } else {
                    renderHeight = containerHeight;
                    renderWidth = containerHeight * imgRatio;
                }
                
                hotspotsContainer.style.width = `${renderWidth}px`;
                hotspotsContainer.style.height = `${renderHeight}px`;
                hotspotsContainer.style.margin = 'auto';
            }
        } else {
            hotspotsContainer.classList.add('hidden');
            hideTooltip();
        }
    }

    const resizeObserver = new ResizeObserver(() => updateHotspotsOverlay());
    resizeObserver.observe(lbImg);
    lbImg.addEventListener('load', updateHotspotsOverlay);
});
