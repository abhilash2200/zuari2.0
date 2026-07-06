const plots = [
    { id: "W", x: 18, y: 18 },
    { id: "V", x: 21, y: 18 },
    { id: "U", x: 24.5, y: 18 },
    { id: "T", x: 27.5, y: 18 },
    { id: "S", x: 31, y: 18 },
    { id: "R", x: 34, y: 18 },
    { id: "Q", x: 38, y: 18 },
    { id: "P", x: 41, y: 18 },
    { id: "O", x: 46, y: 12 },
    { id: "N", x: 48, y: 12 },
    { id: "M", x: 52, y: 12 },
    { id: "L", x: 55, y: 12 },
    { id: "K", x: 59, y: 12 },
    { id: "J", x: 62, y: 12 },
    { id: "H", x: 65, y: 12 },
    { id: "G", x: 68, y: 12 },
    { id: "F", x: 71, y: 12 },
    { id: "E", x: 74, y: 12 },
    { id: "D", x: 77, y: 12 },
    { id: "C", x: 80, y: 12 },
    { id: "B", x: 83, y: 12 },
    { id: "A", x: 86, y: 12 },
];

plots.forEach(p => {
    console.log(`    { id: "${p.id}", x: ${p.x}, y: ${p.y}, w: 2.2, h: 4, facing: "", SBA: "", plot_type: "Amenity", corner_type: "", road_size: "", view: "", PLU_Type: "", PLU_Rate_Sqft: "", is_booked: false },`);
});
