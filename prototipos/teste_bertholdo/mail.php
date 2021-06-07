<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>


        <p>Required fields are <b>bold</b></p>

        <form action="contact.php" method="post">
            <p><b>Your Name:</b> <input type="text" name="yourname" /><br />
            <b>Subject:</b> <input type="text" name="subject" /><br />
            <b>E-mail:</b> <input type="text" name="email" /><br />
            Website: <input type="text" name="website"></p>

            <p>Do you like this website?
            <input type="radio" name="likeit" value="Yes" checked="checked" /> Yes
            <input type="radio" name="likeit" value="No" /> No
            <input type="radio" name="likeit" value="Not sure" /> Not sure</p>

            <p>How did you find us?
            <select name="how">
            <option value=""> -- Please select -- </option>
            <option>Google</option>
            <option>Yahoo</option>
            <option>Link from a website</option>
            <option>Word of mouth</option>
            <option>Other</option>
            </select>

            <p><b>Your comments:</b><br />
            <textarea name="comments" rows="10" cols="40"></textarea></p>

            <p><input type="submit" value="Send it!"></p>

            <p> </p>
            <p>Powered by <a href="http://myphpform.com">PHP form</a></p>

        </form>


    
</body>
</html>