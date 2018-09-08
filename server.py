import SimpleHTTPServer
import SocketServer
import urlparse

class Redirector(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_GET(self):
        params = urlparse.urlparse(self.path)
        query = urlparse.parse_qs(params.query)
        location = 'http://www.example.com'
        if 'go' in query:
            location = query['go'][0]
        print query
        print 'redirected to %s' % location
        self.send_response(301)
        self.send_header('Location', location)
        self.end_headers()


if __name__ == '__main__':
    host = '192.168.33.10'
    port = 8000
    SocketServer.ThreadingTCPServer.allow_reuse_address = True
    handler = SocketServer.TCPServer((host, port), Redirector)
    print 'Redirector serving... -> %s' % host
    handler.serve_forever()

