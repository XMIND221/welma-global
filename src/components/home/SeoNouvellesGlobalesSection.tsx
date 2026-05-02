import { siteBaseUrl } from "@/lib/seo";

/**
 * Bloc éditorial SEO — mot-clé « nouvelles globales » (contenu unique, français).
 * Visuellement discret (fond secondaire) pour ne pas casser le hero catalogue.
 */
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nouvelles globales en temps réel — Welma Global",
  description:
    "Comment les nouvelles globales sur l'électroménager, le mobilier et la tech éclairent vos achats à Dakar avec WELMA Electronic.",
  author: { "@type": "Organization", name: "WELMA Electronic" },
  publisher: { "@type": "Organization", name: "Welma Global — WELMA Electronic" },
  inLanguage: "fr-SN",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteBaseUrl}/` },
};

const SeoNouvellesGlobalesSection = () => (
  <section
    className="border-y border-border/60 bg-secondary/30 py-16 md:py-20"
    aria-labelledby="seo-nouvelles-globales-title"
  >
    <div className="mx-auto max-w-3xl px-4">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary">
        Guide &amp; actualité
      </p>
      <h2 id="seo-nouvelles-globales-title" className="mt-3 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        Suivre les nouvelles globales pour mieux équiper votre foyer
      </h2>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Welma Global — WELMA Electronic, Ouest Foire, Dakar
      </p>

      <article className="mt-12 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Sur <strong className="text-foreground">Welma Global</strong>, nous pensons que les{" "}
          <strong className="text-foreground">nouvelles globales</strong> concernant l&apos;électronique, le mobilier
          et la mobilité numérique ne sont pas réservées aux grands sites d&apos;information : elles vous aident à
          choisir des produits fiables, durables et adaptés au quotidien à Dakar. En suivant les{" "}
          <strong className="text-foreground">nouvelles globales</strong> sur les standards énergétiques, les
          formats d&apos;écran ou les tendances matières, vous comparez plus sereinement avant d&apos;investir dans un
          réfrigérateur, un salon ou un smartphone.
        </p>

        <h2 className="!mt-10 text-xl font-bold text-foreground">Actualités mondiales et sélection produits</h2>
        <p>
          Les <strong className="text-foreground">actualités mondiales</strong> sur les chaînes d&apos;approvisionnement
          et les innovations constructeurs influencent directement les catalogues locaux. Chez WELMA Electronic, nous
          croisons ces signaux avec la demande du marché sénégalais : disponibilité, service après-vente, facilité de
          commande WhatsApp. Ainsi, lorsque les <strong className="text-foreground">nouvelles globales</strong>{" "}
          annoncent une évolution des normes ou une montée en gamme des gammes entrée de gamme, nous ajustons nos
          vitrines pour proposer des références pertinentes, sans surcharge marketing inutile.
        </p>
        <p>
          Pour nos clients, garder un œil sur ces <strong className="text-foreground">nouvelles globales</strong>, c&apos;est
          aussi anticiper les promotions saisonnières et les arrivages. Notre équipe vulgarise ces mouvements
          internationaux en conseils simples : taille d&apos;appareil adaptée à votre pièce, compatibilité électrique,
          entretien dans un climat tropical. L&apos;objectif reste le même : transformer l&apos;information globale en
          décision d&apos;achat claire.
        </p>
        <p>
          Parce que les <strong className="text-foreground">nouvelles globales</strong> circulent vite sur les réseaux
          sociaux, il est facile de confondre rumeur et fiche technique officielle. Nous privilégions les sources
          constructeur, les retours utilisateurs longs formats et les certifications visibles sur l&apos;emballage.
          Cette discipline de lecture — au-delà du simple titre accrocheur — protège votre budget et limite les mauvaises
          surprises après livraison. C&apos;est aussi ce qui distingue une boutique de proximité d&apos;un flux
          d&apos;annonces impersonnelles.
        </p>
        <p>
          Enfin, rapprocher les <strong className="text-foreground">nouvelles globales</strong> de votre projet de
          rénovation ou d&apos;équipement permet d&apos;harmoniser styles et performances : une cuisine moderne avec
          four performant, un salon accueillant avec une TV adaptée à la distance de vision, une literie alignée sur
          les recommandations d&apos;hygiène du sommeil. Welma Global sert de passerelle entre ces standards
          internationaux et votre réalité locale, avec des conseils formulés en français clair et des réponses rapides.
        </p>

        <h2 className="!mt-10 text-xl font-bold text-foreground">Tendances globales &amp; expérience d&apos;achat</h2>
        <p>
          Les <strong className="text-foreground">tendances globales</strong> — design épuré, connectivité, économie
          d&apos;énergie — se retrouvent désormais dans les foyers dakarois. Lorsque vous parcourez{" "}
          <strong className="text-foreground">Welma Global</strong>, vous retrouvez ces inspirations traduites en
          produits concrets : téléviseurs QLED ou Crystal, fours et plaques performants, literie et salons confortables,
          accessoires audio sans fil. Les <strong className="text-foreground">nouvelles globales</strong> sur
          l&apos;expérience utilisateur poussent les fabricants à simplifier les interfaces ; nous privilégions des
          modèles dont la prise en main reste intuitive, même pour un premier équipement.
        </p>
        <p>
          Par ailleurs, la proximité WhatsApp raccourcit la distance entre ces <strong>tendances globales</strong> et
          votre salon : une question sur une fonctionnalité annoncée à l&apos;international peut être tranchée en
          quelques messages avec un conseiller WELMA. Cette hybridation — veille mondiale, réponse locale — définit
          notre approche commerciale au quotidien.
        </p>

        <h2 className="!mt-10 text-xl font-bold text-foreground">Informations internationales &amp; qualité locale</h2>
        <p>
          Les <strong className="text-foreground">informations internationales</strong> sur la sécurité des batteries,
          la compatibilité des chargeurs ou la durabilité des textiles filtrent naturellement notre sourcing. Nous
          évitons les références « jetables » lorsque les retours terrain sont mitigés, même si elles font la une des
          places de marché à l&apos;étranger. À l&apos;inverse, lorsque les <strong className="text-foreground">nouvelles globales</strong>{" "}
          valident une série pour sa robustesse, nous la mettons en avant dans nos rayons numériques et en magasin.
        </p>
        <p>
          En résumé, consulter les <strong className="text-foreground">nouvelles globales</strong> ne remplace pas
          l&apos;avis d&apos;un professionnel : cela le complète. Sur Welma Global, nous vous invitons à combiner cette
          veille avec nos recommandations personnalisées, pour un achat réfléchi — du premier contact WhatsApp à la
          livraison à Dakar. Si vous souhaitez un comparatif précis (taille d&apos;écran, capacité de froid, dimensions
          de canapé), mentionnez-le : nous intégrons ces critères aux évolutions que nous lisons dans les{" "}
          <strong className="text-foreground">nouvelles globales</strong> du secteur, afin de garder un catalogue à la
          fois moderne et ancré dans vos usages réels.
        </p>
        <p>
          Du côté logistique, les <strong className="text-foreground">informations internationales</strong> sur les
          délais portuaires ou les pics de demande aident à planifier les stocks : lorsque nous savons qu&apos;une série
          risque d&apos;être tendue, nous prévenons nos clients et proposons des alternatives équivalentes. Cette
          transparence réduit le stress lié aux ruptures et renforce la confiance. Les <strong>nouvelles globales</strong>{" "}
          deviennent alors un outil d&apos;anticipation partagé entre vous et notre équipe, plutôt qu&apos;un bruit de
          fond lointain.
        </p>
        <p>
          Pour les familles nombreuses ou les petites entreprises, lire les <strong className="text-foreground">nouvelles globales</strong>{" "}
          sur la consommation électrique ou la connectivité IoT permet aussi d&apos;éviter la sous-dimension : un
          routeur stable, un groupe électrogène compatible, un réfrigérateur adapté au volume de courses hebdomadaire.
          Nous documentons ces sujets lors des échanges WhatsApp, avec des schémas simples ou des photos du showroom
          lorsque cela clarifie le besoin.
        </p>

        <p className="!mt-8 rounded-2xl border border-border/60 bg-card/80 p-5 text-sm text-foreground">
          <strong>Besoin d&apos;un conseil immédiat ?</strong> Écrivez-nous sur WhatsApp avec le type d&apos;appareil
          recherché : nous croisons votre besoin avec les dernières{" "}
          <strong>nouvelles globales</strong> produits utiles pour votre budget.
        </p>
      </article>

      <script
        type="application/ld+json"
        // Contenu statique JSON-LD (Article) pour le maillage sémantique Google
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </div>
  </section>
);

export default SeoNouvellesGlobalesSection;
