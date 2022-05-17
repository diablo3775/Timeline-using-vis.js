// DOM element where the Timeline will be attached
var container = document.getElementById("visualization");

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
  { id: 1, content: "Modern Update", start: "2014-04-20", computername: "MSI"},
  { id: 2, content: "Critical Update", start: "2014-04-14", computername: "Apple"},
  { id: 3, content: "Critical Update", start: "2014-04-18", computername: "MSI"},
  { id: 4, content: "Critical Update", start: "2014-04-16", computername: "ASUS"},
  { id: 5, content: "Critical Update", start: "2014-04-25", computername: "ASUS" },
  { id: 6, content: "Critical Update", start: "2014-04-27", computername: "MSI"},
  { id: 7, content: "Critical Update", start: "2014-04-26", computername: "MSI"},
  { id: 8, content: "Critical Update", start: "2014-04-26", computername: "Razer"},
]);

// Configuration for the Timeline
var options = {
  editable: true,
  zoomable: true,
};
// getCurrentTime()

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);
// 
// console.log(removeDuplicates())
removeDuplicates()
        function removeDuplicates() {                 
            // Display the list of array objects
            // console.log(items);
            console.log(items.get());
      
            let ok = items.get()
            // Declare a new array
            let newArray = [];
              
            // Declare an empty object
            let uniqueObject = {};
              
            // Loop for the array elements
            for (let i in ok) {
                // Extract the title
                objTitle = ok[i]['computername'];

                // Use the title as the index
                uniqueObject[objTitle] = ok[i];
            }
              
            // Loop to push unique object into array
            for (i in uniqueObject) {
                newArray.push(uniqueObject[i]);

            }
            let option = "";
            for (let i = 0; i < newArray.length; i++) {
              option += `<option value="${newArray[i].computername}">${newArray[i].computername}</option>`
            }
            document.getElementById("sageCRMid").innerHTML = option;
            // Display the unique objects
        }


// Dropdown filter using computer name and display the filtered data
var selectElement = document.getElementById('sageCRMid');
selectElement.addEventListener('change', function() {
  var selectedValue = this.options[selectElement.selectedIndex].value;
  console.log(selectedValue);
  timeline.setItems(items.get({
    filter: function (item) {
      return item.computername == selectedValue;
    }
  }));
});

