require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = 'brightlayer-ui-material-symbols'
  s.version      = package['version']
  s.summary      = package['description']
  s.homepage     = package['homepage']
  s.license      = package['license']
  s.authors      = package['author']

  s.platforms    = { ios: min_ios_version_supported, tvos: '9.0', visionos: '1.0' }
  s.source       = { git: package['repository']['url'], tag: "v#{s.version}" }

  s.resources = 'fonts/*.ttf'
end