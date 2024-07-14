    

    //create map
    const map = L.map('map').setView([6.681314444560001, -1.56591568588], 13);

    //Add map layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

   const routing = L.Routing.control({
        routeWhileDragging: true,
        collapsible: true,
    }).addTo(map);

    const medicalCenters = [
        {
            category: 'Hospital',
            name: 'KNUST University Hospital',
            latitude:6.685908399,
            longitude: -1.573706398,
            ownership: "Quasi-Government",
            address: "Knust",
            phone: "0322062320",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"YES",
            opd: "YES",
            lab: "YES",
            pharmacy: "YES",
            dental:"YES",
            emergency: "YES",
            diagnosticXray: "YES",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "YES",

        },
        {
            category: 'Hospital',
            name: 'Peace and Love Hospital',
            latitude:6.700330261,
            longitude: -1.540731876,
            ownership: "Private",
            address: "Kumasi",
            phone: "0244145064",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"YES",
            opd: "YES",
            lab: "YES",
            pharmacy: "YES",
            dental:"NO",
            emergency:"NO",
            diagnosticXray: "YES",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "NO" ,
            optometry: "YES",
                
        },
        {
            category: 'Hospital',
            name: 'Graceland Hospital',
            latitude:6.662667611,
            longitude: -1.529321989,
            ownership: "Private",
            address: "Kumasi",
            phone: "0264004383",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"YES",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency:"YES",
            diagnosticXray: "YES",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES" ,
            optometry: "NO",
                
        },
        {
            category: 'Hospital',
            name: 'Asbury Hospital',
            latitude:6.691450308,
            longitude: -1.52704429,
            ownership: "Private",
            address: "Odooum",
            phone: "0540796271",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"YES",
            opd: "YES",
            lab: "YES",
            pharmacy: "YES",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "YES",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "NO",

        },
        {
            category: 'Hospital',
            name: 'YENTUMI BOITEY HOSPITAL',
            latitude:6.687236101,
            longitude: -1.585128561,
            ownership: "Private",
            address: "Kumasi",
            phone: "0289548905",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"YES",
            opd: "YES",
            lab: "YES",
            pharmacy: "YES",
            dental:"YES",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "YES",
    //change diagnosticXray and "YES" and "NO" to YES and NO
        },
        {
            category: 'Hospital',
            name: 'HALLMARK MEDICALS',
            latitude:6.665260165,
            longitude: -1.582641878,
            ownership: "Private",
            address: "Atonsu",
            phone: "0509861102",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"YES",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "YES",

        },
        {
            category: 'Hospital',
            name: 'EMENA COMMUNITY HOSPITAL',
            latitude:6.654634,
            longitude: -1.561077663,
            ownership: "Government",
            address: "Emena",
            phone: "",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"YES",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "YES",

        },
        {
            category: 'Hospital',
            name: 'MCKENZIE HEALTH SERVICES LTD.',
            latitude:6.671729156,
            longitude: -1.591149565,
            ownership: "Private",
            address: "Ahinsan-Estate",
            phone: "0322062320",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"YES",
            opd: "YES",
            lab: "YES",
            pharmacy: "YES",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "YES",

        },
        {
            category: 'Clinic',
            name: 'Oforikrom Clinic',
            latitude:6.690197847,
            longitude: -1.59359594,
            ownership: "Government",
            address: "Ofoikrom",
            phone: "0322496283",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "YES",

        },
        {
            category: 'Clinic',
            name: 'Bomso Clinic',
            latitude:6.685303439,
            longitude: -1.578954488,
            ownership: "Private",
            address: "Bomso",
            phone: "0322496283",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "NO",

        },
        {
            category: 'Clinic',
            name: 'Church Of Christ Mission Clinic',
            latitude:6.686592419,
            longitude: -1.579128006,
            ownership: "CHAG",
            address: "Bomso Clinic, Kumasi",
            phone: "0277552044 / 0322029569",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "NO",

        },
        {
            category: 'Clinic',
            name: 'Anwomaso health Center',
            latitude:6.694362938,
            longitude: -1.528083513,
            ownership: "Government",
            address: "Anwomaso",
            phone: "0249279244",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "8am - 5pm",
            paediatrics: "YES",
            optometry: "YES",

        },
        {
            category: 'Clinic',
            name: 'NYKON CLINIC',
            latitude:6.693881723,
            longitude: -1.560210399,
            ownership: "Private",
            address: "18 Silicon Ave, Kentinkrono",
            phone: "0267272428",
            ipdWard: "YES",
            maternity: "NO",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "NO",
            optometry: "NO",

        },
        {
            category: 'Clinic',
            name: 'Anwomaso Clinic',
            latitude:6.692131775,
            longitude: -1.52717163,
            ownership: "Government",
            address: "Anwomaso M/a Prim",
            phone: "0249279244",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "NO",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "YES",

        },
        {
            category: 'Clinic',
            name: 'AHMADIYA HOMEOPATHIS AND HERBAL CLINIC',
            latitude:6.678196538,
            longitude: -1.554392134,
            ownership: "Private",
            address: "Anwomaso M/a Prim",
            phone: "N/A",
            ipdWard: "YES",
            maternity: "NO",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "NO",
            optometry: "NO",

        },
        {
            category: 'Clinic',
            name: 'HOLY CONVENANT HEALTH CENTER',
            latitude:6.687214262,
            longitude: -1.580123342,
            ownership: "Private",
            address: "Bomso Top High, Kumasi",
            phone: "N/A",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "NO",
            optometry: "YES",

        },
        {
            category: 'Clinic',
            name: 'AYEDUASE HEALTH CENTER',
            latitude:6.675892942,
            longitude: -1.561011131,
            ownership: "Government",
            address: "Ayeduase, University Gate Kumasi",
            phone: "0244239986",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "YES",

        },
        {
            category: 'Clinic',
            name: 'AMANTENAMAN HEALTH CLINIC',
            latitude:6.663884718,
            longitude: -1.549936009,
            ownership: "Government",
            address: "Near council Hall",
            phone: "0243708879",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "YES",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "YES",

        },
        {
            category: 'Clinic',
            name: 'Animwaah Medical Center',
            latitude:6.678196538,
            longitude: -1.554392134,
            ownership: "Private",
            address: "Emena Boadi, Kumasi",
            phone: "0322060107",
            ipdWard: "YES",
            maternity: "NO",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "NO",
            diagnosticXray: "YES",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "NO",
            optometry: "NO",

        },
        {
            category: 'Clinic',
            name: 'ALLEN CLINIC',
            latitude:6.670883983,
            longitude: -1.588582565,
            ownership: "Private",
            address: "Ahinsan Estate",
            phone: "N/A",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "NO",
            pharmacy: "NO",
            dental:"NO",
            emergency: "NO",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "YES",
            optometry: "YES",

        },
        {
            category: 'Maternity Home',
            name: 'COMFORT MATERNITY HOME',
            latitude:6.68190483,
            longitude: -1.583250451,
            ownership: "Private",
            address: "Kumasi",
            phone: "0243667880 / 0288248735",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "NO",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "NO",
            optometry: "NO",

        },
        {
            category: 'Maternity Home',
            name: 'FLORENCE MATERNITY HOME',
            latitude:6.680677257,
            longitude: -1.593060949,
            ownership: "Private",
            address: "Kumasi",
            phone: "0208214169",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "NO",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "NO",
            optometry: "NO",

        },
        {
            category: 'Maternity Home',
            name: 'NEW LIFE MATERNITY HOME',
            latitude:6.697020,
            longitude: -1.53315,
            ownership: "Private",
            address: "Kumasi",
            phone: "0244841404",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "NO",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "NO",
            optometry: "NO",

        },
        {
            category: 'Maternity Home',
            name: 'VICTORY MATERNITY HOME',
            latitude:6.690637904,
            longitude: -1.575724236,
            ownership: "Private",
            address: "Kumasi",
            phone: "0244567802",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "NO",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "NO",
            optometry: "NO",

        },
        {
            category: 'Maternity Home',
            name: 'QUEEN VICTORIA MATERNITY HOME',
            latitude:6.666666,
            longitude: -1.616323,
            ownership: "Private",
            address: "Kumasi",
            phone: "N/A",
            ipdWard: "YES",
            maternity: "YES",
            surgicalSuite:"NO",
            opd: "YES",
            lab: "YES",
            pharmacy: "NO",
            dental:"NO",
            emergency: "NO",
            diagnosticXray: "NO",
            nhis: "YES",
            operatingHours: "24 HOURS",
            paediatrics: "NO",
            optometry: "NO",

        },
    ]

    //custom markers


    var markerIcon = L.Icon.extend({
        options: {
            iconSize:     [38, 60],
            shadowSize:   [50, 64],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
        }
    });
    const hospitalMarker = new markerIcon({iconUrl: 'assets/hospital.png'}),
        clinicMarker = new markerIcon({iconUrl: 'assets/clinic.png'}),
        maternityMaker = new markerIcon({iconUrl: 'assets/maternity.png'});


        
    //parent Cluster
    var allMarkers = L.markerClusterGroup()
    //Adding Markers
    var HospitalMarkers = L.markerClusterGroup();
    var ClinicMarkers = L.markerClusterGroup();
    var MaternityMarkers = L.markerClusterGroup();

    // add Markers to parent Cluster
    allMarkers.addLayers([HospitalMarkers,ClinicMarkers,MaternityMarkers])
    //add parent cluster to map
    map.addLayer(allMarkers)

    function addMarkersToMap(type){
        if(type==='hospital'){
            allMarkers.clearLayers()
            return allMarkers.addLayer(HospitalMarkers)
        }else if (type == 'clinic'){
            allMarkers.clearLayers()
            return allMarkers.addLayer(ClinicMarkers)
        }
        else if(type==='maternity'){
            allMarkers.clearLayers()
            return allMarkers.addLayer(MaternityMarkers)
        }
        else if(type==='all'){
            allMarkers.clearLayers()
            allMarkers.addLayer(HospitalMarkers);
            allMarkers.addLayer(ClinicMarkers);
            allMarkers.addLayer(MaternityMarkers)
        }
    }
    medicalCenters.forEach(
        (center)=>{
            let template = `
            <h3 class="text-center"> ${center.name} </h3>
            <p class='text-center' > ${center.category} </p>
            <div class="container text-center" >
                <div class="row gy-2 gx-1">
                    <div class="col-6 p-2 shadow-sm bg-body-secondary ">
                        Ownership : ${center.ownership}
                    </div>
                    <div class="col-6 rounded p-2 shadow-sm  bg-body-secondary ">
                        Address : ${center.address}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Phone : ${center.phone}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        NHIS : ${center.nhis}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Operating Hours : ${center.operatingHours}
                    </div>
                    <div class="col-12 rounded p-2 border-0 shadow-sm bg-primary-subtle ">
                    Fascilities
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Ip ward : ${center.ipdWard}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Maternity Ward : ${center.maternity}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Surgical Suite : ${center.surgicalSuite}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Opd : ${center.opd}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Lab : ${center.lab}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Pharmacy : ${center.pharmacy}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Dental Care: ${center.dental}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Accident and Emergency : ${center.emergency}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Diagnostic X-ray : ${center.diagnosticXray}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Paediatrics : ${center.paediatrics}
                    </div>
                    <div class="col-6  rounded p-2 shadow-sm  bg-body-secondary ">
                        Optometry : ${center.optometry}
                    </div>
                    <button class="col-12 rounded p-2 outline-none border-0 shadow-sm bg-primary-subtle" id='directions'>
                        Get Directions 
                    </button>


                </div>

            </div>
            `
            const marker = L.marker([center.latitude,center.longitude],{
                icon : center.category == 'Hospital' ?  hospitalMarker : center.category == 'Clinic' ?  clinicMarker : maternityMaker
            });
            marker.bindPopup(template,{
                maxHeight: 250,
                autoPanPaddingTopLeft: 0,
                maxWidth: 400
            });

            //popupopen event
            marker.on('popupopen',()=>{
                document.getElementById('directions').onclick = () => {
                    navigator.geolocation.getCurrentPosition((position)=>{
                        getDirections(position.coords.latitude, position.coords.longitude,center.latitude, center.longitude)
                    },(error)=>{
                        window.alert('Error getting your location. Please allow location access and try again.')
                    })
                }
            })

            if(center.category == 'Hospital'){
                HospitalMarkers.addLayer(marker);
            } else if(center.category == 'Clinic'){
                ClinicMarkers.addLayer(marker);
            } else {
                MaternityMarkers.addLayer(marker);
            }
            
            
            function getDirections(userlatitude, userlongitude, centerLatitude, centerLongitude){
                routing.getPlan().setWaypoints([
                    L.latLng(userlatitude, userlongitude),
                    L.latLng(centerLatitude, centerLongitude)
                ]);
                map.fitBounds([[userlatitude, userlongitude], [centerLatitude, centerLongitude]]);
                // L.Routing.control().spliceWaypoints(0,1);
                // L.Routing.control({
                //     waypoints: [
                //         L.latLng(userlatitude, userlongitude),
                //         L.latLng(centerLatitude, centerLongitude)
                //     ],
                //     routeWhileDragging: true,
                //     collapsible: true,
                // }).addTo(map);
            }
            
        }
    );

    addMarkersToMap('all');


    



    // eventListners for button navigation. Displays specific center when toggled

    document.getElementById('all').addEventListener('click', ()=>{
        return addMarkersToMap('all')
    }
    );

    document.getElementById('clinic').onclick = ()=> {
        return addMarkersToMap('clinic')
    };

    

    document.getElementById('hospital').onclick = ()=> {
        return addMarkersToMap('hospital')
    };

    document.getElementById('maternity').onclick = ()=> {
        return addMarkersToMap('maternity')
    }



