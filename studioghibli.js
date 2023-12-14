const customURLs = {
  "2baf70d1-42bb-4437-b551-e5fed5a87abe": "https://www.google.com/search?q=el+castillo+en+el+cielo+ver+pelicula&sca_esv=589734753&sxsrf=AM9HkKndhAJldsNXry4N4rFJMUULKkDTDA%3A1702286755566&source=hp&ei=o9V2ZZThH9eJkdUPpcSlgAc&iflsig=AO6bgOgAAAAAZXbjs7OJ4flp_vyDLCepq_EcxXkw8I7o&ved=0ahUKEwjUvvmqiIeDAxXXRKQEHSViCXAQ4dUDCAw&uact=5&oq=el+castillo+en+el+cielo+ver+pelicula&gs_lp=Egdnd3Mtd2l6IiRlbCBjYXN0aWxsbyBlbiBlbCBjaWVsbyB2ZXIgcGVsaWN1bGFI1WpQAFjeaHABeACQAQCYAaUBoAHcHqoBBTE1LjIyuAEDyAEA-AEBwgIEECMYJ8ICChAuGIAEGIoFGEPCAgsQABiABBixAxiDAcICChAjGIAEGIoFGCfCAhAQLhjHARjRAxiABBiKBRgnwgIKEC4YQxiABBiKBcICChAuGIAEGIoFGCfCAgoQABiABBiKBRhDwgIFEC4YgATCAhAQLhhDGIMBGLEDGIAEGIoFwgITEC4YgAQYigUYQxixAxiDARjUAsICCBAuGIAEGLEDwgIOEAAYgAQYigUYsQMYgwHCAggQLhixAxiABMICCxAuGIAEGLEDGIMBwgIREC4YgAQYigUYsQMYgwEY1ALCAgsQLhiABBjHARivAcICBRAAGIAEwgIIEAAYgAQYsQPCAhEQLhiABBjHARivARiYBRiZBcICCxAuGK8BGMcBGIAE&sclient=gws-wiz",
  "12cfb892-aac0-4c5b-94af-521852e46d6a": "https://www.facebook.com/watch/?v=499980588024440",
  "58611129-2dbc-4a81-a72f-77ddfc1b1b49": "https://www.google.com/search?q=ver+totoro&sca_esv=589476392&sxsrf=AM9HkKkxKmD5A_RMxaaopevLFbnUwGyCYw%3A1702170897088&ei=ERF1ZYf-BLaE9u8P6PycyAg&ved=0ahUKEwjHyqvd2IODAxU2gv0HHWg-B4kQ4dUDCBA&uact=5&oq=ver+totoro&gs_lp=Egxnd3Mtd2l6LXNlcnAiCnZlciB0b3Rvcm8yChAjGIAEGIoFGCcyBRAAGIAESOAZUIcKWOAQcAF4AZABAJgBrAGgAa8FqgEDMi40uAEDyAEA-AEBwgIQEAAYgAQYigUYQxixAxiDAcICChAAGIAEGIoFGEPCAhMQLhiABBixAxiDARjHARivARgKwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICDhAAGIAEGIoFGLEDGIMBwgIKEAAYgAQYFBiHAuIDBBgAIEGIBgE&sclient=gws-wiz-serp",
  "ea660b10-85c4-4ae3-8a5f-41cea3648e3e": "https://www.google.com/search?q=ver+kiki+aprendiz+de+bruja&sca_esv=589788475&sxsrf=AM9HkKmcjau6O3d2XT93Jmgiru0bhGz1iw%3A1702303679276&source=hp&ei=vxd3ZZr-Dc6jkdUPmuetaA&iflsig=AO6bgOgAAAAAZXclz77TSgYDL4YSi89kghyTkFv-qYDC&oq=ver+kikis&gs_lp=Egdnd3Mtd2l6Igl2ZXIga2lraXMqAggEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I2i9QAFiHFHAAeACQAQCYAd0CoAGKCqoBBzIuNS4xLjG4AQHIAQD4AQHCAgoQIxiABBiKBRgnwgIREC4YgAQYsQMYgwEYxwEYrwHCAgsQABiABBixAxiDAcICERAuGIAEGLEDGIMBGMcBGNEDwgIOEC4YgAQYsQMYxwEY0QPCAg4QLhiABBiKBRixAxiDAcICCxAuGIAEGMcBGNEDwgILEC4YgAQYsQMYgwHCAgUQABiABMICBBAAGAPCAgcQABiABBgKwgIFEC4YgATCAgoQABiABBgUGIcC&sclient=gws-wiz",
  "4e236f34-b981-41c3-8c65-f8c9000b94e7": "https://www.google.com/search?q=ver+only+yesterday&sca_esv=589788475&sxsrf=AM9HkKnSuC4ZMXrtZroSf49XE66EnuYhAQ%3A1702303687522&ei=xxd3ZbK1H8aIkdUPibeN2AQ&ved=0ahUKEwjytOC0x4eDAxVGRKQEHYlbA0sQ4dUDCBA&uact=5&oq=ver+only+yesterday&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnZlciBvbmx5IHllc3RlcmRheUj6JFCZBFjMF3ABeAGQAQCYAaQBoAH-CqoBBDEwLjS4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIKEAAYgAQYigUYQ8ICEBAAGIAEGIoFGLEDGIMBGArCAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgIFEAAYgATCAg4QABiABBiKBRixAxiDAcICBBAAGAPCAgcQIRigARgKwgIEECEYCuIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp",
  "ebbb6b7c-945c-41ee-a792-de0e43191bd8": "https://www.google.com/search?q=ver+porco+rosso&sca_esv=589788475&sxsrf=AM9HkKlziNLRatpaF4v3RVe4TccQ7DYwkA%3A1702303731516&ei=8xd3ZdaEH4StkdUPxsiUiAU&ved=0ahUKEwiWyt3Jx4eDAxWEVqQEHUYkBVEQ4dUDCBA&uact=5&oq=ver+porco+rosso&gs_lp=Egxnd3Mtd2l6LXNlcnAiD3ZlciBwb3JjbyByb3NzbzIFEAAYgAQyBhAAGBYYHkiRGlC3BFjMFXABeACQAQCYAYYBoAGeCKoBAzkuMrgBA8gBAPgBAcICEBAAGIAEGIoFGEMYsQMYgwHCAgoQABiABBiKBRhDwgINEAAYgAQYigUYQxixA8ICBBAAGAPCAgsQABiABBixAxiDAcICCBAAGIAEGLED4gMEGAEgQYgGAQ&sclient=gws-wiz-serp",
  "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c": "https://www.google.com/search?q=ver+pompoko&sca_esv=589788475&sxsrf=AM9HkKlIyzGUAtKncJ68ZPWytrfAtJ3oRw%3A1702303756593&ei=DBh3ZfLjI5OLkdUP7MmDgAI&ved=0ahUKEwjymdjVx4eDAxWTRaQEHezkACAQ4dUDCBA&uact=5&oq=ver+pompoko&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3ZlciBwb21wb2tvSIgWUNMFWIkUcAJ4AZABAJgBaaAB-QSqAQM2LjG4AQPIAQD4AQHCAgsQABiABBixAxiDAcICBRAAGIAEwgIGEAAYFhgewgIKEAAYFhgeGA8YCuIDBBgAIEGIBgE&sclient=gws-wiz-serp",
  "ff24da26-a969-4f0e-ba1e-a122ead6c6e3": "https://www.google.com/search?q=ver+whisper+of+the+heart&sca_esv=589788475&sxsrf=AM9HkKnXc4Nf4_Y_6IuoU98As1ldzzvcWA%3A1702303824616&ei=UBh3ZZGLJeGqkdUPj-262A8&oq=ver+wisper&gs_lp=Egxnd3Mtd2l6LXNlcnAiCnZlciB3aXNwZXIqAggAMgcQABiABBgNMgYQABgeGA0yBhAAGB4YDTIGEAAYHhgNMgYQABgeGA0yDRAAGBYYHhgPGPEEGAoyCBAAGAUYHhgNMggQABgIGB4YDTIIEAAYCBgeGA0yCBAAGAgYHhgNSIMuULkEWOghcAF4AZABAJgBiAGgAbEFqgEDMy40uAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICCxAAGIAEGLEDGIMBwgIEEAAYA8ICBRAAGIAEwgIOEAAYgAQYigUYsQMYgwHCAgoQABiABBiKBRhD4gMEGAAgQYgGAZAGAg&sclient=gws-wiz-serp",
  "0440483e-ca0e-4120-8c50-4c8cd9b965d6": "https://www.google.com/search?q=ver+mononoke&sca_esv=589788475&sxsrf=AM9HkKmvhB4xx_GbLKbWvX0ibWZl0SriTw%3A1702303853551&ei=bRh3ZauQIdPgkdUP1bymkAQ&ved=0ahUKEwjr-vWDyIeDAxVTcKQEHVWeCUIQ4dUDCBA&uact=5&oq=ver+mononoke&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHZlciBtb25vbm9rZTIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IthhQvARYthZwAXgAkAEAmAF2oAGVBqoBAzQuNLgBA8gBAPgBAcICCBAAGIAEGLADwgIKEAAYgAQYigUYQ8ICCxAAGIAEGLEDGIMBwgIEEAAYA8ICCxAuGIAEGMcBGK8BwgIKEAAYgAQYFBiHAuIDBBgBIEGIBgGQBgE&sclient=gws-wiz-serp",
  "45204234-adfd-45cb-a505-a8e7a676b114": "https://www.google.com/search?q=ver+My+Neighbors+the+Yamadas&sca_esv=589788475&sxsrf=AM9HkKkHjfxyy0aR8U-AQnjcUw1i-JZ_7w%3A1702303894623&ei=lhh3ZdnSJe7VkdUP9vy26AM&ved=0ahUKEwjZ9cCXyIeDAxXuaqQEHXa-DT0Q4dUDCBA&uact=5&oq=ver+My+Neighbors+the+Yamadas&gs_lp=Egxnd3Mtd2l6LXNlcnAiHHZlciBNeSBOZWlnaGJvcnMgdGhlIFlhbWFkYXMyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjLClDwA1jwA3ABeAGQAQCYAXWgAXWqAQMwLjG4AQPIAQD4AQL4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp",
  "dc2e6bd1-8156-4886-adff-b39e6043af0c": "https://www.google.com/search?q=ver+Spirited+Away&sca_esv=589788475&sxsrf=AM9HkKnr27tDkatbdIjVv079WtVxQr-8wQ%3A1702303926068&ei=thh3ZePLA4WqkdUP-6K7oAQ&ved=0ahUKEwjj_r-myIeDAxUFVaQEHXvRDkQQ4dUDCBA&uact=5&oq=ver+Spirited+Away&gs_lp=Egxnd3Mtd2l6LXNlcnAiEXZlciBTcGlyaXRlZCBBd2F5SMQHUABYAHAAeAGQAQCYAVugAVuqAQExuAEDyAEA-AEC-AEB4gMEGAAgQYgGAQ&sclient=gws-wiz-serp",
  "90b72513-afd4-4570-84de-a56c312fdf81": "https://www.google.com/search?q=ver+The+Cat+Returns&sca_esv=589788475&sxsrf=AM9HkKndKAFoCFRJyxN6Z9NiXLVrhxScDA%3A1702303953616&ei=0Rh3ZY74JN-skdUP-aaDmAw&ved=0ahUKEwjOpNGzyIeDAxVfVqQEHXnTAMMQ4dUDCBA&uact=5&oq=ver+The+Cat+Returns&gs_lp=Egxnd3Mtd2l6LXNlcnAiE3ZlciBUaGUgQ2F0IFJldHVybnNI5ghQ7QNY7QNwAXgBkAEAmAFvoAFvqgEDMC4xuAEDyAEA-AEC-AEBwgIKEAAYRxjWBBiwA-IDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp",
  "cd3d059c-09f4-4ff3-8d63-bc765a5184fa": "https://www.google.com/search?q=ver+Howl%27s+Moving+Castle&sca_esv=589788475&sxsrf=AM9HkKkqLmZ6uWp3K74p2dAG6Qu89nwwJQ%3A1702303978350&ei=6hh3ZZX0FOikkdUP2OirkAE&ved=0ahUKEwiVkbe_yIeDAxVoUqQEHVj0ChIQ4dUDCBA&uact=5&oq=ver+Howl%27s+Moving+Castle&gs_lp=Egxnd3Mtd2l6LXNlcnAiGHZlciBIb3dsJ3MgTW92aW5nIENhc3RsZUiJHVDVBViGFHABeAGQAQCYAWygAakCqgEDMS4yuAEDyAEA-AEC-AEBwgIKEAAYRxjWBBiwA8ICCBAAGAgYBxge4gMEGAAgQYgGAZAGBQ&sclient=gws-wiz-serp",
  "112c1e67-726f-40b1-ac17-6974127bb9b9": "https://www.google.com/search?q=ver+Tales+from+Earthsea&sca_esv=589788475&sxsrf=AM9HkKl8yZ0UbjToTOr6odgOUuNoGfNNBg%3A1702304009975&ei=CRl3ZdqTO6mLkdUP7oiHsAY&ved=0ahUKEwiavMHOyIeDAxWpRaQEHW7EAWYQ4dUDCBA&uact=5&oq=ver+Tales+from+Earthsea&gs_lp=Egxnd3Mtd2l6LXNlcnAiF3ZlciBUYWxlcyBmcm9tIEVhcnRoc2VhSMAFUABYAHAAeAGQAQCYAXCgAXCqAQMwLjG4AQPIAQD4AQL4AQHiAwQYACBBiAYB&sclient=gws-wiz-serp",
  "758bf02e-3122-46e0-884e-67cf83df1786": "https://www.google.com/search?q=ver+ponyo&sca_esv=589788475&sxsrf=AM9HkKnXyXdEZBlYmIlavj_k7Cr-I5iHAA%3A1702304036307&ei=JBl3ZcCyEp-jkdUP24q58AM&ved=0ahUKEwjA1IjbyIeDAxWfUaQEHVtFDj4Q4dUDCBA&uact=5&oq=ver+ponyo&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXZlciBwb255bzIFEAAYgARIzBBQpQhY9w5wAXgAkAEAmAFgoAHBA6oBATW4AQPIAQD4AQHCAhAQABiABBiKBRhDGLEDGIMBwgIIEAAYgAQYsQPCAgQQABgDwgILEAAYgAQYsQMYgwHCAg4QABiABBiKBRixAxiDAcICChAjGIAEGIoFGCfiAwQYASBBiAYB&sclient=gws-wiz-serp",
  "2de9426b-914a-4a06-a3a0-5e6d9d3886f6": "https://www.google.com/search?q=ver+arriety&sca_esv=589788475&sxsrf=AM9HkKnmhF9vYZmSNdIGXBiFi4ODH-KG8g%3A1702304141633&ei=jRl3ZduYJvKlkdUPha2O0AY&ved=0ahUKEwibk6WNyYeDAxXyUqQEHYWWA2oQ4dUDCBA&uact=5&oq=ver+arriety&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3ZlciBhcnJpZXR5SLEOUI8DWJwNcAF4AZABAJgBZKAB6gSqAQM2LjG4AQPIAQD4AQHCAhAQABiABBiKBRhDGLEDGIMBwgIKEAAYgAQYigUYQ8ICBRAAGIAEwgIOEAAYgAQYigUYsQMYgwHCAgsQABiABBixAxiDAcICCxAuGIAEGMcBGK8BwgIGEAAYFhgewgIIEAAYFhgeGA_CAgoQABgWGB4YDxgK4gMEGAAgQYgGAQ&sclient=gws-wiz-serp",
  "45db04e4-304a-4933-9823-33f389e8d74d": "https://www.google.com/search?q=ver+From+Up+on+Poppy+Hill&sca_esv=589788475&sxsrf=AM9HkKkAfnBspRJNm1sOY1T-d0ep_f3asQ%3A1702304163311&ei=oxl3Ze6tEsKakdUPkJaoiAg&ved=0ahUKEwiui9CXyYeDAxVCTaQEHRALCoEQ4dUDCBA&uact=5&oq=ver+From+Up+on+Poppy+Hill&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXZlciBGcm9tIFVwIG9uIFBvcHB5IEhpbGxIpQpQ3wNY3wNwAXgBkAEAmAHTAaAB0wGqAQMyLTG4AQPIAQD4AQL4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGBA&sclient=gws-wiz-serp",
  "67405111-37a5-438f-81cc-4666af60c800": "https://www.google.com/search?q=ver+The+Wind+Rises&sca_esv=589788475&sxsrf=AM9HkKkiGgYY6yqADTh7XzwyrCp7iCs5mw%3A1702304184881&ei=uBl3ZZ6wNYibkdUPivOSoAE&ved=0ahUKEwie7PShyYeDAxWITaQEHYq5BBQQ4dUDCBA&uact=5&oq=ver+The+Wind+Rises&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnZlciBUaGUgV2luZCBSaXNlczIFEAAYgAQyBhAAGBYYHki1EFDSA1jIDnABeAGQAQCYAYcBoAHUAqoBAzEuMrgBA8gBAPgBAfgBAsICChAAGEcY1gQYsAPCAg0QLhiABBiKBRhDGLEDwgIKEAAYgAQYigUYQ8ICCBAAGIAEGLEDwgIFEC4YgATCAhwQLhiABBiKBRhDGLEDGJcFGNwEGN4EGOAE2AEBwgIEECMYJ8ICChAjGIAEGIoFGCfiAwQYACBBiAYBkAYCugYGCAEQARgU&sclient=gws-wiz-serp",
  "578ae244-7750-4d9f-867b-f3cd3d6fecf4": "https://www.google.com/search?q=ver+The+Tale+of+the+Princess+Kaguya&sca_esv=589788475&sxsrf=AM9HkKljNK4bk1JvFf438T30_e-gZfb0kA%3A1702304209118&ei=0Rl3ZdaiBvCqkdUP-oufwAk&ved=0ahUKEwiWz7utyYeDAxVwVaQEHfrFB5gQ4dUDCBA&uact=5&oq=ver+The+Tale+of+the+Princess+Kaguya&gs_lp=Egxnd3Mtd2l6LXNlcnAiI3ZlciBUaGUgVGFsZSBvZiB0aGUgUHJpbmNlc3MgS2FndXlhSOgJUIgEWIgEcAF4AZABAJgBZKABZKoBAzAuMbgBA8gBAPgBAvgBAcICChAAGEcY1gQYsAPiAwQYACBBiAYBkAYF&sclient=gws-wiz-serp",
  "5fdfb320-2a02-49a7-94ff-5ca418cae602": "https://www.google.com/search?q=ver+When+Marnie+Was+There&sca_esv=589788475&sxsrf=AM9HkKnA6GA8hUPGtOMY-sPXexpETaXvUQ%3A1702304231539&ei=5xl3ZfC0ILKikdUP97C18Ag&ved=0ahUKEwiwxJS4yYeDAxUyUaQEHXdYDY4Q4dUDCBA&uact=5&oq=ver+When+Marnie+Was+There&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXZlciBXaGVuIE1hcm5pZSBXYXMgVGhlcmUyBRAhGKABMgUQIRigATIFECEYoAEyCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdSPgLUPUDWPUDcAF4AJABAJgBswGgAbMBqgEDMC4xuAEDyAEA-AEC-AEB4gMEGAEgQYgGAQ&sclient=gws-wiz-serp",
  "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500": "https://www.google.com/search?q=ver+The+Red+Turtle&sca_esv=589788475&sxsrf=AM9HkKlzjIhJmpjwLHXnBwZqsIu8DQP1xA%3A1702304324185&ei=RBp3ZZTNCoKakdUP1OOg4Ac&ved=0ahUKEwiU_6rkyYeDAxUCTaQEHdQxCHwQ4dUDCBA&uact=5&oq=ver+The+Red+Turtle&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnZlciBUaGUgUmVkIFR1cnRsZTIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkiKBVAAWABwAHgBkAEAmAF4oAF4qgEDMC4xuAEDyAEA-AEC-AEB4gMEGAAgQYgGAQ&sclient=gws-wiz-serp",
  "790e0028-a31c-4626-a694-86b7a8cada40": "https://www.google.com/search?q=ver+Earwig+and+the+Witch&sca_esv=589788475&sxsrf=AM9HkKl2mwH2Hkxo7FE27ByjsJ_104-KBA%3A1702304345106&ei=WRp3ZYv3BdeqkdUP-J2K4A0&ved=0ahUKEwjLh6juyYeDAxVXVaQEHfiOAtwQ4dUDCBA&uact=5&oq=ver+Earwig+and+the+Witch&gs_lp=Egxnd3Mtd2l6LXNlcnAiGHZlciBFYXJ3aWcgYW5kIHRoZSBXaXRjaDIFECEYoAEyBRAhGKABMgQQIRgVSNMIUM8DWM8DcAF4AJABAJgBlwGgAZcBqgEDMC4xuAEDyAEA-AEC-AEB4gMEGAEgQYgGAQ&sclient=gws-wiz-serp"
};

const sinopsis = {
  "2baf70d1-42bb-4437-b551-e5fed5a87abe": "mivecinototoro.html",
  "58611129-2dbc-4a81-a72f-77ddfc1b1b49": "mivecinototoro.html"
};

document.addEventListener('DOMContentLoaded', function () {


  const url = 'https://ghibliapi.vercel.app/films';
  const main = document.getElementById("main");
  const container = document.querySelector(".container");


  fetch(url)
    .then(response => response.json())
    .then(films => {

      films.forEach(film => printData(film));
    })
    .catch(error => {
      console.log('Error', error);
    });


  const printData = (film) => {

    const app = document.getElementsByClassName('container')

    const filmHTML = `
    <div class="card">
      <img src="${film.image}" class="card-img-top" alt="${film.title}"> 
      <div class="card-body">
        <h5 class="card-title">${film.title}</h5>
        <h5 class="card-title">${film.original_title}</h5>
        <p class="card-text">${film.description}</p>
        <p class="card-text"><strong>Director:</strong> ${film.director}</p>
        <p class="card-text"><strong>Release Date:</strong> ${film.release_date}</p>
        
       <a href="${customURLs[film.id]}" class="btn btn-primary">Ver Película</a><br>

       <a href="${sinopsis[film.id]}" class="masinfo">+Info</a>
      </div>
    </div>
  `;


    container.innerHTML += filmHTML;
  };
});

