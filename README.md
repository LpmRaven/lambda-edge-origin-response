# lambda-edge-origin-response

An origin response AWS Lambda@Edge to add security and cache-control headers.

Currently a WIP.

## Cache-control headers

Cache control is currently setup to give best results for static resources.

Frameworks that have currently been adjusted for include:

- GatsbyJS

If you wish to add adjustments for other frameworks, please feel free to open an issue or pull request.

## Security headers

| Security header key         | Security header value                 |
| :---                        | :---                                  |
| Strict-Transport-Security   | max-age=31536000; includeSubdomains   |
| X-Content-Type-Options      | nosniff                               |
| X-Frame-Options             | SAMEORIGIN                            |
| Referrer-Policy             | same-origin                           |
| X-XSS-Protection            | 1; mode=block                         |
| Accept-Ranges               | bytes                                 |
| Content-Security-Policy     | frame-ancestors 'self'                |

