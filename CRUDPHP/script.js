function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function fetchStudents() {
    const studentTable = document.getElementById("studentTable");

    fetch("read.php")
        .then(response => response.json())
        .then(data => {
            let table = "<h2>Student Records</h2><table><tr><th>ID</th><th>PRN</th><th>Name</th><th>Division</th><th>Phone</th><th>Action</th></tr>";
            data.forEach(student => {
                table += `<tr>
                            <td>${student.id}</td>
                            <td>${student.prn}</td>
                            <td>${student.name}</td>
                            <td>${student.division}</td>
                            <td>${student.phone}</td>
                            <td>
                                <button onclick="updateStudent(${student.id}, '${student.prn}', '${student.name}', '${student.division}', '${student.phone}')">Update</button>
                                <button onclick="deleteStudent(${student.id})">Delete</button>
                            </td>
                          </tr>`;
            });
            table += "</table>";

            studentTable.innerHTML = table;
        })
        .catch(error => console.error("Error fetching students:", error));
}

fetchStudents();

function updateStudent(id, prn, name, division, phone) {
    const updateForm = `
        <div class="update-form">
            <h3>Update Student</h3>
            <label for="prn"><b>PRN</b></label>
            <input type="text" value="${prn}" name="prn" required>

            <label for="name"><b>Name</b></label>
            <input type="text" value="${name}" name="name" required>

            <label for="division"><b>Division</b></label>
            <select name="division" required>
                <option value="CS-A" ${division === 'CS-A' ? 'selected' : ''}>CS-A</option>
                <option value="CS-B" ${division === 'CS-B' ? 'selected' : ''}>CS-B</option>
                <option value="CS-C" ${division === 'CS-C' ? 'selected' : ''}>CS-C</option>
                <option value="CS-D" ${division === 'CS-D' ? 'selected' : ''}>CS-D</option>
            </select>

            <label for="phone"><b>Phone</b></label>
            <input type="text" value="${phone}" name="phone" required>

            <button onclick="submitUpdate(${id})">Submit</button>
            <button onclick="closeUpdateForm()">Cancel</button>
        </div>
    `;

    // Append the update form to a container element
    document.getElementById("updateContainer").innerHTML = updateForm;
}

function submitUpdate(id) {
    // Implement logic to submit the updated data to the server
    const prn = document.querySelector('.update-form [name="prn"]').value;
    const name = document.querySelector('.update-form [name="name"]').value;
    const division = document.querySelector('.update-form [name="division"]').value;
    const phone = document.querySelector('.update-form [name="phone"]').value;

    // Use fetch API to send the updated data to the server
    fetch(`update.php?id=${id}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `prn=${prn}&name=${name}&division=${division}&phone=${phone}`,
})

    .then(response => response.text())
    .then(data => {
        console.log(data);
        fetchStudents(); // Refresh the table after update
        closeUpdateForm();
    })
    .catch(error => console.error("Error updating student:", error));
}

function closeUpdateForm() {
    document.getElementById("updateContainer").innerHTML = '';
}

function deleteStudent(id) {
    const confirmation = confirm("Are you sure you want to delete this student?");
    
    if (confirmation) {
        // Use fetch API to send the delete request to the server
        fetch(`delete.php?id=${id}`, {
            method: 'DELETE',
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            fetchStudents(); // Refresh the table after delete
        })
        .catch(error => console.error("Error deleting student:", error));
    }
}
