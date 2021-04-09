// WARNING: This is an auto-generated file.

exports["archiveIndex"] = {
    "alias": [
        "archive_index",
        "arci"
    ],
    "title": "Archive.org Index",
    "description": "Obtain archive.org index for specific URL.",
    "group": "Archive.org Index",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "uri"
    ],
    "options": {},
    "priority": 1,
    "noise": 100
}

exports["archiveIndex"].load = function() { return require("./archive")["archiveIndex"] }

exports["bitbucketListRepos"] = {
    "alias": [
        "bitbucket_list_repos",
        "bblr"
    ],
    "title": "List Bitbucket Repos",
    "description": "List Bitbucket repositories.",
    "group": "List Bitbucket Repos",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "bitbucket:member"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["bitbucketListRepos"].load = function() { return require("./bitbucket")["bitbucketListRepos"] }


exports["bitbucketListSnippets"] = {
    "alias": [
        "bitbucket_list_snippets",
        "bbls"
    ],
    "title": "List Bitbucket Snippets",
    "description": "List Bitbucket snippets.",
    "group": "List Bitbucket Snippets",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "bitbucket:member"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["bitbucketListSnippets"].load = function() { return require("./bitbucket")["bitbucketListSnippets"] }


exports["bitbucketListTeamRepos"] = {
    "alias": [
        "bitbucket_list_team_repos",
        "bbltr"
    ],
    "title": "List Bitbucket Team Repos",
    "description": "List Bitbucket team repos.",
    "group": "List Bitbucket Team Repos",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "bitbucket:member"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["bitbucketListTeamRepos"].load = function() { return require("./bitbucket")["bitbucketListTeamRepos"] }


exports["bitbucketListTeamMembers"] = {
    "alias": [
        "bitbucket_list_team_members",
        "bbltm"
    ],
    "title": "List Bitbucket Team Members",
    "description": "List Bitbucket team members.",
    "group": "List Bitbucket Team Members",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "bitbucket:member"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["bitbucketListTeamMembers"].load = function() { return require("./bitbucket")["bitbucketListTeamMembers"] }

exports["bufferoverrunSubdomainSearch"] = {
    "alias": [
        "bufferoverrun_subdomain_search",
        "brss"
    ],
    "title": "Bufferover.run Subdomain Search",
    "description": "Obtain a list of subdomains using bufferover.run DNS service",
    "group": "Bufferover.run Subdomain Search",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "ignoreIps": {
            "description": "Ignore the provided IPs",
            "type": "boolean",
            "default": true
        },
        "entriesThreshold": {
            "description": "Entries threshold",
            "type": "number",
            "default": 1024
        }
    },
    "priority": 1,
    "noise": 1
}

exports["bufferoverrunSubdomainSearch"].load = function() { return require("./bufferoverrun")["bufferoverrunSubdomainSearch"] }

exports["builtwithScrapeRelationships"] = {
    "alias": [
        "builtwith_scrape_relationships",
        "bwsr"
    ],
    "title": "Scrape Builtwith Relationships",
    "description": "Performs scrape of builtwith.com relationships.",
    "group": "Scrape Builtwith Relationships",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 5
}

exports["builtwithScrapeRelationships"].load = function() { return require("./builtwith")["builtwithScrapeRelationships"] }

exports["certspotterIssuances"] = {
    "alias": [
        "certspotter_issuances",
        "csi"
    ],
    "title": "Certspotter Issuances",
    "description": "Obtain issuances from Certspotter.",
    "group": "Certspotter Issuances",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["certspotterIssuances"].load = function() { return require("./certspotter")["certspotterIssuances"] }

exports["cloudflareDnsQuery"] = {
    "alias": [
        "cloudflare_dns_query",
        "cfdq"
    ],
    "title": "CloudFlare DNS Query",
    "description": "Query CloudFlare DNS API.",
    "group": "CloudFlare DNS Query",
    "tags": [
        "ce",
        "dns"
    ],
    "types": [
        "domain",
        "ipv4",
        "ipv6"
    ],
    "options": {
        "type": {
            "description": "Record type",
            "type": "string",
            "default": "ALL",
            "choices": [
                "ALL",
                "A",
                "AAAA",
                "CNAME",
                "MX",
                "NS",
                "TXT"
            ]
        }
    },
    "priority": 1,
    "noise": 1
}

exports["cloudflareDnsQuery"].load = function() { return require("./cloudflare")["cloudflareDnsQuery"] }

exports["commoncrawlIndex"] = {
    "alias": [
        "commoncrawl_index",
        "cci"
    ],
    "title": "CommonCrawl Index",
    "description": "Obtain a CommonCraw index for specific URL.",
    "group": "CommonCrawl Index",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "uri"
    ],
    "options": {},
    "priority": 1,
    "noise": 100
}

exports["commoncrawlIndex"].load = function() { return require("./commoncrawl")["commoncrawlIndex"] }

exports["crtshCNDomainReport"] = {
    "alias": [
        "crtsh_cn_domain_report",
        "crtshcdr"
    ],
    "title": "CRT.SH CN Domain Report",
    "description": "Obtain crt.sh domain report which helps enumerating potential target subdomains.",
    "group": "CRT.SH CN Domain Report",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["crtshCNDomainReport"].load = function() { return require("./crtsh")["crtshCNDomainReport"] }


exports["crtshSANDomainReport"] = {
    "alias": [
        "crtsh_san_domain_report",
        "crtshsdr"
    ],
    "title": "CRT.SH SAN Domain Report",
    "description": "Obtain crt.sh domain report which helps enumerating potential target subdomains.",
    "group": "CRT.SH SAN Domain Report",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["crtshSANDomainReport"].load = function() { return require("./crtsh")["crtshSANDomainReport"] }

exports["dnsResolve"] = {
    "alias": [
        "dns_resolve",
        "dr",
        "dns"
    ],
    "title": "DNS Resolve",
    "description": "Performs DNS resolution",
    "group": "DNS Resolve",
    "tags": [
        "ce",
        "local",
        "dns"
    ],
    "types": [
        "domain",
        "ipv4",
        "ipv6"
    ],
    "options": {
        "type": {
            "description": "Record type",
            "type": "string",
            "default": "ALL",
            "choices": [
                "ALL",
                "A",
                "AAAA",
                "CNAME",
                "MX",
                "NS",
                "TXT"
            ]
        },
        "servers": {
            "description": "DNS servers",
            "type": "string",
            "default": ""
        },
        "concurrency": {
            "description": "Number of concurrent queries",
            "type": "number",
            "default": 500
        }
    },
    "priority": 1,
    "noise": 1
}

exports["dnsResolve"].load = function() { return require("./dns")["dnsResolve"] }

exports["dockerhubListRepos"] = {
    "alias": [
        "dockerhub_list_repos",
        "dhlr"
    ],
    "title": "List DockerHub Repos",
    "description": "List DockerHub repositories for a given member or org.",
    "group": "List DockerHub Repos",
    "tags": [
        "ce"
    ],
    "types": [
        "brand"
    ],
    "options": {
        "dockerhubKey": {
            "description": "DockerHub API Key",
            "type": "string"
        },
        "count": {
            "description": "Results per page",
            "type": "number",
            "default": 100
        },
        "pages": {
            "description": "Number of pages",
            "type": "number"
        }
    },
    "priority": 1,
    "noise": 1
}

exports["dockerhubListRepos"].load = function() { return require("./dockerhub")["dockerhubListRepos"] }

exports["githubUser"] = {
    "alias": [
        "github_user",
        "ghu"
    ],
    "title": "Map GitHub User",
    "description": "Map GitHub user for a given term.",
    "group": "GitHub User",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "nick",
        "string"
    ],
    "options": {
        "githubKey": {
            "description": "GitHub API Key. The key is either in the format username:password or username:token.",
            "type": "string",
            "value": ""
        },
        "retryRequest": {
            "description": "Re-try requests which are out of the rate limit policy.",
            "type": "boolean",
            "value": true
        },
        "retryRequestDelay": {
            "description": "The delay between retrying requests which are out of the rate limit policy.",
            "type": "number",
            "value": 0
        },
        "githubMaxResults": {
            "description": "Maximum results. Used for limiting expensive search operations.",
            "type": "number",
            "value": Infinity
        }
    },
    "priority": 1,
    "noise": 1
}

exports["githubUser"].load = function() { return require("./github")["githubUser"] }


exports["githubOrg"] = {
    "alias": [
        "github_org",
        "gho"
    ],
    "title": "Map GitHub Org",
    "description": "Map GitHub org for a given term.",
    "group": "GitHub Org",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "nick",
        "string"
    ],
    "options": {
        "githubKey": {
            "description": "GitHub API Key. The key is either in the format username:password or username:token.",
            "type": "string",
            "value": ""
        },
        "retryRequest": {
            "description": "Re-try requests which are out of the rate limit policy.",
            "type": "boolean",
            "value": true
        },
        "retryRequestDelay": {
            "description": "The delay between retrying requests which are out of the rate limit policy.",
            "type": "number",
            "value": 0
        },
        "githubMaxResults": {
            "description": "Maximum results. Used for limiting expensive search operations.",
            "type": "number",
            "value": Infinity
        }
    },
    "priority": 1,
    "noise": 1
}

exports["githubOrg"].load = function() { return require("./github")["githubOrg"] }


exports["githubSearchUsers"] = {
    "alias": [
        "github_search_users",
        "ghsu"
    ],
    "title": "Search GitHub Users",
    "description": "Search GitHub users for a given term.",
    "group": "GitHub Users",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "nick",
        "string"
    ],
    "options": {
        "githubKey": {
            "description": "GitHub API Key. The key is either in the format username:password or username:token.",
            "type": "string",
            "value": ""
        },
        "retryRequest": {
            "description": "Re-try requests which are out of the rate limit policy.",
            "type": "boolean",
            "value": true
        },
        "retryRequestDelay": {
            "description": "The delay between retrying requests which are out of the rate limit policy.",
            "type": "number",
            "value": 0
        },
        "githubMaxResults": {
            "description": "Maximum results. Used for limiting expensive search operations.",
            "type": "number",
            "value": Infinity
        },
        "bioFilter": {
            "description": "Regex to filter based on bio details.",
            "type": "string",
            "default": "",
            "alias": [
                "filter-bio"
            ]
        },
        "companyFilter": {
            "description": "Regex to filter based on company details.",
            "type": "string",
            "default": "",
            "alias": [
                "filter-company"
            ]
        },
        "andFilter": {
            "description": "Treat all filters as if they are in and condition",
            "type": "boolean",
            "default": true
        },
        "orFilter": {
            "description": "Treat all filter as if they are in or condition",
            "type": "boolean",
            "default": false
        }
    },
    "priority": 1,
    "noise": 100
}

exports["githubSearchUsers"].load = function() { return require("./github")["githubSearchUsers"] }


exports["githubListOrgs"] = {
    "alias": [
        "github_list_orgs",
        "ghlo"
    ],
    "title": "List GitHub Orgs",
    "description": "List GitHub orgs for a given member.",
    "group": "GitHub Orgs",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "github:user"
    ],
    "options": {
        "githubKey": {
            "description": "GitHub API Key. The key is either in the format username:password or username:token.",
            "type": "string",
            "value": ""
        },
        "retryRequest": {
            "description": "Re-try requests which are out of the rate limit policy.",
            "type": "boolean",
            "value": true
        },
        "retryRequestDelay": {
            "description": "The delay between retrying requests which are out of the rate limit policy.",
            "type": "number",
            "value": 0
        },
        "githubMaxResults": {
            "description": "Maximum results. Used for limiting expensive search operations.",
            "type": "number",
            "value": Infinity
        }
    },
    "priority": 1,
    "noise": 1
}

exports["githubListOrgs"].load = function() { return require("./github")["githubListOrgs"] }


exports["githubListMembers"] = {
    "alias": [
        "github_list_members",
        "ghlm"
    ],
    "title": "List GitHub Members",
    "description": "List GitHub members for a given org.",
    "group": "GitHub Members",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "github:org"
    ],
    "options": {
        "githubKey": {
            "description": "GitHub API Key. The key is either in the format username:password or username:token.",
            "type": "string",
            "value": ""
        },
        "retryRequest": {
            "description": "Re-try requests which are out of the rate limit policy.",
            "type": "boolean",
            "value": true
        },
        "retryRequestDelay": {
            "description": "The delay between retrying requests which are out of the rate limit policy.",
            "type": "number",
            "value": 0
        },
        "githubMaxResults": {
            "description": "Maximum results. Used for limiting expensive search operations.",
            "type": "number",
            "value": Infinity
        }
    },
    "priority": 1,
    "noise": 1
}

exports["githubListMembers"].load = function() { return require("./github")["githubListMembers"] }


exports["githubListRepos"] = {
    "alias": [
        "github_list_repos",
        "ghlr"
    ],
    "title": "List GitHub Repos",
    "description": "List GitHub repos for a given user/org.",
    "group": "GitHub Repos",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "github:org",
        "github:user"
    ],
    "options": {
        "githubKey": {
            "description": "GitHub API Key. The key is either in the format username:password or username:token.",
            "type": "string",
            "value": ""
        },
        "retryRequest": {
            "description": "Re-try requests which are out of the rate limit policy.",
            "type": "boolean",
            "value": true
        },
        "retryRequestDelay": {
            "description": "The delay between retrying requests which are out of the rate limit policy.",
            "type": "number",
            "value": 0
        },
        "githubMaxResults": {
            "description": "Maximum results. Used for limiting expensive search operations.",
            "type": "number",
            "value": Infinity
        },
        "forks": {
            "description": "Include forks",
            "type": "boolean",
            "default": false
        }
    },
    "priority": 1,
    "noise": 1
}

exports["githubListRepos"].load = function() { return require("./github")["githubListRepos"] }


exports["githubListGists"] = {
    "alias": [
        "github_list_gists",
        "ghlg"
    ],
    "title": "List GitHub Gists",
    "description": "List GitHub gists for a given user/org.",
    "group": "GitHub Gists",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "github:org",
        "github:user"
    ],
    "options": {
        "githubKey": {
            "description": "GitHub API Key. The key is either in the format username:password or username:token.",
            "type": "string",
            "value": ""
        },
        "retryRequest": {
            "description": "Re-try requests which are out of the rate limit policy.",
            "type": "boolean",
            "value": true
        },
        "retryRequestDelay": {
            "description": "The delay between retrying requests which are out of the rate limit policy.",
            "type": "number",
            "value": 0
        },
        "githubMaxResults": {
            "description": "Maximum results. Used for limiting expensive search operations.",
            "type": "number",
            "value": Infinity
        }
    },
    "priority": 1,
    "noise": 1
}

exports["githubListGists"].load = function() { return require("./github")["githubListGists"] }

exports["gravatar"] = {
    "alias": [],
    "title": "Gravatar",
    "description": "Get gravatar.",
    "group": "Gravatar",
    "tags": [
        "ce"
    ],
    "types": [
        "email"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["gravatar"].load = function() { return require("./gravatar")["gravatar"] }

exports["hackertargetReverseIpLookup"] = {
    "alias": [
        "hackertarget_reverse_ip_lookup",
        "htril"
    ],
    "title": "HackerTarget Reverse IP Lookup",
    "description": "Obtain reverse IP information from hackertarget.com.",
    "group": "HackerTarget Reverse IP Lookup",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "ipv4",
        "ipv6"
    ],
    "options": {
        "noiseThreshold": {
            "description": "The number of minimum nodes before considering the result set as noise",
            "type": "number",
            "default": 100
        }
    },
    "priority": 100,
    "noise": 9
}

exports["hackertargetReverseIpLookup"].load = function() { return require("./hackertarget")["hackertargetReverseIpLookup"] }


exports["hackertargetOnlinePortScan"] = {
    "alias": [
        "hackertarget_online_port_scan",
        "htps"
    ],
    "title": "HackerTarget Online Port Scan",
    "description": "Obtain port information from hackertarget.com.",
    "group": "HackerTarget Online Port Scan",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "ipv4",
        "ipv6"
    ],
    "options": {},
    "priority": 100,
    "noise": 1
}

exports["hackertargetOnlinePortScan"].load = function() { return require("./hackertarget")["hackertargetOnlinePortScan"] }

exports["sha1Hash"] = {
    "alias": [
        "sha1_hash",
        "sha1"
    ],
    "title": "SHA1 Hash",
    "description": "Create SHA1 Hash",
    "group": "SHA1 Hash",
    "tags": [
        "ce"
    ],
    "types": [
        "hash",
        "crypto"
    ],
    "options": {},
    "priority": 1,
    "noise": 1000
}

exports["sha1Hash"].load = function() { return require("./hash")["sha1Hash"] }

exports["hibpReport"] = {
    "alias": [
        "hibp_report",
        "hibpr"
    ],
    "title": "HIBP Report",
    "description": "Obtain haveibeenpwned.com breach report.",
    "group": "HIBP Report",
    "tags": [
        "ce"
    ],
    "types": [
        "email"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["hibpReport"].load = function() { return require("./hibp")["hibpReport"] }

exports["httpFingerprint"] = {
    "alias": [
        "http_fingerprint",
        "hf"
    ],
    "title": "HTTP Fingerprint",
    "description": "Performs a fingerprint on the HTTP server and application.",
    "group": "HTTP Fingerprint",
    "tags": [
        "ce",
        "local",
        "http"
    ],
    "types": [
        "uri"
    ],
    "options": {
        "timeout": {
            "description": "HTTP timeout interval",
            "type": "number",
            "default": 30000
        },
        "augment": {
            "description": "Augment input node with result nodes",
            "type": "boolean",
            "default": true
        },
        "defuse": {
            "description": "Prevention extraction of sub types",
            "type": "boolean",
            "default": false
        },
        "follow": {
            "description": "Follow redirects",
            "type": "boolean",
            "default": false
        },
        "responseBodySniffSize": {
            "description": "The size of the response body sniff",
            "type": "number",
            "default": 512
        }
    },
    "priority": 1,
    "noise": 1
}

exports["httpFingerprint"].load = function() { return require("./http")["httpFingerprint"] }

exports["bakeImages"] = {
    "alias": [
        "bake_images",
        "bes"
    ],
    "title": "Bake Images",
    "description": "Convert external image into data URIs for self-embedding purposes.",
    "group": "Bake Images",
    "tags": [
        "ce"
    ],
    "types": [
        "image",
        "screenshot",
        "gravatar"
    ],
    "options": {},
    "priority": 1,
    "noise": 1000
}

exports["bakeImages"].load = function() { return require("./image")["bakeImages"] }

exports["ipinfoio"] = {
    "alias": [
        "ipinfo_io",
        "iiio"
    ],
    "title": "ipinfo.io",
    "description": "Obtain ipinfo.io whois report.",
    "group": "ipinfo.io",
    "tags": [
        "ce"
    ],
    "types": [
        "ipv4"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["ipinfoio"].load = function() { return require("./ipinfoio")["ipinfoio"] }

exports["OmnisintSubdomainReport"] = {
    "alias": [
        "omnisint_subdomain_report"
    ],
    "title": "Omnisint Subdomain Report",
    "description": "Obtain omnisint domain report which helps enumerating target subdomains.",
    "group": "Omnisint Subdomain Report",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["OmnisintSubdomainReport"].load = function() { return require("./omnisint")["OmnisintSubdomainReport"] }

exports["pksLookupKeys"] = {
    "alias": [
        "pks_lookup_keys",
        "pkslk"
    ],
    "title": "PKS Lookup",
    "description": "Look the the PKS database at pool.sks-keyservers.net which pgp.mit.edu is part of.",
    "group": "PKS Lookup",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "email"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["pksLookupKeys"].load = function() { return require("./pks")["pksLookupKeys"] }

exports["pwndbSearch"] = {
    "alias": [
        "pwndb_search",
        "pds"
    ],
    "title": "PwnDB Search",
    "description": "Searching the PwnDB database",
    "group": "PwnDB Search",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "email"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["pwndbSearch"].load = function() { return require("./pwndb")["pwndbSearch"] }

exports["riddlerIpSearch"] = {
    "alias": [
        "riddler_ip_search",
        "rdis"
    ],
    "title": "Riddler IP Search",
    "description": "Searches for IP references using F-Secure riddler.io.",
    "group": "Riddler IP Search",
    "tags": [
        "ce"
    ],
    "types": [
        "ipv4",
        "ipv6"
    ],
    "options": {
        "ignoreDomains": {
            "description": "Ignore the provided domains",
            "type": "boolean",
            "default": true
        }
    },
    "priority": 1,
    "noise": 1
}

exports["riddlerIpSearch"].load = function() { return require("./riddler")["riddlerIpSearch"] }


exports["riddlerDomainSearch"] = {
    "alias": [
        "riddler_domain_search",
        "rdds"
    ],
    "title": "Riddler Domain Search",
    "description": "Searches for Domain references using F-Secure riddler.io.",
    "group": "Riddler Domain Search",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "ignoreIps": {
            "description": "Ignore the provided IPs",
            "type": "boolean",
            "default": true
        }
    },
    "priority": 1,
    "noise": 1
}

exports["riddlerDomainSearch"].load = function() { return require("./riddler")["riddlerDomainSearch"] }

exports["script"] = {
    "alias": [
        "script"
    ],
    "title": "Script",
    "description": "Perform transformation with external script",
    "group": "Script",
    "tags": [
        "ce",
        "evil",
        "local"
    ],
    "types": [],
    "options": {
        "concurrency": {
            "description": "Number of concurrent scripts to run",
            "type": "number",
            "default": Infinity
        },
        "script": {
            "type": "string",
            "description": "The path to the script to execute.",
            "default": ""
        },
        "args": {
            "type": "array",
            "description": "List of arguments to pass to the function.",
            "default": []
        }
    },
    "priority": 100,
    "noise": 100
}

exports["script"].load = function() { return require("./script")["script"] }

exports["scyllaSearch"] = {
    "alias": [
        "scylla_search",
        "scys"
    ],
    "title": "Scylla Search",
    "description": "Searching the Scylla database",
    "group": "Scylla Search",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "email"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["scyllaSearch"].load = function() { return require("./scylla")["scyllaSearch"] }

exports["securitytrailsSuggestions"] = {
    "alias": [
        "securitytrails_domain_suggestions",
        "stds"
    ],
    "title": "Security Trails Domain Suggestions",
    "description": "Get a list of domain suggestions from securitytrails.com.",
    "group": "Security Trails Domain Suggestions",
    "tags": [
        "ce"
    ],
    "types": [
        "brand"
    ],
    "options": {},
    "priority": 1,
    "noise": 9
}

exports["securitytrailsSuggestions"].load = function() { return require("./securitytrails")["securitytrailsSuggestions"] }


exports["securitytrailsDomainReport"] = {
    "alias": [
        "securitytrails_domain_report",
        "stdr"
    ],
    "title": "Securitytrails Domain Report",
    "description": "Get a domain report from securitytrails.com.",
    "group": "Securitytrails Domain Report",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["securitytrailsDomainReport"].load = function() { return require("./securitytrails")["securitytrailsDomainReport"] }

exports["shodanOrgSearch"] = {
    "alias": [
        "shodan_org_search",
        "sos"
    ],
    "title": "Shodan ORG Search",
    "description": "Performs search using ORG filter.",
    "group": "Shodan ORG Search",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "org"
    ],
    "options": {
        "shodanKey": {
            "type": "string",
            "description": "Shodan API key."
        },
        "extraQuery": {
            "type": "string",
            "description": "Extra query."
        },
        "pages": {
            "type": "number",
            "description": "Number of pages.",
            "default": Infinity
        }
    },
    "priority": 1,
    "noise": 50
}

exports["shodanOrgSearch"].load = function() { return require("./shodan")["shodanOrgSearch"] }


exports["shodanSslSearch"] = {
    "alias": [
        "shodan_ssl_search",
        "sss"
    ],
    "title": "Shodan SSL Search",
    "description": "Performs search using SSL filter.",
    "group": "Shodan SSL Search",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "shodanKey": {
            "type": "string",
            "description": "Shodan API key."
        },
        "extraQuery": {
            "type": "string",
            "description": "Extra query."
        },
        "pages": {
            "type": "number",
            "description": "Number of pages.",
            "default": Infinity
        }
    },
    "priority": 1,
    "noise": 9
}

exports["shodanSslSearch"].load = function() { return require("./shodan")["shodanSslSearch"] }

exports["spyseSubdomains"] = {
    "alias": [
        "spyse_subdomains",
        "ssds"
    ],
    "title": "Spyse Subdomains",
    "description": "Performs subdomain searching with Spyse.",
    "group": "Spyse Subdomains",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "spyseKey": {
            "type": "string",
            "description": "Spyse API key."
        }
    },
    "priority": 1,
    "noise": 1
}

exports["spyseSubdomains"].load = function() { return require("./spyse")["spyseSubdomains"] }

exports["tcpPortScan"] = {
    "alias": [
        "tcp_port_scan",
        "tps"
    ],
    "title": "TCP Port Scan",
    "description": "Simple, full-handshake TCP port scanner (very slow and sometimes inaccurate)",
    "group": "TCP Port Scan",
    "tags": [
        "ce",
        "local",
        "tcp"
    ],
    "types": [
        "ipv4",
        "ipv6"
    ],
    "options": {
        "ports": {
            "description": "The ports to scan for",
            "type": "string",
            "default": ""
        },
        "timeout": {
            "description": "The socket timeout interval",
            "type": "number",
            "default": 5000
        },
        "concurrency": {
            "description": "Number of concurrent scans",
            "type": "number",
            "default": 500
        },
        "validates": {
            "description": "Validate port",
            "type": "boolean",
            "default": false,
            "alias": [
                "validate"
            ]
        },
        "beSmart": {
            "description": "Use smart detection",
            "type": "boolean",
            "default": false,
            "alias": [
                "smart"
            ]
        },
        "withBanners": {
            "description": "Fetch banner",
            "type": "boolean",
            "default": false,
            "alias": [
                "with-banner",
                "banners",
                "banner"
            ]
        },
        "withCertificates": {
            "description": "Fetch certificate",
            "type": "boolean",
            "default": false,
            "alias": [
                "with-certificate",
                "certificates",
                "certificate"
            ]
        }
    },
    "priority": 1,
    "noise": 1
}

exports["tcpPortScan"].load = function() { return require("./tcp")["tcpPortScan"] }

exports["threatcrowdDomainReport"] = {
    "alias": [
        "threatcrowd_domain_report",
        "tcdr"
    ],
    "title": "Threatcrowd Domain Report",
    "description": "Obtain threatcrowd domain report which helps enumerating potential target subdomains and email addresses.",
    "group": "Threatcrowd Domain Report",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["threatcrowdDomainReport"].load = function() { return require("./threatcrowd")["threatcrowdDomainReport"] }


exports["threatcrowdIpReport"] = {
    "alias": [
        "threatcrowd_ip_report",
        "tcir"
    ],
    "title": "Threatcrowd IP Report",
    "description": "Obtain threatcrowd ip report which helps enumerating virtual hosts.",
    "group": "Threatcrowd IP Report",
    "tags": [
        "ce"
    ],
    "types": [
        "ipv4",
        "ipv6"
    ],
    "options": {}
}

exports["threatcrowdIpReport"].load = function() { return require("./threatcrowd")["threatcrowdIpReport"] }

exports["urlscanLiveshot"] = {
    "alias": [
        "urlscan_liveshot",
        "usls"
    ],
    "title": "Urlscan Liveshot",
    "description": "Generates a liveshot of any public site via urlscan.",
    "group": "Urlscan Liveshot",
    "tags": [
        "ce"
    ],
    "types": [
        "uri"
    ],
    "options": {
        "mix": {
            "description": "Mix input nodes with result nodes",
            "type": "boolean",
            "default": true
        }
    },
    "priority": 1,
    "noise": 1
}

exports["urlscanLiveshot"].load = function() { return require("./urlscan")["urlscanLiveshot"] }


exports["urlscanLiveshotSearchEngines"] = {
    "alias": [
        "urlscan_liveshot_search_engines",
        "uslsse"
    ],
    "title": "Urlscan Liveshot Search Engines",
    "description": "Generates a liveshot of a number of search engines.",
    "group": "Urlscan Liveshot Search Engines",
    "tags": [
        "ce"
    ],
    "types": [
        "brand"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["urlscanLiveshotSearchEngines"].load = function() { return require("./urlscan")["urlscanLiveshotSearchEngines"] }


exports["urlscanSubdomains"] = {
    "alias": [
        "urlscan_subdomains",
        "uss"
    ],
    "title": "Urlscan Subdomains",
    "description": "Find subdomains via urlscan.",
    "group": "Urlscan Subdomains",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "urlscanKey": {
            "type": "string",
            "description": "Urlscan API key."
        }
    },
    "priority": 1,
    "noise": 1
}

exports["urlscanSubdomains"].load = function() { return require("./urlscan")["urlscanSubdomains"] }

exports["noop"] = {
    "alias": [
        "nop"
    ],
    "title": "No Op",
    "description": "Does not do anything.",
    "group": "No Op",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["noop"].load = function() { return require("./utils")["noop"] }


exports["sleep"] = {
    "alias": [
        "sleep",
        "wait"
    ],
    "title": "Sleep",
    "description": "Sleeps for predefined time.",
    "group": "Sleep",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [],
    "options": {
        "time": {
            "type": "number",
            "description": "The ammount of time to sleep in milliseconds.",
            "default": 60000
        }
    },
    "priority": 100,
    "noise": 100
}

exports["sleep"].load = function() { return require("./utils")["sleep"] }


exports["duplicate"] = {
    "alias": [
        "dup"
    ],
    "title": "Duplicate",
    "description": "Duplicate node.",
    "group": "Duplicate",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "*"
    ],
    "options": {
        "newType": {
            "type": "string",
            "description": "Type of the new node.",
            "default": "string"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["duplicate"].load = function() { return require("./utils")["duplicate"] }


exports["extract"] = {
    "alias": [
        "excavate"
    ],
    "title": "Extract",
    "description": "Extract property.",
    "group": "Extract",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "*"
    ],
    "options": {
        "property": {
            "type": "string",
            "description": "The property to extract.",
            "default": ""
        },
        "prefix": {
            "type": "string",
            "description": "Prefix for the label.",
            "default": ""
        },
        "suffix": {
            "type": "string",
            "description": "Suffix for the label.",
            "default": ""
        },
        "newType": {
            "type": "string",
            "description": "Type of the new node.",
            "default": "string"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["extract"].load = function() { return require("./utils")["extract"] }


exports["prefix"] = {
    "alias": [
        "prepand"
    ],
    "title": "Prefix",
    "description": "Creates a new node with a prefix.",
    "group": "Prefix",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "*"
    ],
    "options": {
        "prefix": {
            "type": "string",
            "description": "The prefix to add.",
            "default": ""
        },
        "newType": {
            "type": "string",
            "description": "Type of the new node.",
            "default": "string"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["prefix"].load = function() { return require("./utils")["prefix"] }


exports["suffix"] = {
    "alias": [
        "append"
    ],
    "title": "Suffix",
    "description": "Creates a new node with a suffix.",
    "group": "Suffix",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "*"
    ],
    "options": {
        "suffix": {
            "type": "string",
            "description": "The suffix to add.",
            "default": ""
        },
        "newType": {
            "type": "string",
            "description": "Type of the new node.",
            "default": "string"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["suffix"].load = function() { return require("./utils")["suffix"] }


exports["augment"] = {
    "alias": [],
    "title": "Augment",
    "description": "Update node with prefix or suffix.",
    "group": "Augment",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "*"
    ],
    "options": {
        "prefix": {
            "type": "string",
            "description": "The prefix to add.",
            "default": ""
        },
        "suffix": {
            "type": "string",
            "description": "The suffix to add.",
            "default": ""
        },
        "newType": {
            "type": "string",
            "description": "Type of the new node.",
            "default": "string"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["augment"].load = function() { return require("./utils")["augment"] }


exports["splitEmail"] = {
    "alias": [
        "split_email"
    ],
    "title": "Split Email",
    "description": "Split email at the @ sign.",
    "group": "Split Email",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "email"
    ],
    "options": {},
    "priority": 1,
    "noise": 1000
}

exports["splitEmail"].load = function() { return require("./utils")["splitEmail"] }


exports["buildEmail"] = {
    "alias": [
        "build_email"
    ],
    "title": "Build Email",
    "description": "Build email from node label.",
    "group": "Build Email",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "nick": {
            "type": "string",
            "description": "The email nick.",
            "default": "admin"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["buildEmail"].load = function() { return require("./utils")["buildEmail"] }


exports["splitDomain"] = {
    "alias": [
        "split_domain"
    ],
    "title": "Split Domain",
    "description": "Split domain at the first . sign.",
    "group": "Split Domain",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1000
}

exports["splitDomain"].load = function() { return require("./utils")["splitDomain"] }


exports["buildDomain"] = {
    "alias": [
        "build_domain"
    ],
    "title": "Build Domain",
    "description": "Build domain from node label.",
    "group": "Build Domain",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "brand": {
            "type": "string",
            "description": "The brand",
            "default": "brand"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["buildDomain"].load = function() { return require("./utils")["buildDomain"] }


exports["splitUri"] = {
    "alias": [
        "split_uri"
    ],
    "title": "Split URI",
    "description": "Split URI to corresponding parts.",
    "group": "Split URI",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "uri"
    ],
    "options": {},
    "priority": 1,
    "noise": 1000
}

exports["splitUri"].load = function() { return require("./utils")["splitUri"] }


exports["buildUri"] = {
    "alias": [
        "build_uri"
    ],
    "title": "Build URI",
    "description": "Build URI from node label.",
    "group": "Build URI",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "protocol": {
            "type": "string",
            "description": "The URI protocol.",
            "default": "http"
        },
        "port": {
            "type": "string",
            "description": "The URI port.",
            "default": ""
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["buildUri"].load = function() { return require("./utils")["buildUri"] }

exports["virustotalSubdomains"] = {
    "alias": [
        "virustotal_subdomains",
        "vtsd"
    ],
    "title": "Virustotal Subdomains",
    "description": "Obtain subdomains from Virustotal.",
    "group": "Virustotal Subdomains",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["virustotalSubdomains"].load = function() { return require("./virustotal")["virustotalSubdomains"] }

exports["vulnersSearch"] = {
    "alias": [
        "vulners_search",
        "vs"
    ],
    "title": "Vulners Search",
    "description": "Obtain vulnerability information via vulners.com.",
    "group": "Vulners Search",
    "tags": [
        "ce"
    ],
    "types": [
        "software"
    ],
    "options": {
        "family": {
            "description": "Bulletin family",
            "type": "string",
            "default": "",
            "choices": [
                "",
                "exploit",
                "nvd"
            ]
        }
    },
    "priority": 1,
    "noise": 1
}

exports["vulnersSearch"].load = function() { return require("./vulners")["vulnersSearch"] }

exports["wappalyzerProfile"] = {
    "alias": [
        "wappalyzer_profile",
        "wzp"
    ],
    "title": "Wappalyzer Profile",
    "description": "Enumerate technologies with api.wappalyzer.com.",
    "group": "Wappalyzer Profile",
    "tags": [
        "ce"
    ],
    "types": [
        "uri"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["wappalyzerProfile"].load = function() { return require("./wappalyzer")["wappalyzerProfile"] }

exports["whoaretheyReport"] = {
    "alias": [
        "whoarethey_report",
        "whoarethey",
        "wmnr",
        "wmn"
    ],
    "title": "WhoAreThey Report",
    "description": "Find social accounts with the help of whoarethey database.",
    "group": "WhoAreThey Report",
    "tags": [
        "ce"
    ],
    "types": [
        "nick",
        "brand"
    ],
    "options": {
        "categories": {
            "description": "Categories to narrow down searches to",
            "type": "array",
            "default": []
        }
    },
    "priority": 1,
    "noise": 5
}

exports["whoaretheyReport"].load = function() { return require("./whoarethey")["whoaretheyReport"] }

exports["zonecruncherSubdomains"] = {
    "alias": [
        "zonecruncher_subdomains",
        "zcss"
    ],
    "title": "Zonecruncher Subdomains",
    "description": "Performs subdomain searching with Zonecruncher.",
    "group": "Zonecruncher Subdomains",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "zonecruncherKey": {
            "type": "string",
            "description": "Zonecruncher API key."
        }
    },
    "priority": 1,
    "noise": 1
}

exports["zonecruncherSubdomains"].load = function() { return require("./zonecruncher")["zonecruncherSubdomains"] }
