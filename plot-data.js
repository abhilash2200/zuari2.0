const plotData = [
    { id: "185", x: 21, y: 23, w: 2.2, h: 4, facing: "East", SBA: "998", plot_type: "Corner", corner_type: "Footpath - North-East", road_size: "", view: "Amenities - Garden", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "184", x: 21, y: 25.6, w: 2.2, h: 4, facing: "East", SBA: "1,495", plot_type: "Intermediate", corner_type: "", road_size: "", view: "Amenities", PLU_Type: "Super Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "183", x: 21, y: 29.2, w: 2.2, h: 4, facing: "East", SBA: "1,495", plot_type: "Intermediate", corner_type: "", road_size: "", view: "Amenities", PLU_Type: "Super Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "182", x: 21, y: 32.8, w: 2.2, h: 4, facing: "East", SBA: "1,495", plot_type: "Intermediate", corner_type: "", road_size: "", view: "Amenities", PLU_Type: "Super Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "181", x: 21, y: 36.8, w: 2.2, h: 4, facing: "East", SBA: "1,501", plot_type: "Corner", corner_type: "South-East", road_size: "15M", view: "Amenities", PLU_Type: "Exclusive", PLU_Rate_Sqft: "600", is_booked: false },
    { id: "186", x: 25, y: 22.5, w: 2.2, h: 4, facing: "West", SBA: "1,190", plot_type: "Corner", corner_type: "Footpath - North-West", road_size: "", view: "Garden", PLU_Type: "Super Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "187", x: 25, y: 25.6, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "188", x: 25, y: 29.2, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "189", x: 25, y: 32.8, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "190", x: 25, y: 36.8, w: 2.2, h: 4, facing: "West", SBA: "1,217", plot_type: "Corner", corner_type: "South-West", road_size: "15M", view: "", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "195", x: 27.5, y: 22, w: 2.2, h: 4, facing: "East", SBA: "1,782", plot_type: "Corner", corner_type: "Footpath - North-East", road_size: "", view: "Garden", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "194", x: 27.5, y: 25.6, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "193", x: 27.5, y: 29.2, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "192", x: 27.5, y: 32.8, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "191", x: 27.5, y: 36.8, w: 2.2, h: 4, facing: "East", SBA: "1,531", plot_type: "Corner", corner_type: "South-East", road_size: "15M", view: "", PLU_Type: "Exclusive", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "196", x: 31.5, y: 22, w: 2.2, h: 4, facing: "West", SBA: "1,815", plot_type: "Corner", corner_type: "Footpath - North-West", road_size: "", view: "Garden", PLU_Type: "Super Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "197", x: 31.5, y: 25.6, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "198", x: 31.5, y: 29.2, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "199", x: 31.5, y: 32.8, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "200", x: 31.5, y: 36.8, w: 2.2, h: 4, facing: "West", SBA: "1,238", plot_type: "Corner", corner_type: "South-West", road_size: "15M", view: "", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "206", x: 34.2, y: 19, w: 2.2, h: 4, facing: "East", SBA: "1,064", plot_type: "Corner", corner_type: "Footpath - North-East", road_size: "", view: "Garden", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "205", x: 34.2, y: 22.6, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "204", x: 34.2, y: 26.2, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "203", x: 34.2, y: 29.8, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "202", x: 34.2, y: 33.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "201", x: 34.2, y: 36.8, w: 2.2, h: 4, facing: "East", SBA: "1,558", plot_type: "Corner", corner_type: "South-East", road_size: "15M", view: "", PLU_Type: "Exclusive", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "207", x: 38.2, y: 19, w: 2.2, h: 4, facing: "West", SBA: "1,193", plot_type: "Corner", corner_type: "Footpath - North-West", road_size: "", view: "Garden", PLU_Type: "Super Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "208", x: 38.2, y: 22.6, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "209", x: 38.2, y: 26.2, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "210", x: 38.2, y: 29.8, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "211", x: 38.2, y: 32.8, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "212", x: 38.2, y: 36.8, w: 2.2, h: 4, facing: "West", SBA: "1,260", plot_type: "Corner", corner_type: "South-West", road_size: "15M", view: "", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "218", x: 40.7, y: 19, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "217", x: 40.7, y: 22.6, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "216", x: 40.7, y: 26.2, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "215", x: 40.7, y: 29.8, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "214", x: 40.7, y: 32.8, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "213", x: 40.7, y: 36.8, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "219", x: 45.5, y: 16, w: 2.2, h: 4, facing: "West", SBA: "845", plot_type: "Corner", corner_type: "Footpath - North-West", road_size: "12M", view: "Garden", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "220", x: 45.5, y: 19.6, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "221", x: 45.5, y: 22.2, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "222", x: 45.5, y: 25.8, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "223", x: 45.5, y: 29.2, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "224", x: 45.5, y: 32.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "225", x: 45.5, y: 36.8, w: 2.2, h: 4, facing: "West", SBA: "1,283", plot_type: "Corner", corner_type: "South-West", road_size: "15M", view: "", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "232", x: 47.5, y: 16, w: 2.2, h: 4, facing: "East", SBA: "845", plot_type: "Corner", corner_type: "Footpath - North-East", road_size: "", view: "Garden", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "231", x: 47.5, y: 19.6, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "230", x: 47.5, y: 22.2, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "229", x: 47.5, y: 25.8, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "228", x: 47.5, y: 29.2, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "227", x: 47.5, y: 32.8, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "226", x: 47.5, y: 36.8, w: 2.2, h: 4, facing: "East", SBA: "1,290", plot_type: "Corner", corner_type: "South-East", road_size: "15M", view: "", PLU_Type: "Exclusive", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "233", x: 51.5, y: 16.2, w: 2.2, h: 4, facing: "West", SBA: "845", plot_type: "Corner", corner_type: "Footpath - North-West", road_size: "", view: "Garden", PLU_Type: "Super Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "234", x: 51.5, y: 19.8, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "235", x: 51.5, y: 23.2, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "236", x: 51.5, y: 26.2, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "237", x: 51.5, y: 29.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "238", x: 51.5, y: 33.2, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "239", x: 51.5, y: 36.9, w: 2.2, h: 4, facing: "West", SBA: "1,303", plot_type: "Corner", corner_type: "South-West", road_size: "15M", view: "", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "246", x: 54, y: 16, w: 2.2, h: 4, facing: "East", SBA: "1,056", plot_type: "Corner", corner_type: "Footpath - North-East", road_size: "", view: "Garden", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "245", x: 54, y: 19.6, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "244", x: 54, y: 22.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "243", x: 54, y: 26.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "242", x: 54, y: 29.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "Clubhouse", PLU_Type: "Super Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "241", x: 54, y: 33.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "Clubhouse", PLU_Type: "Super Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "240", x: 54, y: 37.1, w: 2.2, h: 4, facing: "East", SBA: "1,639", plot_type: "Corner", corner_type: "South-East", road_size: "15M", view: "Clubhouse", PLU_Type: "Exclusive", PLU_Rate_Sqft: "600", is_booked: false },
    { id: "247", x: 58.5, y: 16, w: 2.2, h: 4, facing: "West", SBA: "1,054", plot_type: "Corner", corner_type: "Footpath - North-West", road_size: "", view: "Garden", PLU_Type: "Super Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "248", x: 58.5, y: 19.6, w: 2.2, h: 4, facing: "West", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "Garden", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "249", x: 58.5, y: 23.5, w: 2.2, h: 4, facing: "West", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "Garden", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "250", x: 58.5, y: 26.8, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false, status: "Not For Sale" },
    { id: "251", x: 58.5, y: 29.8, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false, status: "Not For Sale" },
    { id: "180", x: 7.5, y: 45.5, w: 2.2, h: 4, facing: "East", SBA: "1,683", plot_type: "Corner", corner_type: "North-East", road_size: "15M", view: "Amenities", PLU_Type: "Exclusive", PLU_Rate_Sqft: "600", is_booked: false },
    { id: "179", x: 7.5, y: 49.9, w: 2.2, h: 4, facing: "East", SBA: "1,262", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "178", x: 7.2, y: 53.3, w: 2.2, h: 4, facing: "East", SBA: "1,301", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "177", x: 7.2, y: 56.7, w: 2.2, h: 4, facing: "East", SBA: "1,339", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "176", x: 7.2, y: 60.1, w: 2.2, h: 4, facing: "East", SBA: "1,377", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "175", x: 7.2, y: 63.5, w: 2.2, h: 4, facing: "East", SBA: "1,416", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "174", x: 7.2, y: 66.9, w: 2.2, h: 4, facing: "East", SBA: "1,454", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "173", x: 7.5, y: 70.3, w: 2.2, h: 4, facing: "East", SBA: "1,492", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "172", x: 7.5, y: 74.7, w: 2.2, h: 4, facing: "East", SBA: "1,722", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "163", x: 11.2, y: 45.5, w: 2.2, h: 4, facing: "West", SBA: "1,646", plot_type: "Corner", corner_type: "North-West", road_size: "15M", view: "Amenities", PLU_Type: "Exclusive", PLU_Rate_Sqft: "600", is_booked: false },
    { id: "164", x: 11.2, y: 49.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "165", x: 11.2, y: 53.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "166", x: 11.2, y: 56.7, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "167", x: 11.2, y: 60.1, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "168", x: 11.2, y: 63.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "169", x: 11.2, y: 66.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "170", x: 11.2, y: 70.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "171", x: 11.2, y: 74.7, w: 2.2, h: 4, facing: "West", SBA: "1,360", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "162", x: 14.1, y: 45.5, w: 2.2, h: 4, facing: "East", SBA: "2,048", plot_type: "Corner", corner_type: "North-East", road_size: "15M", view: "Amenities", PLU_Type: "Exclusive", PLU_Rate_Sqft: "600", is_booked: false },
    { id: "161", x: 14.1, y: 49.9, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "160", x: 14.1, y: 53.3, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "159", x: 14.1, y: 56.7, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "158", x: 14.1, y: 60.1, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "157", x: 14.1, y: 63.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "156", x: 14.1, y: 66.9, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "155", x: 14.1, y: 70.3, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "154", x: 14.1, y: 74.7, w: 2.2, h: 4, facing: "East", SBA: "1,710", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "145", x: 18, y: 45.5, w: 2.2, h: 4, facing: "West", SBA: "1,625", plot_type: "Corner", corner_type: "North-West", road_size: "15M", view: "Amenities", PLU_Type: "Exclusive", PLU_Rate_Sqft: "600", is_booked: false },
    { id: "146", x: 18, y: 49.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "147", x: 18, y: 53.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "148", x: 18, y: 56.7, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "149", x: 18, y: 60.1, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "150", x: 18, y: 63.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "151", x: 18, y: 66.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "152", x: 18, y: 70.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "153", x: 18, y: 74.7, w: 2.2, h: 4, facing: "West", SBA: "1,380", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "144", x: 20.7, y: 46.0, w: 2.2, h: 4, facing: "East", SBA: "2,021", plot_type: "Corner", corner_type: "North-East", road_size: "15M", view: "", PLU_Type: "Exclusive", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "143", x: 20.7, y: 49.9, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "142", x: 20.7, y: 53.3, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "141", x: 20.7, y: 56.7, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "140", x: 20.7, y: 60.1, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "139", x: 20.7, y: 63.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "138", x: 20.7, y: 66.9, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "137", x: 20.7, y: 70.8, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "136", x: 20.7, y: 74.7, w: 2.2, h: 4, facing: "East", SBA: "1,735", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "127", x: 24.5, y: 46.3, w: 2.2, h: 4, facing: "West", SBA: "1,603", plot_type: "Corner", corner_type: "North-West", road_size: "15M", view: "", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "128", x: 24.5, y: 49.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "129", x: 24.5, y: 53.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "130", x: 24.5, y: 56.7, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "131", x: 24.5, y: 60.1, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "132", x: 24.5, y: 63.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "133", x: 24.5, y: 66.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "134", x: 24.5, y: 70.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "135", x: 24.5, y: 74.7, w: 2.2, h: 4, facing: "West", SBA: "1,400", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "126", x: 27.5, y: 46.5, w: 2.2, h: 4, facing: "East", SBA: "1,994", plot_type: "Corner", corner_type: "North-East", road_size: "15M", view: "", PLU_Type: "Exclusive", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "125", x: 27.5, y: 49.9, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "124", x: 27.5, y: 53.3, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "123", x: 27.5, y: 56.7, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "122", x: 27.5, y: 60.1, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "121", x: 27.5, y: 63.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "120", x: 27.5, y: 66.9, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "119", x: 27.5, y: 70.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "118", x: 27.5, y: 74.7, w: 2.2, h: 4, facing: "East", SBA: "1,760", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "109", x: 31.2, y: 46.5, w: 2.2, h: 4, facing: "West", SBA: "1,582", plot_type: "Corner", corner_type: "North-West", road_size: "15M", view: "", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "110", x: 31.2, y: 49.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "111", x: 31.2, y: 53.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "112", x: 31.2, y: 56.7, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "113", x: 31.2, y: 60.1, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "114", x: 31.2, y: 63.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "115", x: 31.2, y: 67.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "116", x: 31.2, y: 71.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "117", x: 31.2, y: 74.7, w: 2.2, h: 4, facing: "West", SBA: "1,420", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "108", x: 34.2, y: 46.5, w: 2.2, h: 4, facing: "East", SBA: "1,967", plot_type: "Corner", corner_type: "North-East", road_size: "15M", view: "", PLU_Type: "Exclusive", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "107", x: 34.2, y: 49.9, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "106", x: 34.2, y: 53.3, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "105", x: 34.2, y: 56.7, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "104", x: 34.2, y: 60.1, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "103", x: 34.2, y: 63.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "102", x: 34.2, y: 67.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "101", x: 34.2, y: 71.3, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "100", x: 34.2, y: 74.7, w: 2.2, h: 4, facing: "East", SBA: "1,785", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "91", x: 38, y: 46.5, w: 2.2, h: 4, facing: "West", SBA: "1,560", plot_type: "Corner", corner_type: "North-West", road_size: "15M", view: "", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "92", x: 38, y: 50.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "93", x: 38, y: 54.0, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "94", x: 38, y: 57.7, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "95", x: 38, y: 61.1, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "96", x: 38, y: 64.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "97", x: 38, y: 67.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "98", x: 38, y: 71.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "99", x: 38, y: 75.3, w: 2.2, h: 4, facing: "West", SBA: "1,441", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "90", x: 40.5, y: 46.5, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "89", x: 40.5, y: 49.9, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "88", x: 40.5, y: 54.3, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "87", x: 40.5, y: 57.7, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "86", x: 40.5, y: 61.1, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "85", x: 40.5, y: 64.5, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "84", x: 40.5, y: 67.9, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "83", x: 40.5, y: 71.3, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },
    { id: "82", x: 40.5, y: 74.7, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: true },

    { id: "73", x: 45.3, y: 46.5, w: 2.2, h: 4, facing: "West", SBA: "1,537", plot_type: "Corner", corner_type: "North-West", road_size: "15M", view: "", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "74", x: 45.3, y: 50.1, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "75", x: 45.3, y: 53.8, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "76", x: 45.2, y: 56.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "77", x: 45.2, y: 61.1, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "78", x: 45.2, y: 64.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "79", x: 45.2, y: 67.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "80", x: 45.2, y: 71.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "81", x: 45.2, y: 74.7, w: 2.2, h: 4, facing: "West", SBA: "1,463", plot_type: "Intermediate", corner_type: "", road_size: "12M", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "72", x: 47.5, y: 46.5, w: 2.2, h: 4, facing: "East", SBA: "1,530", plot_type: "Corner", corner_type: "North-East", road_size: "15M", view: "", PLU_Type: "Exclusive", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "71", x: 47.5, y: 50.3, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "70", x: 47.5, y: 53.7, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "69", x: 47.5, y: 57.3, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "68", x: 47.5, y: 60.7, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "67", x: 47.5, y: 64.1, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "66", x: 47.5, y: 67.5, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "65", x: 47.5, y: 71.3, w: 2.2, h: 4, facing: "East", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "64", x: 47.5, y: 75.5, w: 2.2, h: 4, facing: "East", SBA: "1,469", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "55", x: 51.5, y: 46.5, w: 2.2, h: 4, facing: "West", SBA: "1,517", plot_type: "Corner", corner_type: "North-West", road_size: "15M", view: "", PLU_Type: "Ultra Premium", PLU_Rate_Sqft: "400", is_booked: false },
    { id: "56", x: 51.5, y: 50.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "57", x: 51.5, y: 53.8, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "58", x: 51.5, y: 57.7, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "59", x: 51.5, y: 61.1, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "60", x: 51.5, y: 64.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "61", x: 51.5, y: 67.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "62", x: 51.5, y: 71.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "63", x: 51.5, y: 75.7, w: 2.2, h: 4, facing: "West", SBA: "1,481", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "54", x: 54, y: 46.5, w: 2.2, h: 4, facing: "East", SBA: "1,887", plot_type: "Corner", corner_type: "North-East", road_size: "15M", view: "Clubhouse", PLU_Type: "Exclusive", PLU_Rate_Sqft: "600", is_booked: false },
    { id: "53", x: 54, y: 50.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "52", x: 54, y: 54.2, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "51", x: 54, y: 57.7, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "50", x: 54, y: 61.1, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "49", x: 54, y: 64.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "48", x: 54, y: 67.9, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "47", x: 54, y: 71.3, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "46", x: 54, y: 75.7, w: 2.2, h: 4, facing: "East", SBA: "1,861", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "37", x: 58, y: 46.5, w: 2.2, h: 4, facing: "West", SBA: "1,496", plot_type: "Corner", corner_type: "North-West", road_size: "15M", view: "Clubhouse", PLU_Type: "Exclusive", PLU_Rate_Sqft: "600", is_booked: false },
    { id: "38", x: 58, y: 50.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "39", x: 58, y: 53.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "40", x: 58, y: 57.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "41", x: 58, y: 61.1, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "42", x: 58, y: 64.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "43", x: 58, y: 67.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "44", x: 58, y: 71.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "45", x: 58, y: 75.7, w: 2.2, h: 4, facing: "West", SBA: "1,501", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "36", x: 61, y: 46.5, w: 2.2, h: 4, facing: "East", SBA: "1,860", plot_type: "Corner", corner_type: "North-East", road_size: "15M", view: "Clubhouse", PLU_Type: "Exclusive", PLU_Rate_Sqft: "600", is_booked: false },

    { id: "35", x: 61, y: 50.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "34", x: 61, y: 54.3, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "33", x: 61, y: 57.7, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "32", x: 61, y: 61.1, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "31", x: 61, y: 64.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "30", x: 61, y: 67.9, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "29", x: 61, y: 71.3, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "28", x: 61, y: 75.7, w: 2.2, h: 4, facing: "East", SBA: "1,886", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "19", x: 64.5, y: 47.5, w: 2.2, h: 4, facing: "West", SBA: "1,474", plot_type: "Corner", corner_type: "North-West", road_size: "15M", view: "Garden", PLU_Type: "Exclusive", PLU_Rate_Sqft: "600", is_booked: false },
    { id: "20", x: 64.5, y: 50.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "21", x: 64.5, y: 54.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "22", x: 64.5, y: 57.7, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "23", x: 64.5, y: 61.1, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "24", x: 64.5, y: 64.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "25", x: 64.5, y: 67.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "26", x: 64.5, y: 71.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "27", x: 64.5, y: 74.7, w: 2.2, h: 4, facing: "West", SBA: "1,522", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "18", x: 67.5, y: 47.2, w: 2.2, h: 4, facing: "East", SBA: "1,833", plot_type: "Corner", corner_type: "North-East", road_size: "15M", view: "Garden", PLU_Type: "Exclusive", PLU_Rate_Sqft: "600", is_booked: false },

    { id: "17", x: 67.5, y: 50.9, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "16", x: 67.5, y: 54.3, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "15", x: 67.5, y: 57.7, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "14", x: 67.5, y: 61.1, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "13", x: 67.5, y: 64.5, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "12", x: 67.5, y: 67.9, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "11", x: 67.5, y: 71.3, w: 2.2, h: 4, facing: "East", SBA: "1,499", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },
    { id: "10", x: 67.5, y: 74.7, w: 2.2, h: 4, facing: "East", SBA: "1,917", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Premium", PLU_Rate_Sqft: "200", is_booked: false },

    { id: "1", x: 71.5, y: 47.2, w: 2.2, h: 4, facing: "West", SBA: "1,189", plot_type: "Corner", corner_type: "North-West", road_size: "15M", view: "", PLU_Type: "Super Premium", PLU_Rate_Sqft: "300", is_booked: false },
    { id: "2", x: 71.5, y: 50.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "3", x: 71.5, y: 54.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "4", x: 71.5, y: 57.7, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "5", x: 71.5, y: 61.1, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "6", x: 71.5, y: 64.5, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "7", x: 71.5, y: 67.9, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "8", x: 71.5, y: 72.3, w: 2.2, h: 4, facing: "West", SBA: "1,199", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },
    { id: "9", x: 71.5, y: 75.7, w: 2.2, h: 4, facing: "West", SBA: "1,589", plot_type: "Intermediate", corner_type: "", road_size: "", view: "", PLU_Type: "Classic", PLU_Rate_Sqft: "0", is_booked: false },

    { id: "H", x: 58, y: 34, w: 4, h: 5, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/infrastructure-2.webp", plotname: "Club House", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "H", x: 62, y: 25, w: 4, h: 5, facing: "", SBA: "", plot_type: "IMG", img: "assets/play-zone/Football-turf.webp", plotname: "Mini Football Turf", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "J", x: 62.0, y: 14, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/play-zone/Pickleball.webp", plotname: "Pickleball", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "L", x: 63.5, y: 5, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/play-3.webp", plotname: "Rock Climbing", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "K", x: 61.5, y: 9, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/play-5.webp", plotname: "Half Cricket Turf", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "S", x: 49, y: 11, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/play-1.webp", plotname: "Obstacle Course", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "R", x: 56, y: 12, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/play-4 (1).webp", plotname: "Basketball Court", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "Q", x: 62, y: 5, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/play-2.webp", plotname: "Archery Range", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },

    { id: "Q", x: 41, y: 13, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/wellness-8.webp", plotname: "Miyawaki Forest", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "R", x: 38, y: 13, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/wellness-7.webp", plotname: "Open Air Gym", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "Q", x: 35, y: 14, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/wellness-8.webp", plotname: "Miyawaki Forest", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "Q", x: 32.5, y: 14, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/Senior-citizen2.webp", plotname: "Senior Citizen Sit Out", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "T", x: 27, y: 16, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/wellness-1.webp", plotname: "Yoga Deck", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "Q", x: 30, y: 16, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/wellness-8.webp", plotname: "Miyawaki Forest", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "Q", x: 24, y: 16.5, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/wellness-8.webp", plotname: "Miyawaki Forest", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "Q", x: 22, y: 16.5, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/kid-plays.webp", plotname: "Kids Play Area", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
    { id: "Q", x: 20, y: 17.5, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "IMG", img: "assets/zuari-gallry/wellness-2.webp", plotname: "Pet Park", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },
];

const PLOT_DEBUG_MODE = false; // Set to true to show plot boxes and numbers, false for invisible interactive hotspots

document.addEventListener('DOMContentLoaded', function () {
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
            const pType = plot.PLU_Type || plot.type;
            if (pType === 'Exclusive' || pType === 'Ultra Premium') bgClass = 'bg-blue-500/40 border-blue-500/60';
            else if (pType === 'Premium') bgClass = 'bg-orange-500/40 border-orange-500/60';
            else if (pType === 'Super Premium') bgClass = 'bg-purple-500/40 border-purple-500/60';

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
        const pType = plot.PLU_Type || plot.type || 'Standard';
        if (pType === 'Premium') typeBg = 'bg-yellow-100 text-yellow-900';
        else if (pType === 'Super Premium') typeBg = 'bg-slate-600 text-white';
        else if (pType === 'Exclusive' || pType === 'Ultra Premium') typeBg = 'bg-orange-300 text-orange-900';
        else if (pType === 'Classic') typeBg = 'bg-[#c3c3c3] text-black';

        let statusBadge = '';
        if (plot.plot_type !== 'IMG') {
            if (plot.is_booked) {
                statusBadge = `<span class="bg-red-600/20 text-red-400 px-2 py-0.5 rounded text-xs border border-red-500/30">Blocked</span>`;
            } else if (plot.status === 'Sold Out') {
                statusBadge = `<span class="bg-green-600/20 text-green-400 px-2 py-0.5 rounded text-xs border border-green-500/30">Sold Out</span>`;
            } else if (plot.status === 'Not For Sale') {
                statusBadge = `<span class="bg-gray-600/20 text-gray-400 px-2 py-0.5 rounded text-xs border border-gray-500/30">Not For Sale</span>`;
            } else {
                statusBadge = `<span class="bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded text-xs border border-blue-500/30">Available</span>`;
            }
        }

        const details = [
            { label: 'SBA', value: (plot.SBA || plot.size) ? `${plot.SBA || plot.size} sq.ft` : null },
            { label: 'Plot Facing', value: plot.facing },
            { label: 'Plot Type', value: plot.plot_type },
            { label: 'Corner Type', value: plot.corner_type },
            { label: 'Road Size', value: plot.road_size },
            { label: 'View', value: plot.view },
            { label: 'PLU Type', value: plot.PLU_Type },
        ].filter(d => d.value && d.value !== '-' && d.value.toString().trim() !== '');

        const detailsHtml = details.map(d => `
            <div class="flex justify-between text-sm gap-4">
                <span class="text-gray-400">${d.label}:</span>
                <span class="font-medium text-white text-right">${d.value}</span>
            </div>
        `).join('');

        if (plot.plot_type === 'IMG' || plot.plot_type === 'Amenity') {
            const imgSrc = plot.img || 'assets/amminities/default.webp'; // Fallback if no img provided
            tooltip.innerHTML = `
                <div class="flex flex-col items-center">
                    ${plot.plotname ? `<h4 class="text-lg font-serif text-[#ebd373] leading-none mb-2 text-center">${plot.plotname}</h4>` : ''}
                    ${plot.img ? `<img src="${plot.img}" class="w-64 h-auto object-cover rounded-md shadow-md" alt="${plot.plotname || 'Plot ' + plot.id}">` : `<span class="text-gray-400 text-xs mt-2 italic">Image: ${plot.img || 'None'}</span>`}
                </div>
            `;
        } else {
            tooltip.innerHTML = `
                <div class="flex justify-between items-start mb-2 border-b border-gray-700 pb-2 gap-4">
                    <div>
                        <h4 class="text-2xl font-serif text-[#ebd373] leading-none mb-1">Plot ${plot.id}</h4>
                        <span class="text-xs font-medium px-2 py-0.5 rounded ${typeBg}">${pType}</span>
                    </div>
                    ${statusBadge}
                </div>
                <div class="space-y-1 mt-3">
                    ${detailsHtml}
                </div>
            `;
        }

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
