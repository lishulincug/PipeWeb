<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page pageEncoding="utf-8" %>
<!doctype html>
 <head>
  <meta charset="UTF-8">
  <title>Document</title>
 </head>
 <body>
 <table border="1">
     <c:forEach items="${allPipeWeb}" var="sk">
     <tr>
         <td>${sk.pwLocal}</td>
         <td>${sk.pwFlow}</td>
     </tr>
     </c:forEach>
 </table>

 </body>
</html>
