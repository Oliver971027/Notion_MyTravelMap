var simplemaps_worldmap_mapdata = {
  main_settings: {
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    
    zoom: "yes",
    initial_zoom: "-1",
    
    border_color: "#ffffff",
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_zoomable: "yes",
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_load: "no",
    down_link: "",
    data_source: "latest",
    skip_rich_labels: "no",
    click: "free",
    url_new_tab: "yes",  
  },
  
  state_specific: {
    SG: {
      name: "新加坡",
      color: "#ff5555",
      hover_color: "#ff0000",
      description: "新加坡",
      url: "https://www.notion.so/12-27-01-02-29309e538da9810d8805d82605a212df?source=copy_link" 
    },
    
    MY: {
      name: "馬來西亞",
      color: "#55ff55",
      description: "馬來西亞",
      url: "https://www.notion.so/12-23-12-27-29309e538da980e88cd3c3ad8523382a?source=copy_link"
    }
  },
  
  locations: {},
  labels: {},
  legend: {
    entries: []
  },
  regions: {}
};
