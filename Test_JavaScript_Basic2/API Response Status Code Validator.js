let stauscode = 401;

switch (stauscode) {
    case 200:
        console.log("PASS - OK: Request successful");  
        break;
    case 201:
        console.log("PASS - Created: Resource created successfully");
        break;
    case 301:
        console.log("WARNING - Moved Permanently: URL has changed");
        break;
    case 400:
        console.log("FAIL - Bad Request: Check request payload");
        break;
    case 401:
        console.log("FAIL - Unauthorized: Check auth token");
        break;
    case 403:
        console.log("FAIL - Forbidden: Insufficient permissions");
        break;
    case 404:
        console.log("FAIL - Not Found: Check endpoint URL");
        break;  
    case 500:
        console.log("FAIL - Internal Server Error: Backend issue");
        break;  
    default:
        console.log("UNKNOWN - Unhandled status code");
}
