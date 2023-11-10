// Create listings and populate them for each document in firebase
var count = 1;

const listingsRef = db.collection('listings');
const snapshot = await listingsRef.get();
snapshot.forEach(doc => {
    // Create listing
    if (count < 3) {
        var listing = document.createElement("div");
        listing.setAttribute("class", "list");
        listing.setAttribute("id", "listing" + count);
        var productName = document.createElement("p");
        productName.setAttribute("class", "prodName");
        productName.setAttribute("id", "productName" + count);
        var userName = document.createElement("p");
        userName.setAttribute("class", "userName");
        userName.setAttribute("id", "userName" + count);
        var price = document.createElement("p");
        price.setAttribute("class", "price");
        price.setAttribute("id", "price" + count);
        var information = document.createElement("p");
        information.setAttribute("class", "info");
        information.setAttribute("id", "information" + count);

        listing.appendChild(productName);
        listing.appendChild(userName);
        listing.appendChild(price);
        listing.appendChild(information);

        document.getElementById("homeListings").appendChild(listing);

        let image1 = doc.data().image;

        // Update info on listing
        document.getElementById("productName" + count).innerHTML = doc.data().foodName;
        document.getElementById("userName" + count).innerHTML = doc.data().user;
        document.getElementById("information" + count).innerHTML = doc.data().foodDescription;
        document.getElementById("price" + count).innerHTML = "$" + doc.data().foodPrice;
        document.getElementById("listing" + count).style.backgroundImage = image1;



    }

    db.collection("users").doc(firebase.auth().currentUser.uid).get().then(test => {
        var postinglist = test.data().myposts;
        // console.log(postinglist);
        for (let i = 0; i < postinglist.length; i++) {
            let currentPost = postinglist[i];
            // Create listing
            if (doc.id == currentPost) {
                var listing = document.createElement("div");
                listing.setAttribute("class", "list");
                listing.setAttribute("id", "listing" + count);
                var productName = document.createElement("p");
                productName.setAttribute("class", "prodName");
                productName.setAttribute("id", "productName" + count);
                var userName = document.createElement("p");
                userName.setAttribute("class", "userName");
                userName.setAttribute("id", "userName" + count);
                var price = document.createElement("p");
                price.setAttribute("class", "price");
                price.setAttribute("id", "price" + count);
                var information = document.createElement("p");
                information.setAttribute("class", "info");
                information.setAttribute("id", "information" + count);

                listing.appendChild(productName);
                listing.appendChild(userName);
                listing.appendChild(price);
                listing.appendChild(information);

                document.getElementById("yourListings2").appendChild(listing);

                let image1 = doc.data().image;

                // Update info on listing
                document.getElementById("productName" + count).innerHTML = doc.data().foodName;
                document.getElementById("userName" + count).innerHTML = doc.data().user;
                document.getElementById("information" + count).innerHTML = doc.data().foodDescription;
                document.getElementById("price" + count).innerHTML = "$" + doc.data().foodPrice;
                document.getElementById("listing" + count).style.backgroundImage = image1;


            }
        };
    });



    console.log(count);
    count++;
});
