<?php
// Connection to your database
$servername = "127.0.0.1:3308";
$username = "dev07dbuser";
$password = "DupzRiqAKb5WOnHI";
$dbname = "dev07db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch anime details based on selected ID
$animeId = $_GET['id'];
$sql = "SELECT * FROM anime WHERE id = $animeId";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo "<p><strong>Name:</strong> {$row['Name']}</p>";
    echo "<p><strong>Publisher:</strong> {$row['Publisher']}</p>";
    echo "<p><strong>Year:</strong> {$row['Year']}</p>";
    echo "<p><strong>Rating:</strong> {$row['rating']}</p>";
} else {
    echo "Anime not found";
}

$conn->close();
?>
